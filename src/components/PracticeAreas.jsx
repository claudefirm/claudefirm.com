import SectionWrapper from './ui/SectionWrapper'
import FadeIn from './ui/FadeIn'
import { PRACTICE_AREAS } from '../lib/constants'

export default function PracticeAreas() {
  return (
    <SectionWrapper id="practice-areas" variant="darker" noisy>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
        <div className="lg:col-span-5">
          <FadeIn>
            <p className="font-display font-semibold text-brass text-[13px] tracking-widest uppercase mb-4">
              Practice Areas
            </p>
            <h2 className="font-display font-bold text-3xl md:text-[2.75rem] leading-[1.1] tracking-tight text-white">
              Built for your practice
            </h2>
            <p className="mt-5 text-slate-light text-lg leading-relaxed">
              The architecture is practice-agnostic. Build your PRACTICE.md once.
              It compounds from there.
            </p>
          </FadeIn>

          <FadeIn delay={150}>
            <div className="mt-10 terminal">
              <div className="terminal-bar">
                <div className="terminal-dot bg-[#FF5F57]" />
                <div className="terminal-dot bg-[#FEBC2E]" />
                <div className="terminal-dot bg-[#28C840]" />
                <span className="ml-3 text-[11px] text-white/30 font-mono">PRACTICE.md</span>
              </div>
              <div className="p-4 text-[12px] leading-[1.8] font-mono">
                <div className="text-white/30"><span className="text-brass/50">##</span> <span className="text-white/50">Matter Types</span></div>
                <div className="text-white/30"><span className="text-brass/50">##</span> <span className="text-white/50">Lifecycle Phases</span></div>
                <div className="text-white/30"><span className="text-brass/50">##</span> <span className="text-white/50">Practice-Specific Skills</span></div>
                <div className="text-white/30"><span className="text-brass/50">##</span> <span className="text-white/50">Jurisdiction Config</span></div>
              </div>
            </div>
          </FadeIn>
        </div>

        <div className="lg:col-span-7 space-y-3">
          {PRACTICE_AREAS.map((area, i) => (
            <FadeIn key={area.name} delay={i * 60}>
              <div className="group flex items-start gap-5 p-5 rounded border border-white/[0.06] bg-white/[0.02] hover:bg-white/[0.04] hover:border-brass/15 transition-all duration-400">
                <area.icon className="w-5 h-5 text-brass/60 mt-0.5 group-hover:text-brass transition-colors" />
                <div>
                  <h3 className="font-display font-semibold text-white text-[15px]">{area.name}</h3>
                  <p className="mt-1 text-slate-light text-[14px] leading-relaxed">{area.description}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}
