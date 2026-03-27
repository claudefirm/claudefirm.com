import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { NAV_ITEMS } from '../lib/constants'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled
        ? 'bg-ink/95 backdrop-blur-md border-b border-white/[0.06]'
        : 'bg-transparent'
    }`}>
      <div className="max-w-[1140px] mx-auto px-6 flex items-center justify-between h-[72px]">
        <a href="#" className="font-display text-[22px] font-bold text-white tracking-tight">
          Claude<span className="text-brass">Firm</span>
        </a>

        <div className="hidden md:flex items-center gap-10">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-[13px] font-display font-semibold tracking-wide uppercase text-white/50 hover:text-white transition-colors duration-300"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#waitlist"
            className="text-[13px] font-display font-semibold tracking-wide px-5 py-2.5 border border-brass/40 text-brass rounded hover:bg-brass/10 hover:border-brass transition-all duration-300"
          >
            Join Waitlist
          </a>
        </div>

        <button
          className="md:hidden text-white/70 hover:text-white cursor-pointer transition-colors"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-ink/98 backdrop-blur-lg border-t border-white/[0.06] px-6 py-6 space-y-5">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="block text-sm font-display font-semibold text-white/60 hover:text-white"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <a
            href="#waitlist"
            className="block text-center text-sm font-display font-semibold px-5 py-3 border border-brass/40 text-brass rounded"
            onClick={() => setOpen(false)}
          >
            Join Waitlist
          </a>
        </div>
      )}
    </nav>
  )
}
