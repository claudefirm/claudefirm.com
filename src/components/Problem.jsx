import SectionWrapper from './ui/SectionWrapper'
import FadeIn from './ui/FadeIn'
import { PAIN_POINTS } from '../lib/constants'

export default function Problem() {
  return (
    <SectionWrapper id="problem" variant="light">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
        {/* Left: editorial headline */}
        <div className="lg:col-span-5">
          <FadeIn>
            <h2 className="font-display font-bold text-3xl md:text-[2.75rem] leading-[1.1] tracking-tight text-gray-900">
              The math.
              <br />
              <span className="text-slate">Per toil. In dollars.</span>
            </h2>
          </FadeIn>
          <FadeIn delay={100}>
            <div className="mt-8 pl-5 border-l-2 border-brass/40">
              <p className="text-slate italic text-lg leading-relaxed">
                The owner-operator partner of a 1&ndash;10 attorney firm has
                three numbers that move when an AI paralegal lands: time on
                intake, time on billing, and the percentage of invoices that
                age past 60 days. We list each below as a design target with
                the math written out, not as a customer testimonial.
              </p>
              <p className="mt-3 text-[13px] text-brass-muted font-display font-semibold">
                &mdash; Vision doc §7D, the ROI lens
              </p>
            </div>
          </FadeIn>
        </div>

        {/* Right: pain point cards with stats */}
        <div className="lg:col-span-7 space-y-6">
          {PAIN_POINTS.map((point, i) => (
            <FadeIn key={point.title} delay={i * 80}>
              <div className="group flex gap-5 p-5 -mx-5 rounded-lg transition-colors duration-300 hover:bg-parchment-dark/60">
                <div className="flex-shrink-0">
                  <div className="w-11 h-11 rounded-lg bg-ink/[0.04] border border-ink/[0.08] flex items-center justify-center transition-all duration-300 group-hover:bg-brass/10 group-hover:border-brass/20">
                    <point.icon className="w-5 h-5 text-slate transition-colors duration-300 group-hover:text-brass" />
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-baseline gap-3">
                    <span className="font-display font-bold text-2xl text-brass tracking-tight">{point.stat}</span>
                    <h3 className="font-display font-semibold text-gray-900 text-[15px]">{point.title}</h3>
                  </div>
                  <p className="mt-1.5 text-slate text-[14px] leading-relaxed">{point.description}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}
