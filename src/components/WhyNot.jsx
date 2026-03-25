import SectionWrapper from './ui/SectionWrapper'
import FadeIn from './ui/FadeIn'
import { ArrowRight } from 'lucide-react'

const COMPARISONS = [
  {
    them: 'Wrappers built on the same foundation models',
    us: 'Built directly on Claude — every new capability ships to you on day one',
  },
  {
    them: "Customize to a firm's template library",
    us: "Encodes an individual lawyer's analytical frameworks, voice, and judgment",
  },
  {
    them: 'Chatbot that talks about documents',
    us: 'System that reaches inside documents and changes them — real tracked changes at the XML level',
  },
  {
    them: 'Per-seat subscriptions and vendor lock-in',
    us: 'You own the configuration. No per-seat pricing. No lock-in. Switch or leave anytime.',
  },
]

export default function WhyNot() {
  return (
    <SectionWrapper id="why-not" variant="dark" noisy>
      <FadeIn>
        <p className="font-display font-semibold text-brass text-[13px] tracking-widest uppercase mb-4">
          Differentiation
        </p>
        <h2 className="font-display font-bold text-3xl md:text-[2.75rem] leading-[1.1] tracking-tight text-white">
          Why not "legal AI"?
        </h2>
        <p className="mt-5 text-slate-light text-lg leading-relaxed max-w-[540px]">
          A template library was never your competitive advantage. Your judgment is.
        </p>
      </FadeIn>

      <div className="mt-14 space-y-6">
        {COMPARISONS.map((item, i) => (
          <FadeIn key={i} delay={i * 70}>
            <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-4 md:gap-6 items-center">
              {/* Them */}
              <div className="p-5 rounded border border-white/[0.06] bg-white/[0.02]">
                <span className="font-mono text-[10px] tracking-widest uppercase text-white/25 block mb-2">Legal AI</span>
                <p className="text-slate-light text-[14px] leading-relaxed">{item.them}</p>
              </div>

              {/* Arrow */}
              <div className="hidden md:flex items-center justify-center">
                <ArrowRight className="w-4 h-4 text-brass/40" />
              </div>

              {/* Us */}
              <div className="p-5 rounded border border-brass/15 bg-brass/[0.04]">
                <span className="font-mono text-[10px] tracking-widest uppercase text-brass/60 block mb-2">ClaudeFirm</span>
                <p className="text-white/90 text-[14px] leading-relaxed">{item.us}</p>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </SectionWrapper>
  )
}
