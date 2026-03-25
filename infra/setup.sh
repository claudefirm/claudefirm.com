#!/usr/bin/env bash
# ClaudeFirm infrastructure setup
# Configures Cloudflare Access and Turnstile via the API.
# These resources aren't supported by wrangler config.
#
# Prerequisites:
#   - CF_API_TOKEN env var (needs Access + Turnstile edit permissions)
#   - 1Password CLI: op item get hnk6uyj3tcg4tfvzse3fi3b7de --fields credential --reveal
#
# Usage:
#   CF_API_TOKEN=$(op item get hnk6uyj3tcg4tfvzse3fi3b7de --fields credential --reveal) ./infra/setup.sh

set -euo pipefail

ACCOUNT_ID="c6c0da6f79d5b4a62fe1d2eff2f108e5"
GOOGLE_IDP_ID="244d93e6-0476-41a0-803d-8aa03502d87c"
DOMAIN="claudefirm.com"

ADMIN_EMAILS=(
  "dgruber@gmail.com"
  "sarahmgruber@gmail.com"
  "carrie@schultzfamilylaw.com"
  "carriegruber@gmail.com"
)

TURNSTILE_SITE_KEY="0x4AAAAAACuMSzRVNaEyZe7H"

: "${CF_API_TOKEN:?Set CF_API_TOKEN}"

api() {
  curl -sf "https://api.cloudflare.com/client/v4/$1" \
    -H "Authorization: Bearer $CF_API_TOKEN" \
    "${@:2}"
}

echo "=== Verifying API token ==="
api "user/tokens/verify" | python3 -c "import sys,json; d=json.load(sys.stdin); print('Token:', 'valid' if d['success'] else 'INVALID')"

# --- Cloudflare Access ---
echo ""
echo "=== Cloudflare Access ==="

# Build email include rules
EMAIL_RULES=$(printf '{"email":{"email":"%s"}},' "${ADMIN_EMAILS[@]}")
EMAIL_RULES="[${EMAIL_RULES%,}]"

# Check if Access app already exists
EXISTING_APP=$(api "accounts/$ACCOUNT_ID/access/apps" | python3 -c "
import sys,json
apps = json.load(sys.stdin).get('result',[])
for a in apps:
    if a.get('name') == 'ClaudeFirm Admin':
        print(a['id'])
        break
" 2>/dev/null || true)

if [ -n "$EXISTING_APP" ]; then
  echo "Updating existing Access app: $EXISTING_APP"
  api "accounts/$ACCOUNT_ID/access/apps/$EXISTING_APP" \
    -X PUT \
    -H "Content-Type: application/json" \
    -d '{
      "name": "ClaudeFirm Admin",
      "type": "self_hosted",
      "self_hosted_domains": ["'"$DOMAIN"'/admin", "'"$DOMAIN"'/api/admin"],
      "session_duration": "24h",
      "allowed_idps": ["'"$GOOGLE_IDP_ID"'"],
      "auto_redirect_to_identity": true
    }' | python3 -c "import sys,json; d=json.load(sys.stdin); print('  Domains:', d['result']['self_hosted_domains'])"

  # Update the policy
  POLICY_ID=$(api "accounts/$ACCOUNT_ID/access/apps/$EXISTING_APP/policies" | python3 -c "
import sys,json
policies = json.load(sys.stdin).get('result',[])
if policies: print(policies[0]['id'])
")
  if [ -n "$POLICY_ID" ]; then
    api "accounts/$ACCOUNT_ID/access/apps/$EXISTING_APP/policies/$POLICY_ID" \
      -X PUT \
      -H "Content-Type: application/json" \
      -d '{
        "name": "Admin Access",
        "decision": "allow",
        "precedence": 1,
        "include": '"$EMAIL_RULES"'
      }' | python3 -c "import sys,json; print('  Policy updated:', json.load(sys.stdin)['success'])"
  fi
else
  echo "Creating new Access app..."
  api "accounts/$ACCOUNT_ID/access/apps" \
    -X POST \
    -H "Content-Type: application/json" \
    -d '{
      "name": "ClaudeFirm Admin",
      "type": "self_hosted",
      "self_hosted_domains": ["'"$DOMAIN"'/admin", "'"$DOMAIN"'/api/admin"],
      "session_duration": "24h",
      "allowed_idps": ["'"$GOOGLE_IDP_ID"'"],
      "auto_redirect_to_identity": true,
      "policies": [{
        "name": "Admin Access",
        "decision": "allow",
        "precedence": 1,
        "include": '"$EMAIL_RULES"'
      }]
    }' | python3 -c "import sys,json; d=json.load(sys.stdin); print('  Created:', d['result']['id'] if d['success'] else d['errors'])"
fi

# --- Wrangler secrets ---
echo ""
echo "=== Wrangler Secrets ==="
echo "Ensure these are set (wrangler secret put <NAME> --name claudefirm):"
echo "  - TURNSTILE_SECRET_KEY"

# --- Summary ---
echo ""
echo "=== Configuration Summary ==="
echo "Domain:           $DOMAIN"
echo "Turnstile key:    $TURNSTILE_SITE_KEY (invisible mode)"
echo "Access IdP:       Google ($GOOGLE_IDP_ID)"
echo "Admin emails:     ${ADMIN_EMAILS[*]}"
echo "KV namespace:     WAITLIST (7a77531c04a440d59b409192363fab11)"
echo ""
echo "Done."
