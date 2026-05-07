# Builds the claudefirm-com Vite app and serves it with Caddy.
#
# This image is what the cluster's Knative Service runs. The CI pipeline
# builds + pushes one image per `variant-*` branch:
#   zot.grubernet.es/claudefirm-com/<variant>:<sha>
#   zot.grubernet.es/claudefirm-com/<variant>:latest
#
# Caddy is the serving runtime instead of nginx because:
#   - Single binary, ~50MB image vs nginx's setup overhead
#   - First-class SPA `try_files` directive, no custom config block
#   - Sane rootless defaults — no /tmp/nginx-* path gymnastics
#   - HTTP/3 + Brotli out of the box (overkill here but free)

# ---- Build stage ----
FROM node:22-alpine AS build
WORKDIR /src

# pnpm via corepack — version pinned by package.json packageManager when
# present; otherwise corepack picks a reasonable default. We pre-fetch
# deps to keep `pnpm install` fast on uncached layers.
RUN corepack enable && corepack prepare pnpm@10 --activate

COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile

COPY . .

# Vite's `base: "./"` keeps assets host-agnostic so the same build serves
# any *-dev.foursli.de host.
RUN pnpm build

# ---- Serve stage ----
FROM caddy:2-alpine
WORKDIR /srv

# Caddyfile mounts read-only; site content gets baked in.
COPY --from=build /src/dist /srv

# Inline a minimal Caddyfile. Single :8080 listener, SPA fallback to
# /index.html, immutable cache for hashed Vite assets, no-cache for
# index.html, /healthz for liveness/readiness probes, and a small
# /.source-* metadata pass-through so the cluster can confirm what
# was deployed.
COPY --chown=root:root <<EOF /etc/caddy/Caddyfile
{
    auto_https off
    admin off
    persist_config off
    servers {
        protocols h1 h2c
    }
}

:8080 {
    root * /srv
    encode gzip zstd

    handle /healthz {
        respond "ok" 200
    }

    @hashed {
        path *.js *.css *.woff *.woff2 *.ttf *.svg *.png *.jpg *.jpeg *.gif *.webp *.ico
    }
    header @hashed Cache-Control "public, max-age=31536000, immutable"

    @meta {
        path /.source-sha /.source-branch /.built-at
    }
    handle @meta {
        header Cache-Control "no-cache"
        file_server
    }

    handle {
        header Cache-Control "no-cache, no-store, must-revalidate"
        try_files {path} /index.html
        file_server
    }
}
EOF

# Drop a build-info file so the served site can be queried for what's live.
ARG SOURCE_SHA=unknown
ARG SOURCE_BRANCH=unknown
RUN printf "%s" "$SOURCE_SHA"    > /srv/.source-sha    && \
    printf "%s" "$SOURCE_BRANCH" > /srv/.source-branch && \
    date -u +"%Y-%m-%dT%H:%M:%SZ" > /srv/.built-at

# Caddy's default user is root; switch to non-root so the Knative
# Service runs under PSA restricted with no override.
RUN addgroup -g 65532 caddy 2>/dev/null || true && \
    adduser -u 65532 -G caddy -D caddy 2>/dev/null || true && \
    chown -R 65532:65532 /srv

USER 65532:65532

EXPOSE 8080

HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD wget -q -O- http://127.0.0.1:8080/healthz || exit 1

ENTRYPOINT ["caddy", "run", "--config", "/etc/caddy/Caddyfile", "--adapter", "caddyfile"]
