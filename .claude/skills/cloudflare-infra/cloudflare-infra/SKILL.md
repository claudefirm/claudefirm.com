---
name: cloudflare-infra
description: Manage ClaudeFirm's Cloudflare infrastructure — Workers deployment, KV storage, Turnstile bot protection, and Access authentication. Use when deploying, managing secrets, adding/removing admin users, modifying Access policies, checking KV data, debugging Worker routes, or any Cloudflare configuration task for this project.
---

# ClaudeFirm Cloudflare Infrastructure

## Architecture

Cloudflare Worker (not Pages) with Vite + React SPA static assets, `worker.js` API routes, KV storage, Turnstile (invisible), and Cloudflare Access (Google login).

**Key files:** `wrangler.jsonc` (Worker config + KV), `worker.js` (API routes), `infra/setup.sh` (Access config via CF API).

## Credentials

| Secret | Where | Retrieve |
|--------|-------|----------|
| CF API token | 1Password | `op item get hnk6uyj3tcg4tfvzse3fi3b7de --fields credential --reveal` |
| TURNSTILE_SECRET_KEY | Wrangler secret | Set via `npx wrangler secret put` |
| Turnstile site key | Hardcoded | `0x4AAAAAACuMSzRVNaEyZe7H` in `WaitlistForm.jsx` |

## Resource IDs

- Account: `c6c0da6f79d5b4a62fe1d2eff2f108e5`
- KV (WAITLIST): `7a77531c04a440d59b409192363fab11`
- Google IdP: `244d93e6-0476-41a0-803d-8aa03502d87c`
- Access App: `7cae2b60-d5be-402e-a0e9-9ad33cb3ac20`

## Common Operations

### Deploy
Pushes to `main` auto-deploy. Manual: `npm run deploy`.

### Manage secrets
```
npx wrangler secret put TURNSTILE_SECRET_KEY --name claudefirm
```

### Inspect waitlist KV
```
npx wrangler kv key list --namespace-id 7a77531c04a440d59b409192363fab11
npx wrangler kv get <email> --namespace-id 7a77531c04a440d59b409192363fab11
```

### Add/remove admin users
Edit `ADMIN_EMAILS` in `infra/setup.sh`, then:
```
CF_API_TOKEN=$(op item get hnk6uyj3tcg4tfvzse3fi3b7de --fields credential --reveal) ./infra/setup.sh
```

### Add new API route
Add handler in `worker.js`, add route match in the `fetch()` export. Static assets fall through to `env.ASSETS.fetch(request)`.

### Modify Access policy directly
See [references/cloudflare-api.md](references/cloudflare-api.md) for CF API patterns for Access, Turnstile, and KV operations.
