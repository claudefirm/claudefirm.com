import SectionWrapper from './ui/SectionWrapper'
import FadeIn from './ui/FadeIn'
import { TEAM_MEMBERS } from '../lib/constants'

const AUTONOMY_COLORS = {
  'Board review': 'bg-amber-500/10 text-amber-400 border-amber-500/20',
  'Full review': 'bg-blue-500/10 text-blue-400 border-blue-500/20',
  'Draft only': 'bg-slate/10 text-slate-light border-slate/20',
}

export default function MeetYourTeam() {
  return (
    <SectionWrapper id="team" variant="darker" noisy>
      <FadeIn>
        <p className="font-display font-semibold text-brass text-[13px] tracking-widest uppercase mb-4">
          Meet Your Team
        </p>
        <h2 className="font-display font-bold text-3xl md:text-[2.75rem] leading-[1.1] tracking-tight text-white max-w-2xl">
          AI agents in an org chart.{' '}
          <span className="text-slate-light">You sit at the top.</span>
        </h2>
        <p className="mt-5 text-slate-light text-lg leading-relaxed max-w-[640px]">
          The reporting structure IS the permission structure. An associate
          can't sign a partner's name on a brief — and an AI agent can't
          approve its own work or escalate its own permissions.
        </p>
      </FadeIn>

      <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-5">
        {TEAM_MEMBERS.map((member, i) => (
          <FadeIn key={member.role} delay={i * 80}>
            <div className="group h-full p-6 rounded-lg border border-white/[0.06] bg-white/[0.02] hover:bg-white/[0.04] hover:border-brass/20 transition-all duration-400">
              {/* Header */}
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-lg bg-brass/[0.08] border border-brass/[0.15] flex items-center justify-center transition-all duration-300 group-hover:bg-brass/[0.15]">
                    <member.icon className="w-5 h-5 text-brass" />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-white text-[16px]">{member.role}</h3>
                    <p className="text-slate-light text-[13px]">{member.description}</p>
                  </div>
                </div>
              </div>

              {/* Tasks */}
              <ul className="mt-5 space-y-2.5">
                {member.tasks.map((task) => (
                  <li key={task} className="flex items-start gap-3 text-[14px] text-slate-light leading-relaxed">
                    <span className="text-brass/50 mt-1.5 flex-shrink-0">—</span>
                    {task}
                  </li>
                ))}
              </ul>

              {/* Autonomy badge */}
              <div className="mt-5 pt-4 border-t border-white/[0.04]">
                <div className="flex items-center gap-3">
                  <span className={`inline-flex items-center px-2.5 py-1 text-[11px] font-display font-semibold uppercase tracking-wider rounded border ${AUTONOMY_COLORS[member.autonomy]}`}>
                    {member.autonomy}
                  </span>
                  <span className="text-[12px] text-white/25">{member.autonomyDescription}</span>
                </div>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </SectionWrapper>
  )
}
