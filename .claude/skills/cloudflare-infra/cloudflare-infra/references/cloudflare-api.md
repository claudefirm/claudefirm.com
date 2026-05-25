# Cloudflare API Patterns

Base URL: `https://api.cloudflare.com/client/v4`
Auth header: `Authorization: Bearer $CF_API_TOKEN`
Account ID: `c6c0da6f79d5b4a62fe1d2eff2f108e5`

Retrieve token: `op item get hnk6uyj3tcg4tfvzse3fi3b7de --fields credential --reveal`

## Admin auth (Authentik OIDC — NOT Cloudflare Access)

The `/admin` route is gated by the Worker's own OIDC flow (`@hono/oidc-auth`) against
Authentik at `auth.darrengruber.com` — there is no Cloudflare Access application. Manage
who can sign in via the **Authentik** application's authorization policy, provisioned in
darren-iac (`authentik_app`, provider_type `oauth2`, slug `claudefirm-admin`). The OAuth2
client id/secret flow to the Worker as the `OIDC_CLIENT_ID` / `OIDC_CLIENT_SECRET`
secrets. External viewers must have an Authentik account.

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
