import SectionWrapper from './ui/SectionWrapper'
import FadeIn from './ui/FadeIn'
import { SKILLS } from '../lib/constants'

export default function Skills() {
  return (
    <SectionWrapper id="skills" variant="light">
      <FadeIn>
        <p className="font-display font-semibold text-brass-muted text-[13px] tracking-widest uppercase mb-4">
          Capabilities
        </p>
        <h2 className="font-display font-bold text-3xl md:text-[2.75rem] leading-[1.1] tracking-tight">
          Six skills. Production-ready.
        </h2>
        <p className="mt-5 text-slate text-lg leading-relaxed max-w-[560px]">
          Each one encodes years of accumulated professional judgment about
          how legal work should be done.
        </p>
      </FadeIn>

      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
        {SKILLS.map((skill, i) => (
          <FadeIn key={skill.name} delay={i * 70}>
            <div className="group relative pl-8 border-l border-gray-200 hover:border-brass/40 transition-colors duration-500">
              {/* DRAFT badge */}
              <div className="absolute top-0 right-0">
                <span className="font-mono text-[10px] tracking-widest uppercase text-brass-muted/60 border border-brass/20 px-2 py-0.5 rounded-sm">
                  Draft
                </span>
              </div>

              <div className="flex items-center gap-3 mb-3">
                <skill.icon className="w-[18px] h-[18px] text-brass-muted" />
                <h3 className="font-display font-semibold text-gray-900 text-[15px]">{skill.name}</h3>
              </div>
              <p className="text-slate text-[14px] leading-relaxed pr-16">{skill.description}</p>
            </div>
          </FadeIn>
        ))}
      </div>
    </SectionWrapper>
  )
}
