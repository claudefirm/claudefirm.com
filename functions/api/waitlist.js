export async function onRequestPost(context) {
  const { request, env } = context

  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Content-Type': 'application/json',
  }

  try {
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
          headers,
        })
      }
    }

    if (!email || !email.includes('@')) {
      return new Response(JSON.stringify({ error: 'Invalid email' }), {
        status: 400,
        headers,
      })
    }

    const normalized = email.trim().toLowerCase()

    // Check for duplicate
    const existing = await env.WAITLIST.get(normalized)
    if (existing) {
      return new Response(JSON.stringify({ ok: true, message: 'Already on the list' }), {
        headers,
      })
    }

    // Store with timestamp
    await env.WAITLIST.put(normalized, JSON.stringify({
      email: normalized,
      joined: new Date().toISOString(),
      source: request.headers.get('Referer') || 'direct',
    }))

    return new Response(JSON.stringify({ ok: true }), { headers })
  } catch {
    return new Response(JSON.stringify({ error: 'Bad request' }), {
      status: 400,
      headers,
    })
  }
}

export async function onRequestOptions() {
  return new Response(null, {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  })
}
