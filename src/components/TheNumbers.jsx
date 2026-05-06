import SectionWrapper from './ui/SectionWrapper'
import FadeIn from './ui/FadeIn'
import { STATS } from '../lib/constants'

export default function TheNumbers() {
  return (
    <SectionWrapper id="numbers" variant="light">
      <FadeIn>
        <p className="font-display font-semibold text-brass text-[13px] tracking-widest uppercase mb-4">
          The Numbers
        </p>
        <h2 className="font-display font-bold text-3xl md:text-[2.75rem] leading-[1.1] tracking-tight text-gray-900 max-w-xl">
          This is not a technology argument.{' '}
          <span className="text-slate">It&rsquo;s a math argument. With ranges, until the LOI partner visit lands.</span>
        </h2>
      </FadeIn>

      <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {STATS.map((stat, i) => (
          <FadeIn key={i} delay={i * 80}>
            <div className="relative">
              <div className="font-display font-bold text-[clamp(2rem,4vw,3rem)] text-brass leading-none tracking-tight">
                {stat.value}
              </div>
              <p className="mt-3 text-slate text-[15px] leading-relaxed">
                {stat.label}
              </p>
              {stat.source && (
                <p className="mt-2 text-[12px] text-slate/60 italic">
                  Source: {stat.source}
                </p>
              )}
            </div>
          </FadeIn>
        ))}
      </div>
    </SectionWrapper>
  )
}
