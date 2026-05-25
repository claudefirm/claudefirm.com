import { useRef, useState } from 'react'
import { ArrowRight, Check } from 'lucide-react'
import { Turnstile } from '@marsidev/react-turnstile'
import { TURNSTILE_SITE_KEY } from '../../lib/constants'

export default function WaitlistForm({ dark }) {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState('idle') // idle | submitting | success | error
  const [error, setError] = useState('')
  const tokenRef = useRef('')
  const turnstileRef = useRef(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!email || status === 'submitting') return
    if (!tokenRef.current) {
      setError("One sec — we're verifying you're human. Try again in a moment.")
      return
    }
    setStatus('submitting')
    setError('')
    try {
      const res = await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, turnstileToken: tokenRef.current }),
      })
      const data = await res.json().catch(() => ({}))
      if (res.ok && data.ok) {
        setStatus('success')
      } else {
        setStatus('error')
        setError(data.error || 'Something went wrong. Please try again.')
        turnstileRef.current?.reset()
        tokenRef.current = ''
      }
    } catch {
      setStatus('error')
      setError('Network error. Please try again.')
      turnstileRef.current?.reset()
      tokenRef.current = ''
    }
  }

  if (status === 'success') {
    return (
      <div className="flex items-center gap-3">
        <div className={`w-8 h-8 rounded-full flex items-center justify-center ${dark ? 'bg-brass/20' : 'bg-brass/10'}`}>
          <Check className="w-4 h-4 text-brass" />
        </div>
        <p className={`font-display font-semibold ${dark ? 'text-white' : 'text-gray-900'}`}>
          You&apos;re on the list — we&apos;ll be in touch. Questions? <a className="underline" href="mailto:hello@claudefirm.com">hello@claudefirm.com</a>
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
          className={`flex-1 px-5 py-3.5 rounded text-sm font-body outline-none transition-all duration-300 ${
            dark
              ? 'bg-white/[0.07] text-white placeholder-white/30 border border-white/[0.12] focus:border-brass/60 focus:bg-white/[0.1]'
              : 'bg-white text-gray-900 placeholder-gray-400 border border-gray-200 focus:border-brass shadow-sm'
          }`}
        />
        <button
          type="submit"
          disabled={status === 'submitting'}
          className="group px-7 py-3.5 bg-brass text-ink font-display font-semibold text-sm rounded hover:bg-brass-light transition-all duration-300 hover:shadow-[0_0_24px_rgba(196,150,60,0.3)] cursor-pointer flex items-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {status === 'submitting' ? 'Joining…' : 'Join Waitlist'}
          <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
        </button>
      </form>
      <Turnstile
        ref={turnstileRef}
        siteKey={TURNSTILE_SITE_KEY}
        options={{ theme: dark ? 'dark' : 'light', size: 'flexible' }}
        onSuccess={(token) => { tokenRef.current = token }}
        onExpire={() => { tokenRef.current = '' }}
        onError={() => { tokenRef.current = '' }}
        className="mt-3"
      />
      {error && <p className="mt-2 text-sm text-red-400 font-body">{error}</p>}
    </div>
  )
}
