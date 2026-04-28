import { useState } from 'react'
import { ArrowRight, Check } from 'lucide-react'

export default function WaitlistForm({ dark }) {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState('idle')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!email) return
    setStatus('success')
  }

  if (status === 'success') {
    return (
      <div className="flex items-center gap-3">
        <div className={`w-8 h-8 rounded-full flex items-center justify-center ${dark ? 'bg-brass/20' : 'bg-brass/10'}`}>
          <Check className="w-4 h-4 text-brass" />
        </div>
        <p className={`font-display font-semibold ${dark ? 'text-white' : 'text-gray-900'}`}>
          Waitlist opens soon — email <a className="underline" href="mailto:hello@claudefirm.com">hello@claudefirm.com</a> in the meantime.
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
          className="group px-7 py-3.5 bg-brass text-ink font-display font-semibold text-sm rounded hover:bg-brass-light transition-all duration-300 hover:shadow-[0_0_24px_rgba(196,150,60,0.3)] cursor-pointer flex items-center gap-2"
        >
          Join Waitlist
          <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
        </button>
      </form>
    </div>
  )
}
