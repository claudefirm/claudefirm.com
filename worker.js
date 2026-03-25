const JSON_HEADERS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'POST, GET, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
  'Content-Type': 'application/json',
}

async function handleWaitlistPost(request, env) {
  const { email, turnstileToken } = await request.json()

  // Verify Turnstile token
  if (env.TURNSTILE_SECRET_KEY && turnstileToken) {
    const verifyRes = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        secret: env.TURNSTILE_SECRET_KEY,
        response: turnstileToken,
        remoteip: request.headers.get('CF-Connecting-IP'),
      }),
    })
    const verify = await verifyRes.json()
    if (!verify.success) {
      return new Response(JSON.stringify({ error: 'Bot verification failed' }), {
        status: 403,
        headers: JSON_HEADERS,
      })
    }
  }

  if (!email || !email.includes('@')) {
    return new Response(JSON.stringify({ error: 'Invalid email' }), {
      status: 400,
      headers: JSON_HEADERS,
    })
  }

  const normalized = email.trim().toLowerCase()

  const existing = await env.WAITLIST.get(normalized)
  if (existing) {
    return new Response(JSON.stringify({ ok: true, message: 'Already on the list' }), {
      headers: JSON_HEADERS,
    })
  }

  await env.WAITLIST.put(normalized, JSON.stringify({
    email: normalized,
    joined: new Date().toISOString(),
    source: request.headers.get('Referer') || 'direct',
  }))

  return new Response(JSON.stringify({ ok: true }), { headers: JSON_HEADERS })
}

async function handleAdminWaitlistGet(env) {
  const list = await env.WAITLIST.list()
  const entries = await Promise.all(
    list.keys.map(async (key) => {
      const value = await env.WAITLIST.get(key.name)
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

  return new Response(JSON.stringify({ entries, total: entries.length }), {
    headers: { 'Content-Type': 'application/json' },
  })
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url)

    if (request.method === 'OPTIONS' && url.pathname.startsWith('/api/')) {
      return new Response(null, { headers: JSON_HEADERS })
    }

    if (url.pathname === '/api/waitlist' && request.method === 'POST') {
      try {
        return await handleWaitlistPost(request, env)
      } catch {
        return new Response(JSON.stringify({ error: 'Bad request' }), {
          status: 400,
          headers: JSON_HEADERS,
        })
      }
    }

    if (url.pathname === '/api/admin/waitlist' && request.method === 'GET') {
      try {
        return await handleAdminWaitlistGet(env)
      } catch {
        return new Response(JSON.stringify({ error: 'Failed to fetch waitlist' }), {
          status: 500,
          headers: { 'Content-Type': 'application/json' },
        })
      }
    }

    // Let the assets handler serve static files and SPA fallback
    return env.ASSETS.fetch(request)
  },
}
