# claudefirm.com

Marketing site for ClaudeFirm. Static Vite + React + Tailwind, deployed to GitHub Pages.

## Local (host pnpm)

```bash
pnpm install
pnpm dev
```

## Local (docker compose)

For containerized iteration — same pnpm dev-server, no host node/pnpm
required, what the Fourslide fleet's Head of Growth uses to iterate:

```bash
docker compose -f docker-compose.dev.yml up
```

Open http://localhost:5173 — Vite serves with hot reload. Edit `src/`
and the page refreshes automatically. Tear down with
`docker compose -f docker-compose.dev.yml down`.

## Deploy

Push to `main` — `.github/workflows/pages.yml` builds and deploys to GitHub Pages.

Custom domain `claudefirm.com` is configured via `public/CNAME` + DNS A records pointing at GitHub Pages.
