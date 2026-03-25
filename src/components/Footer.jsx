export default function Footer() {
  return (
    <footer className="relative bg-ink border-t border-white/[0.04]">
      <div className="max-w-[1140px] mx-auto px-6 py-16">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <a href="#" className="font-display text-[20px] font-bold text-white tracking-tight">
              Claude<span className="text-brass">Firm</span>
            </a>
            <p className="mt-3 text-slate text-[13px] leading-relaxed max-w-sm">
              ClaudeFirm is an operational tool. It does not provide legal advice.
              All AI-generated work product requires review and approval by a licensed attorney.
              ClaudeFirm is not affiliated with, endorsed by, or associated with Anthropic, PBC.
            </p>
          </div>
          <div className="flex gap-8 text-[13px] font-display font-semibold">
            <a href="#team" className="text-white/40 hover:text-white transition-colors duration-300">Your Team</a>
            <a href="#trust" className="text-white/40 hover:text-white transition-colors duration-300">Trust</a>
            <a href="#faq" className="text-white/40 hover:text-white transition-colors duration-300">FAQ</a>
            <a href="#waitlist" className="text-white/40 hover:text-brass transition-colors duration-300">Waitlist</a>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-white/[0.04] flex flex-col sm:flex-row justify-between gap-4 text-[12px] text-white/20">
          <span>Built with Claude by Anthropic</span>
          <span>&copy; {new Date().getFullYear()} ClaudeFirm</span>
        </div>
      </div>
    </footer>
  )
}
