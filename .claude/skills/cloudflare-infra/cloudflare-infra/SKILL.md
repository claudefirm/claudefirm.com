---
name: cloudflare-infra
description: Manage ClaudeFirm's Cloudflare infrastructure — the `claudefirm` Worker, static asset hosting, KV storage, Turnstile bot protection, and the Authentik-OIDC-gated admin route. Use when deploying, managing Worker secrets, inspecting waitlist KV, debugging Worker routes, or any Cloudflare configuration task for this project.
---

# ClaudeFirm Cloudflare Infrastructure

## Architecture

A single Cloudflare **Worker** (`claudefirm`) serves the Vite + React SPA as static
assets (the `ASSETS` binding) and runs `worker.js` API routes via **Hono**:

- `POST /api/waitlist` — Turnstile-verified signup, written to the `WAITLIST` KV.
- `/admin` + `GET /api/admin/waitlist` — waitlist viewer, gated by **Worker-native
  OIDC** (`@hono/oidc-auth`) against **Authentik** at `auth.darrengruber.com`.
- everything else falls through to the static SPA (`not_found_handling=single-page-application`).

There is **no Cloudflare Access / Zero Trust** and **no Google login** — admin auth is
the Worker's own OIDC flow against Authentik. See ADR-0001 (`docs/adr/`).

**Key files:** `wrangler.jsonc` (Worker config + assets + KV + OIDC vars),
`worker.js` (Hono app), `src/components/ui/WaitlistForm.jsx` (Turnstile widget + POST).

## Credentials & secrets

Worker secrets are set with `wrangler secret put <NAME>` (persist across deploys; not in CI):

| Secret | Purpose | Source |
|--------|---------|--------|
| `TURNSTILE_SECRET_KEY` | Turnstile server-side verification | Cloudflare Turnstile widget |
| `OIDC_CLIENT_ID` | Authentik OAuth2 client id | darren-iac `authentik_app` output / SSM |
| `OIDC_CLIENT_SECRET` | Authentik OAuth2 client secret | darren-iac `authentik_app` output / SSM |
| `OIDC_AUTH_SECRET` | ≥32-char key signing the session JWT cookie | generated |

Non-secret OIDC config (`OIDC_ISSUER`, `OIDC_REDIRECT_URI`) lives in `wrangler.jsonc` `vars`.
Turnstile **site** key is `0x4AAAAAACuMSzRVNaEyZe7H` (public, in `src/lib/constants.js`).

## Resource IDs

- Account: `c6c0da6f79d5b4a62fe1d2eff2f108e5`
- KV (WAITLIST): `7a77531c04a440d59b409192363fab11`
- Zone (claudefirm.com): `bd7975f1c64360961890dea539517c83`
- Authentik OIDC app slug: `claudefirm-admin` (provisioned via darren-iac `authentik_app`)

## Common Operations

### Deploy
Push to `main` → `.github/workflows/deploy.yml` mints a short-lived, Worker-scoped CF
token from OpenBao via GitHub OIDC, then runs `wrangler deploy`. Manual: `pnpm deploy`.

### Set / rotate a secret
```
wrangler secret put OIDC_CLIENT_SECRET --name claudefirm
```

### Inspect the waitlist KV
```
wrangler kv key list  --namespace-id 7a77531c04a440d59b409192363fab11
wrangler kv key get <email> --namespace-id 7a77531c04a440d59b409192363fab11
```

### Local development
- SPA only (hot reload): `pnpm dev` (Vite).
- Full Worker (API routes + assets): `pnpm cf-dev` (`wrangler dev`).

### Manage who can view /admin
Admin access is governed by the **Authentik** application's authorization policy
(auth.darrengruber.com), not by an allow-list in this repo. Add a user there, or adjust
the app's policy binding in darren-iac. External viewers must have an Authentik account.

### Infra (DNS, custom domain, OIDC app, deploy token)
Lives in **darren-iac**:
- `tofu/cloudflare/claudefirm_com.tf` — zone, DNS, and the `cloudflare_workers_custom_domain` bindings (apex + www) → the `claudefirm` Worker.
- `tofu/authentik-darrengruber/apps.auto.tfvars` — the `claudefirm-admin` OAuth2 app on the **auth.darrengruber.com** instance (NOT the claudefirm-platform Authentik). Its client id/secret are written to SSM `/claudefirm-admin/authentik/client_{id,secret}`.
- `tofu/controlplane/openbao/cloudflare-pages-ci.tf` — the `claudefirm-worker-deploy` JWT role + `worker-claudefirm` CF secrets-engine role.

These workspaces are CI-skipped; apply out-of-band with `bao-exec` (darrengruber account).

## Gotchas

See [references/gotchas.md](references/gotchas.md): the `run_worker_first` SPA-shadow
trap (`/admin` rendered the marketing page in browsers but redirected under curl), the
two-phase Worker custom-domain cutover + 30-min DNS negative-cache, and how to mint
scoped CF tokens (incl. recovering the Turnstile secret) without the Global API key.
