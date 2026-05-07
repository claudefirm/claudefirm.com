import SectionWrapper from './ui/SectionWrapper'
import FadeIn from './ui/FadeIn'
import { Flame, Network, EyeOff } from 'lucide-react'

const PROMISES = [
  {
    icon: EyeOff,
    label: 'We don\'t train',
    title: 'Not on your client data. Not on your firm\'s phrasing.',
    body: 'Not on the patterns of your judges or opposing counsel. The agents you run are not making us smarter at the cost of making your firm legible to a vendor. The default in legal AI is the opposite — burner closes that loop.',
  },
  {
    icon: Flame,
    label: 'We don\'t persist',
    title: 'No prompt history. No vector index. No session memory.',
    body: 'The agent finishes the work and is gone, in the same way a contractor paralegal finishes a brief and goes home — without a copy of your file. There is no "session memory that survives the task" because there is no surviving session.',
  },
  {
    icon: Network,
    label: 'We don\'t phone home',
    title: 'No telemetry that contains client content.',
    body: 'No "improve our model" pipeline that hoovers up the contents of incoming PDFs. The only thing we know about your usage is what you tell us in support tickets. Cloud AI defaults to "we collect; trust us." Burner defaults to "we don\'t collect; verify the source."',
  },
]

export default function BurnerPromise() {
  return (
    <SectionWrapper id="burner" variant="darker" noisy>
      <FadeIn>
        <p className="font-display font-semibold text-brass text-[13px] tracking-widest uppercase mb-4">
          The Burner Promise &middot; anti-cloud cut
        </p>
        <h2 className="font-display font-bold text-3xl md:text-[2.75rem] leading-[1.1] tracking-tight text-white max-w-3xl">
          Cloud AI remembers.{' '}
          <span className="text-slate-light">ClaudeFirm forgets, by design.</span>
        </h2>
        <p className="mt-5 text-slate-light text-lg leading-relaxed max-w-[640px]">
          The default for legal AI is &ldquo;trust us.&rdquo; Trust us not to train on your prompts.
          Trust us not to log them. Trust us when the subpoena arrives. ClaudeFirm
          replaces &ldquo;trust us&rdquo; with three structural defaults &mdash; the property holds
          because the system can&rsquo;t do otherwise.
        </p>
      </FadeIn>

      <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-5">
        {PROMISES.map((p, i) => (
          <FadeIn key={p.label} delay={i * 80}>
            <div className="group h-full p-6 rounded-lg border border-white/[0.08] bg-white/[0.02] hover:bg-white/[0.04] hover:border-brass/20 transition-all duration-400">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-brass/[0.08] border border-brass/[0.15] flex items-center justify-center">
                  <p.icon className="w-5 h-5 text-brass" />
                </div>
                <span className="text-[11px] font-display font-semibold tracking-widest uppercase text-brass/70">
                  {p.label}
                </span>
              </div>
              <h3 className="mt-4 font-display font-semibold text-xl text-white tracking-tight leading-snug">
                {p.title}
              </h3>
              <p className="mt-3 text-slate-light text-[14px] leading-relaxed">
                {p.body}
              </p>
            </div>
          </FadeIn>
        ))}
      </div>
    </SectionWrapper>
  )
}
