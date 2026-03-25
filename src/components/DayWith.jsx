import SectionWrapper from './ui/SectionWrapper'
import FadeIn from './ui/FadeIn'
import { TIMELINE } from '../lib/constants'

export default function DayWith() {
  return (
    <SectionWrapper id="day-with" variant="light">
      <FadeIn>
        <p className="font-display font-semibold text-brass-muted text-[13px] tracking-widest uppercase mb-4">
          In Practice
        </p>
        <h2 className="font-display font-bold text-3xl md:text-[2.75rem] leading-[1.1] tracking-tight">
          A day with ClaudeFirm
        </h2>
        <p className="mt-5 text-slate text-lg leading-relaxed max-w-[480px]">
          Not theory. Workflow.
        </p>
      </FadeIn>

      <div className="mt-16 relative">
        {/* Timeline line */}
        <div className="hidden md:block absolute left-[60px] top-4 bottom-4 w-px bg-gradient-to-b from-brass/30 via-brass/10 to-transparent" />

        <div className="space-y-2">
          {TIMELINE.map((entry, i) => (
            <FadeIn key={entry.time} delay={i * 80}>
              <div className="group flex gap-6 md:gap-10 p-5 -mx-5 rounded-lg transition-colors duration-300 hover:bg-parchment-dark/50">
                {/* Time column */}
                <div className="flex-shrink-0 w-[48px] md:w-[80px] pt-0.5">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-[13px] font-semibold text-brass-muted whitespace-nowrap">
                      {entry.time}
                    </span>
                    {/* Dot on timeline */}
                    <div className="hidden md:block w-2 h-2 rounded-full bg-parchment border-2 border-brass/40 group-hover:border-brass transition-colors duration-300" />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <h3 className="font-display font-semibold text-gray-900 text-[15px]">{entry.title}</h3>
                  <p className="mt-2 text-slate text-[14px] leading-relaxed">{entry.description}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}
