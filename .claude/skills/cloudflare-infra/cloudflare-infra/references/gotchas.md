# Cloudflare Worker gotchas (claudefirm.com)

Hard-won during the GitHub Pages → Worker migration (2026-05-25, ADR-0001).

## `run_worker_first` — the SPA asset fallback shadows Worker routes in browsers

With `assets.not_found_handling = "single-page-application"` **and** a Worker
(`main`), Cloudflare's asset layer serves `index.html` for **browser navigation
requests** (`Sec-Fetch-Dest: document`) to non-asset paths *before* the Worker
runs. So `/admin`, `/callback`, `/api/*` silently render the marketing SPA in a
real browser.

**Why it's a trap:** `curl` doesn't send `Sec-Fetch-*` headers, so it falls
through to the Worker and returns the correct response (e.g. `/admin` → 302).
The bug is invisible to curl-based testing and only shows in a browser.

**Fix / how to apply:** list Worker-owned paths in `assets.run_worker_first`
(string-array of globs), e.g. `["/admin", "/admin/*", "/api/*", "/callback"]`.
Everything else still serves assets directly + SPA fallback. When a Worker has
both static assets and API/auth routes, always verify route coexistence with
browser navigation headers (`-H 'Sec-Fetch-Dest: document'`), not just curl.

## Worker custom-domain cutover is two-phase + leaves a ~30-min DNS negative-cache

Attaching a Worker **custom domain** creates a Workers-managed synthesized DNS
record; CF rejects the attach if a conflicting A/AAAA/CNAME already exists
(error 81062). So an apex cutover must **destroy the old records first, then
attach** — a few-second window where the host has no record.

**Why it bites:** resolvers cache that "no record" answer as NODATA for CF's
SOA-minimum negative TTL (**1800s / 30 min**). The operator then sees
"claudefirm.com won't resolve" for up to 30 min even though the authoritative
NS and public resolvers (1.1.1.1/8.8.8.8) are already correct. Custom-domain
records also don't appear in the zone DNS-records API (`meta.source: worker`).

**How to apply:** after a custom-domain cutover, expect a local negative-cache
hangover; verify with `dig @1.1.1.1` (ground truth), not the local resolver. To
avoid the window entirely, use a Worker **Route** over a **proxied** record
(updated in-place, never absent) instead of a custom domain.

## Getting CF tokens for deploy / secrets / Turnstile (no Global API key)

CI deploys via OpenBao GitHub-OIDC (`claudefirm-worker-deploy` role). From a
**workstation**, mint scoped tokens from the OpenBao `cloudflare-account`
secrets engine instead of the 1Password Global key:

- **Worker deploy / `wrangler secret put`:** `bao read cloudflare-account/creds/worker-claudefirm`
  (Workers Scripts + KV write). An admin vault token (`bao-exec --vault`) can
  read any `creds/<role>` path directly.
- **Turnstile secret recovery:** mint a transient role with Action
  `["Turnstile Sites Read"]`, then `GET .../challenges/widgets/<sitekey>` — the
  widget's `secret` IS returned by the API (unlike write-only Worker secrets),
  so `TURNSTILE_SECRET_KEY` is recoverable without rotating the widget.
- **`bao-exec --cf`** mints a DNS/Pages-scoped token only (returns CF auth error
  10000 on Workers ops). A DNS+Workers cutover needs a token with `DNS Write` +
  `Workers Scripts Write` + `Workers Routes Write`.

See `../../../../docs/adr/0001-cloudflare-worker-with-authentik-oidc-admin.md`
for the architecture, and the darren-iac `cloudflare-pages-ci.tf` /
`authentik-darrengruber` workspaces for the OpenBao role + OIDC app.
