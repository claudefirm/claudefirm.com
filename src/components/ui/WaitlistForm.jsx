import { useState, useRef } from 'react'
import { ArrowRight, Check, Loader2 } from 'lucide-react'
import { Turnstile } from '@marsidev/react-turnstile'

const TURNSTILE_SITE_KEY = '0x4AAAAAACuMSzRVNaEyZe7H'

export default function WaitlistForm({ dark }) {
  const [email, setEmail] = useState('')
  const [token, setToken] = useState(null)
  const [status, setStatus] = useState('idle') // idle | loading | success | error
  const turnstileRef = useRef()

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!email || !token) return

    setStatus('loading')
    try {
      const res = await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, turnstileToken: token }),
      })
      if (res.ok) {
        setStatus('success')
      } else {
        setStatus('error')
        turnstileRef.current?.reset()
        setToken(null)
      }
    } catch {
      setStatus('error')
      turnstileRef.current?.reset()
      setToken(null)
    }
  }

  if (status === 'success') {
    return (
      <div className="flex items-center gap-3">
        <div className={`w-8 h-8 rounded-full flex items-center justify-center ${dark ? 'bg-brass/20' : 'bg-brass/10'}`}>
          <Check className="w-4 h-4 text-brass" />
        </div>
        <p className={`font-display font-semibold ${dark ? 'text-white' : 'text-gray-900'}`}>
          We'll be in touch.
        </p>
      </div>
    )
  }

  return (
    <div className="w-full max-w-lg">
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 w-full">
        <input
          type="email"
          required
          placeholder="you@yourfirm.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={status === 'loading'}
          className={`flex-1 px-5 py-3.5 rounded text-sm font-body outline-none transition-all duration-300 ${
            dark
              ? 'bg-white/[0.07] text-white placeholder-white/30 border border-white/[0.12] focus:border-brass/60 focus:bg-white/[0.1]'
              : 'bg-white text-gray-900 placeholder-gray-400 border border-gray-200 focus:border-brass shadow-sm'
          } disabled:opacity-50`}
        />
        <button
          type="submit"
          disabled={status === 'loading' || !token}
          className="group px-7 py-3.5 bg-brass text-ink font-display font-semibold text-sm rounded hover:bg-brass-light transition-all duration-300 hover:shadow-[0_0_24px_rgba(196,150,60,0.3)] cursor-pointer flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {status === 'loading' ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              Joining...
            </>
          ) : (
            <>
              Join Waitlist
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </>
          )}
        </button>
      </form>
      <Turnstile
        ref={turnstileRef}
        siteKey={TURNSTILE_SITE_KEY}
        onSuccess={setToken}
        onExpire={() => setToken(null)}
        options={{
          theme: dark ? 'dark' : 'light',
          size: 'invisible',
        }}
      />
      {status === 'error' && (
        <p className={`text-sm mt-2 ${dark ? 'text-red-400' : 'text-red-600'}`}>
          Something went wrong. Try again.
        </p>
      )}
    </div>
  )
}
