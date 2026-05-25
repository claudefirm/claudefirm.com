import { Hono } from 'hono'
import { oidcAuthMiddleware, getAuth, processOAuthCallback, revokeSession } from '@hono/oidc-auth'

const app = new Hono()

// ---------------------------------------------------------------------------
// Public: waitlist signup. Turnstile-gated, writes to the WAITLIST KV.
// ---------------------------------------------------------------------------
app.post('/api/waitlist', async (c) => {
  let body
  try {
    body = await c.req.json()
  } catch {
    return c.json({ error: 'Bad request' }, 400)
  }

  const { email, turnstileToken } = body ?? {}

  // Server-side Turnstile verification. The secret is a wrangler secret; if it
  // is unset (e.g. a preview without the binding) we fail closed.
  if (!c.env.TURNSTILE_SECRET_KEY || !turnstileToken) {
    return c.json({ error: 'Bot verification failed' }, 403)
  }
  const verify = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      secret: c.env.TURNSTILE_SECRET_KEY,
      response: turnstileToken,
      remoteip: c.req.header('CF-Connecting-IP'),
    }),
  }).then((r) => r.json())
  if (!verify.success) {
    return c.json({ error: 'Bot verification failed' }, 403)
  }

  if (!email || !email.includes('@')) {
    return c.json({ error: 'Invalid email' }, 400)
  }

  const normalized = email.trim().toLowerCase()
  if (await c.env.WAITLIST.get(normalized)) {
    return c.json({ ok: true, message: 'Already on the list' })
  }
  await c.env.WAITLIST.put(
    normalized,
    JSON.stringify({
      email: normalized,
      joined: new Date().toISOString(),
      source: c.req.header('Referer') || 'direct',
    })
  )
  return c.json({ ok: true })
})

// ---------------------------------------------------------------------------
// OIDC plumbing (Authentik @ auth.darrengruber.com). Registered before the
// protective middleware so logout/callback are reachable without a session.
// ---------------------------------------------------------------------------
app.get('/callback', (c) => processOAuthCallback(c))
app.get('/admin/logout', async (c) => {
  await revokeSession(c)
  return c.redirect('/')
})

// ---------------------------------------------------------------------------
// Protected: admin waitlist viewer. @hono/oidc-auth redirects to Authentik
// when there is no valid session cookie.
// ---------------------------------------------------------------------------
app.use('/admin', oidcAuthMiddleware())
app.use('/admin/*', oidcAuthMiddleware())
app.use('/api/admin/*', oidcAuthMiddleware())

app.get('/api/admin/waitlist', async (c) => {
  const list = await c.env.WAITLIST.list()
  const entries = await Promise.all(
    list.keys.map(async (key) => {
      const value = await c.env.WAITLIST.get(key.name)
      try {
        return JSON.parse(value)
      } catch {
        return { email: key.name, joined: null }
      }
    })
  )
  entries.sort((a, b) => {
    if (!a.joined) return 1
    if (!b.joined) return -1
    return new Date(b.joined) - new Date(a.joined)
  })
  return c.json({ entries, total: entries.length })
})

app.get('/admin', async (c) => {
  const auth = await getAuth(c)
  return c.html(adminPage(auth?.email))
})

// ---------------------------------------------------------------------------
// Everything else: static SPA assets (index.html / favicon / built bundle).
// not_found_handling=single-page-application serves index.html for unknown paths.
// ---------------------------------------------------------------------------
app.all('*', (c) => c.env.ASSETS.fetch(c.req.raw))

function adminPage(email) {
  return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="robots" content="noindex" />
    <title>ClaudeFirm — Waitlist</title>
    <style>
      body { font: 15px/1.5 system-ui, sans-serif; margin: 0; background: #0f0e0c; color: #f5f3ee; }
      header { display: flex; align-items: baseline; gap: 1rem; padding: 1.25rem 2rem; border-bottom: 1px solid #2a2824; }
      h1 { font-size: 1.1rem; margin: 0; }
      .muted { color: #9a958b; font-size: .85rem; }
      a { color: #c4963c; }
      main { padding: 1.5rem 2rem; }
      table { border-collapse: collapse; width: 100%; max-width: 720px; }
      th, td { text-align: left; padding: .5rem .75rem; border-bottom: 1px solid #2a2824; }
      th { color: #9a958b; font-weight: 600; font-size: .8rem; text-transform: uppercase; letter-spacing: .04em; }
      .empty { color: #9a958b; }
    </style>
  </head>
  <body>
    <header>
      <h1>Waitlist</h1>
      <span class="muted" id="count"></span>
      <span style="flex:1"></span>
      <span class="muted">${email ? `${escapeHtml(email)} · ` : ''}<a href="/admin/logout">Log out</a></span>
    </header>
    <main>
      <table>
        <thead><tr><th>Email</th><th>Joined</th><th>Source</th></tr></thead>
        <tbody id="rows"><tr><td class="empty" colspan="3">Loading…</td></tr></tbody>
      </table>
    </main>
    <script>
      fetch('/api/admin/waitlist', { credentials: 'same-origin' })
        .then((r) => r.json())
        .then(({ entries, total }) => {
          document.getElementById('count').textContent = total + (total === 1 ? ' signup' : ' signups');
          const rows = document.getElementById('rows');
          if (!entries.length) { rows.innerHTML = '<tr><td class="empty" colspan="3">No signups yet.</td></tr>'; return; }
          rows.innerHTML = entries.map((e) => {
            const joined = e.joined ? new Date(e.joined).toLocaleString() : '—';
            return '<tr><td>' + esc(e.email) + '</td><td>' + esc(joined) + '</td><td>' + esc(e.source || '—') + '</td></tr>';
          }).join('');
        })
        .catch(() => { document.getElementById('rows').innerHTML = '<tr><td class="empty" colspan="3">Failed to load.</td></tr>'; });
      function esc(s) { const d = document.createElement('div'); d.textContent = String(s); return d.innerHTML; }
    </script>
  </body>
</html>`
}

function escapeHtml(s) {
  return String(s).replace(/[&<>"']/g, (ch) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[ch]))
}

export default app
