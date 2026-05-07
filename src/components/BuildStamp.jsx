import { useEffect, useState } from 'react'

async function fetchText(path) {
  try {
    const res = await fetch(path, { cache: 'no-store' })
    if (!res.ok) return null
    const text = (await res.text()).trim()
    return text || null
  } catch {
    return null
  }
}

export default function BuildStamp() {
  const [meta, setMeta] = useState({ sha: null, builtAt: null, branch: null })

  useEffect(() => {
    let cancelled = false
    Promise.all([
      fetchText('/.source-sha'),
      fetchText('/.built-at'),
      fetchText('/.source-branch'),
    ]).then(([sha, builtAt, branch]) => {
      if (!cancelled) setMeta({ sha, builtAt, branch })
    })
    return () => {
      cancelled = true
    }
  }, [])

  const { sha, builtAt, branch } = meta
  if (!sha && !builtAt && !branch) return null

  const shortSha = sha ? sha.slice(0, 7) : 'unknown'
  const branchLabel = branch || 'unknown'
  const builtAtLabel = builtAt || 'unknown'

  return (
    <div
      style={{
        fontFamily: 'ui-monospace, SFMono-Regular, Menlo, monospace',
        fontSize: '11px',
        color: '#6b7280',
        background: '#f9fafb',
        borderTop: '1px solid #e5e7eb',
        padding: '6px 12px',
        textAlign: 'center',
        letterSpacing: '0.01em',
      }}
    >
      Built from <code>{branchLabel}@{shortSha}</code> on <code>{builtAtLabel}</code> &middot; Caddy on Knative
    </div>
  )
}
