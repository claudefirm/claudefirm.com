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
            <FadeIn delay={40}>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 mb-8 rounded border border-brass/30 bg-brass/[0.06]">
                <span className="w-1.5 h-1.5 rounded-full bg-brass" />
                <span className="text-[11px] font-display font-semibold tracking-widest uppercase text-brass/90">
                  Burner positioning · privacy cut
                </span>
              </div>
            </FadeIn>
            <FadeIn delay={80}>
              <h1 className="font-display font-bold text-[clamp(2rem,7vw,4.5rem)] leading-[1.05] tracking-tight">
                Used once.{' '}
                <br className="hidden md:block" />
                <span className="text-brass">Then burned.</span>
              </h1>
            </FadeIn>

            <FadeIn delay={160}>
              <p className="mt-8 text-lg md:text-xl leading-relaxed text-slate-light max-w-[640px]">
                ClaudeFirm runs an AI paralegal that exists for one matter and
                then ceases to exist. No persistent memory. No cloud retention.
                No central system that can be subpoenaed, breached, or quietly
                trained on your client&rsquo;s case.
              </p>
            </FadeIn>

            <FadeIn delay={200}>
              <p className="mt-4 text-sm leading-relaxed text-brass/70 max-w-[640px]">
                Built for owner-operator partners at 1&ndash;10 attorney firms
                who need capable AI on client work without the data-residency
                risk that makes their bar association nervous.
              </p>
            </FadeIn>

            <FadeIn delay={240}>
              <div className="mt-12">
                <WaitlistForm dark />
                <div className="mt-5">
                  <Button variant="ghost" href="#problem">How burner agents work &darr;</Button>
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
                      Burner Agents · live for this matter
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
                  <span>Spawned at matter open &middot; destroyed at matter close</span>
                  <span className="text-green-500/50">No persistence &middot; no cloud trace</span>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  )
}
