import SectionWrapper from './ui/SectionWrapper'
import FadeIn from './ui/FadeIn'
import { HOW_IT_WORKS_STEPS } from '../lib/constants'

export default function HowItWorks() {
  return (
    <SectionWrapper id="how-it-works" variant="light">
      <FadeIn>
        <p className="font-display font-semibold text-brass text-[13px] tracking-widest uppercase mb-4">
          How It Works
        </p>
        <h2 className="font-display font-bold text-3xl md:text-[2.75rem] leading-[1.1] tracking-tight text-gray-900 max-w-xl">
          Set up in an afternoon. Runs every day.
        </h2>
      </FadeIn>

      <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
        {HOW_IT_WORKS_STEPS.map((step, i) => (
          <FadeIn key={step.number} delay={i * 100}>
            <div className="relative">
              {/* Connector line on desktop */}
              {i < HOW_IT_WORKS_STEPS.length - 1 && (
                <div className="hidden md:block absolute top-8 left-full w-full h-px bg-gradient-to-r from-brass/30 to-transparent -translate-x-6" />
              )}

              <div className="font-display font-bold text-[48px] text-brass/20 leading-none tracking-tight">
                {step.number}
              </div>
              <h3 className="mt-4 font-display font-semibold text-gray-900 text-lg">
                {step.title}
              </h3>
              <p className="mt-3 text-slate text-[15px] leading-relaxed">
                {step.description}
              </p>
            </div>
          </FadeIn>
        ))}
      </div>
    </SectionWrapper>
  )
}
