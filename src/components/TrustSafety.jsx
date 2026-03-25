import FadeIn from './ui/FadeIn'
import { TRUST_POINTS } from '../lib/constants'
import { ShieldCheck } from 'lucide-react'

export default function TrustSafety() {
  return (
    <section id="trust" className="relative bg-ink text-white overflow-hidden">
      {/* Vault-like border treatment */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brass/50 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brass/50 to-transparent" />

      {/* Corner accents */}
      <div className="absolute top-0 left-0 w-16 h-16 border-l-2 border-t-2 border-brass/20" />
      <div className="absolute top-0 right-0 w-16 h-16 border-r-2 border-t-2 border-brass/20" />
      <div className="absolute bottom-0 left-0 w-16 h-16 border-l-2 border-b-2 border-brass/20" />
      <div className="absolute bottom-0 right-0 w-16 h-16 border-r-2 border-b-2 border-brass/20" />

      <div className="relative z-10 max-w-[1140px] mx-auto px-6 py-24 md:py-32">
        <FadeIn>
          <div className="flex items-center gap-3 mb-6">
            <ShieldCheck className="w-6 h-6 text-brass" />
            <span className="font-display font-semibold text-brass text-[13px] tracking-widest uppercase">
              Trust & Safety
            </span>
          </div>
          <h2 className="font-display font-bold text-3xl md:text-[2.75rem] leading-[1.1] tracking-tight max-w-xl">
            Every action is logged.{' '}
            <br />
            Every dollar is tracked.
          </h2>
          <p className="mt-5 text-slate-light text-lg leading-relaxed max-w-[540px]">
            Your agents don't guess. They don't freelance. They don't send
            anything without your approval. This is AI that respects the way
            a law firm actually has to operate.
          </p>
        </FadeIn>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {TRUST_POINTS.map((point, i) => (
            <FadeIn key={point.title} delay={i * 50}>
              <div className="group flex gap-4 p-5 rounded border border-white/[0.06] bg-white/[0.02] hover:bg-white/[0.04] hover:border-brass/20 transition-all duration-400 h-full">
                <div className="flex-shrink-0 w-9 h-9 rounded flex items-center justify-center bg-brass/[0.08] border border-brass/[0.15]">
                  <point.icon className="w-4 h-4 text-brass" />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-white text-[15px]">{point.title}</h3>
                  <p className="mt-1.5 text-slate-light text-[14px] leading-relaxed">{point.description}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={400}>
          <div className="mt-14 pl-6 border-l-2 border-brass/30 max-w-xl">
            <p className="text-slate-light text-[15px] italic leading-relaxed">
              "The lawyers who got sanctioned for AI-generated fake citations weren't
              using bad AI. They were using AI without guardrails."
            </p>
            <p className="mt-3 font-display font-semibold text-brass text-sm">
              ClaudeFirm is all guardrails.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
