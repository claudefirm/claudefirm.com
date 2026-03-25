export async function onRequestGet(context) {
  const { env } = context

  const headers = {
    'Content-Type': 'application/json',
  }

  try {
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

    // Sort newest first
    entries.sort((a, b) => {
      if (!a.joined) return 1
      if (!b.joined) return -1
      return new Date(b.joined) - new Date(a.joined)
    })

    return new Response(JSON.stringify({ entries, total: entries.length }), { headers })
  } catch {
    return new Response(JSON.stringify({ error: 'Failed to fetch waitlist' }), {
      status: 500,
      headers,
    })
  }
}
