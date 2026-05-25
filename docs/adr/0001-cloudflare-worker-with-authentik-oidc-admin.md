# Migrate claudefirm.com from GitHub Pages back to a Cloudflare Worker

Status: accepted

The marketing site moved to GitHub Pages in `641c850` (stripping an earlier Cloudflare
Worker), which left the waitlist as a dead client-side "email us" form. We are moving
back to a Cloudflare Worker so the waitlist again captures emails to the `WAITLIST` KV,
and gating the `/admin` viewer with **Worker-native Authentik OIDC** (Hono +
`@hono/oidc-auth`) instead of Cloudflare Access. The deploy authenticates to Cloudflare
with a short-lived, Worker-scoped token minted from OpenBao via GitHub OIDC on the
in-cluster `arc-runners-claudefirm` runner — the same no-stored-secret pattern as
claudeburner.com (darren-iac ADR-0008), but scoped to Workers Scripts + KV rather than
Pages.

## Considered options

- **Deploy target.** Pure-static Cloudflare Pages (matching claudeburner) vs. restoring
  the Worker. Chose the Worker because we want real waitlist capture (KV) and a
  server-side admin viewer, neither of which a static Pages deploy provides.
- **Admin auth.** CF Access + Google; CF Access + Authentik as IdP; CF Access with email
  one-time-PIN (already provisioned in IaC); Authentik forward-auth proxy outpost;
  Worker-native Authentik OIDC. Chose Worker-native Authentik OIDC and explicitly removed
  Cloudflare Access — one IdP, no Zero-Trust middleman, self-contained in the Worker.
- **Deploy credential.** Long-lived CF API token in a GitHub secret vs. OpenBao-minted
  short-lived token via GitHub OIDC. Chose OpenBao OIDC — no persistent write-scoped
  secret stored in GitHub.

## Consequences

- **Conscious waiver of the "no edge auth" rule.** darren-iac documents a rule that auth
  gating belongs cluster-side (oauth2-proxy + M365 or Authentik), never at the Cloudflare
  edge. Gating `/admin` inside the Worker via Authentik OIDC is auth at the edge — it is
  *not* Cloudflare Access and uses the approved Authentik IdP, but it deviates from the
  rule's wording. This was an explicit, deliberate waiver for this admin surface.
- **External admin viewers need Authentik identities.** The removed CF Access app let
  `carrie@schultzfamilylaw.com` + family in via email one-time-PIN with no account;
  Worker-native Authentik OIDC requires each viewer to have an account on
  `auth.darrengruber.com`. Accounts/invites must be created for them, or the admin viewer
  is operator-only.
- `cloudflare_zero_trust_access_application.claudefirm_admin` is removed from darren-iac
  `tofu/cloudflare/claudefirm_com.tf`.
- Requires new infra in darren-iac: a `claudefirm-worker-deploy` JWT role + a
  `worker-claudefirm` CF secrets-engine role (Workers Scripts + KV write), modeled on
  `cloudflare-pages-ci.tf`, plus an `authentik_app` (oauth2, confidential) for the OIDC
  client.
- The `variant-*` Knative/Flux preview pipeline is suspended (it is a separate deploy
  path from the production apex).
- The `cloudflare-infra` skill — which documents the obsolete CF Access + Google + Pages
  architecture — must be rewritten to match.
