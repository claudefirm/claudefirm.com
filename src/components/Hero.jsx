import FadeIn from './ui/FadeIn'
import WaitlistForm from './ui/WaitlistForm'
import Button from './ui/Button'
import { TEAM_MEMBERS } from '../lib/constants'

export default function Hero() {
  return (
    <section className="relative bg-ink text-white min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-60" />
      <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-brass/[0.04] rounded-full blur-[120px]" />

      <div className="relative z-10 max-w-[1140px] mx-auto px-6 py-32 md:py-0 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left content */}
          <div className="lg:col-span-7">
            <FadeIn delay={80}>
              <h1 className="font-display font-bold text-[clamp(2.5rem,6vw,4.5rem)] leading-[1.05] tracking-tight">
                You went to law school{' '}
                <br className="hidden md:block" />
                to practice law.{' '}
                <br className="hidden md:block" />
                <span className="text-brass">63% of your week has other plans.</span>
              </h1>
            </FadeIn>

            <FadeIn delay={160}>
              <p className="mt-8 text-lg md:text-xl leading-relaxed text-slate-light max-w-[640px]">
                AI for legal research is nice. AI for running your practice is
                transformational. ClaudeFirm handles intake, billing, collections,
                and client follow-up — with security architecture built
                from the ground up.
              </p>
            </FadeIn>

            <FadeIn delay={240}>
              <div className="mt-12">
                <WaitlistForm dark />
                <div className="mt-5">
                  <Button variant="ghost" href="#problem">Where your week actually goes &darr;</Button>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Right: Agent roster preview */}
          <div className="lg:col-span-5">
            <FadeIn delay={400} direction="left">
              <div className="rounded-lg overflow-hidden border border-white/[0.08] shadow-2xl shadow-black/40">
                {/* Header */}
                <div className="bg-ink-light px-5 py-3.5 border-b border-white/[0.06]">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-green-500/80 animate-pulse" />
                    <span className="font-display font-semibold text-[13px] text-white/70">
                      Your Team
                    </span>
                  </div>
                </div>

                {/* Agent rows */}
                <div className="bg-ink/80">
                  {TEAM_MEMBERS.map((member, i) => (
                    <div
                      key={member.role}
                      className={`flex items-center px-5 py-3.5 gap-4 ${
                        i < TEAM_MEMBERS.length - 1 ? 'border-b border-white/[0.04]' : ''
                      } hover:bg-white/[0.03] transition-colors`}
                    >
                      <div className="w-9 h-9 rounded-md bg-brass/[0.08] border border-brass/[0.15] flex items-center justify-center flex-shrink-0">
                        <member.icon className="w-4 h-4 text-brass/70" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <span className="text-[13px] text-white/80 font-display font-semibold block">
                          {member.role}
                        </span>
                        <span className="text-[11px] text-white/30">
                          {member.description}
                        </span>
                      </div>
                      <span className="text-[10px] font-display font-medium text-brass/50 uppercase tracking-wider flex-shrink-0">
                        {member.autonomy}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Status bar */}
                <div className="bg-ink-light px-5 py-2 text-[11px] text-white/20 font-body border-t border-white/[0.06] flex justify-between">
                  <span>4 agents &middot; handles the 63%</span>
                  <span className="text-green-500/50">Security from the ground up</span>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  )
}
