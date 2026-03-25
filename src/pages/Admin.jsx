import { useState, useEffect } from 'react'
import { Loader2, RefreshCw, Users, ArrowLeft } from 'lucide-react'

export default function Admin() {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const fetchData = async () => {
    setLoading(true)
    setError(null)
    try {
      const res = await fetch('/api/admin/waitlist')
      if (!res.ok) throw new Error('Failed to fetch')
      const json = await res.json()
      setData(json)
    } catch (e) {
      setError(e.message)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => { fetchData() }, [])

  return (
    <div className="min-h-screen bg-ink text-white">
      {/* Header */}
      <header className="border-b border-white/[0.06]">
        <div className="max-w-[1140px] mx-auto px-6 py-5 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <a href="/" className="font-display text-[20px] font-bold tracking-tight">
              Claude<span className="text-brass">Firm</span>
            </a>
            <span className="text-[11px] font-mono tracking-widest uppercase text-white/25 border-l border-white/10 pl-6">
              Admin
            </span>
          </div>
          <a
            href="/"
            className="flex items-center gap-2 text-[13px] text-white/40 hover:text-white transition-colors font-display"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            Back to site
          </a>
        </div>
      </header>

      <main className="max-w-[1140px] mx-auto px-6 py-12">
        {/* Stats */}
        <div className="flex items-center justify-between mb-10">
          <div>
            <h1 className="font-display font-bold text-2xl tracking-tight">Waitlist</h1>
            {data && (
              <div className="flex items-center gap-2 mt-2">
                <Users className="w-4 h-4 text-brass/60" />
                <span className="text-[14px] text-white/50">
                  <span className="text-brass font-display font-semibold">{data.total}</span> signups
                </span>
              </div>
            )}
          </div>
          <button
            onClick={fetchData}
            disabled={loading}
            className="flex items-center gap-2 px-4 py-2 text-[13px] font-display font-semibold text-white/50 hover:text-white border border-white/10 hover:border-white/20 rounded transition-all cursor-pointer disabled:opacity-40"
          >
            <RefreshCw className={`w-3.5 h-3.5 ${loading ? 'animate-spin' : ''}`} />
            Refresh
          </button>
        </div>

        {/* Loading */}
        {loading && !data && (
          <div className="flex items-center justify-center py-20">
            <Loader2 className="w-6 h-6 text-brass animate-spin" />
          </div>
        )}

        {/* Error */}
        {error && (
          <div className="rounded border border-red-500/20 bg-red-500/5 p-4 text-[14px] text-red-400">
            {error}
          </div>
        )}

        {/* Table */}
        {data && (
          <div className="rounded-lg border border-white/[0.06] overflow-hidden">
            <table className="w-full">
              <thead>
                <tr className="bg-white/[0.03] border-b border-white/[0.06]">
                  <th className="text-left px-5 py-3 text-[11px] font-display font-semibold tracking-widest uppercase text-white/30">
                    #
                  </th>
                  <th className="text-left px-5 py-3 text-[11px] font-display font-semibold tracking-widest uppercase text-white/30">
                    Email
                  </th>
                  <th className="text-left px-5 py-3 text-[11px] font-display font-semibold tracking-widest uppercase text-white/30">
                    Joined
                  </th>
                  <th className="text-left px-5 py-3 text-[11px] font-display font-semibold tracking-widest uppercase text-white/30">
                    Source
                  </th>
                </tr>
              </thead>
              <tbody>
                {data.entries.length === 0 ? (
                  <tr>
                    <td colSpan={4} className="px-5 py-12 text-center text-white/25 text-[14px]">
                      No signups yet.
                    </td>
                  </tr>
                ) : (
                  data.entries.map((entry, i) => (
                    <tr
                      key={entry.email}
                      className="border-b border-white/[0.04] hover:bg-white/[0.02] transition-colors"
                    >
                      <td className="px-5 py-3 text-[13px] font-mono text-white/20">
                        {i + 1}
                      </td>
                      <td className="px-5 py-3 text-[14px] text-white/80 font-mono">
                        {entry.email}
                      </td>
                      <td className="px-5 py-3 text-[13px] text-white/40">
                        {entry.joined
                          ? new Date(entry.joined).toLocaleDateString('en-US', {
                              month: 'short',
                              day: 'numeric',
                              year: 'numeric',
                              hour: '2-digit',
                              minute: '2-digit',
                            })
                          : '—'}
                      </td>
                      <td className="px-5 py-3 text-[13px] text-white/30 font-mono truncate max-w-[200px]">
                        {entry.source || '—'}
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        )}
      </main>
    </div>
  )
}
