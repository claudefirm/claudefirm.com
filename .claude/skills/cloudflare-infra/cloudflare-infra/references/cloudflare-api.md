# Cloudflare API Patterns

Base URL: `https://api.cloudflare.com/client/v4`
Auth header: `Authorization: Bearer $CF_API_TOKEN`
Account ID: `c6c0da6f79d5b4a62fe1d2eff2f108e5`

Retrieve token: `op item get hnk6uyj3tcg4tfvzse3fi3b7de --fields credential --reveal`

## Access Applications

### List apps
```
GET /accounts/{account_id}/access/apps
```

### Create app
```
POST /accounts/{account_id}/access/apps
{
  "name": "App Name",
  "type": "self_hosted",
  "self_hosted_domains": ["claudefirm.com/path"],
  "session_duration": "24h",
  "allowed_idps": ["<idp_id>"],
  "auto_redirect_to_identity": true,
  "policies": [{
    "name": "Policy Name",
    "decision": "allow",
    "precedence": 1,
    "include": [{"email": {"email": "user@example.com"}}]
  }]
}
```

### Update app
```
PUT /accounts/{account_id}/access/apps/{app_id}
```
Same body as create (without policies — update those separately).

### Update policy
```
PUT /accounts/{account_id}/access/apps/{app_id}/policies/{policy_id}
{
  "name": "Policy Name",
  "decision": "allow",
  "precedence": 1,
  "include": [{"email": {"email": "user@example.com"}}]
}
```

### Delete app
```
DELETE /accounts/{account_id}/access/apps/{app_id}
```

## Access Identity Providers

### List IdPs
```
GET /accounts/{account_id}/access/identity_providers
```

Current IdPs:
- Google: `244d93e6-0476-41a0-803d-8aa03502d87c`
- OTP (disabled in admin): `cf228fd9-4a47-4958-8c0c-000d84b4fa90`

## KV Operations (prefer wrangler CLI)

Namespace ID: `7a77531c04a440d59b409192363fab11`

```bash
# List keys
npx wrangler kv key list --namespace-id 7a77531c04a440d59b409192363fab11

# Get value
npx wrangler kv get <key> --namespace-id 7a77531c04a440d59b409192363fab11

# Put value
npx wrangler kv put <key> '<json>' --namespace-id 7a77531c04a440d59b409192363fab11

# Delete key
npx wrangler kv delete <key> --namespace-id 7a77531c04a440d59b409192363fab11
```

## Turnstile

Turnstile widget management requires a token with Turnstile edit permissions (the current wrangler OAuth token does NOT have this scope).

### Verify token server-side
```
POST https://challenges.cloudflare.com/turnstile/v0/siteverify
{
  "secret": "<TURNSTILE_SECRET_KEY>",
  "response": "<token_from_client>",
  "remoteip": "<optional_client_ip>"
}
```

Widget mode changes must be done in the CF dashboard (Turnstile > widget > Edit) or via agent-browser.

## Worker Secrets

```bash
npx wrangler secret put <NAME> --name claudefirm    # set
npx wrangler secret list --name claudefirm           # list
npx wrangler secret delete <NAME> --name claudefirm  # delete
```

## Verify Token
```
GET /user/tokens/verify
```
