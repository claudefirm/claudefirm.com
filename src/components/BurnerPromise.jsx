import SectionWrapper from './ui/SectionWrapper'
import FadeIn from './ui/FadeIn'
import { Flame, Wallet, Unlock } from 'lucide-react'

const PROMISES = [
  {
    icon: Flame,
    label: 'Single-use by design',
    title: 'No memory means no memory tax.',
    body: 'Cloud AI subscriptions price persistence: training datasets, context windows that survive the session, vector stores that hold your firm\'s documents on someone else\'s disks. The bill is partly compute and partly the moat being built from your data. Burner agents skip that whole layer. Compute used during the matter — and then nothing.',
  },
  {
    icon: Wallet,
    label: 'Pay-per-matter math',
    title: 'You pay for work, not for hostage value.',
    body: 'A subscription where switching cost compounds with usage is hostage pricing. A burner stack where switching cost is the price of the next matter\'s compute is just pricing. Every matter pays for itself or it doesn\'t; there is no "but I have indexed two years of files into Vendor X" lock-in.',
  },
  {
    icon: Unlock,
    label: 'No lock-in by construction',
    title: 'We can\'t lock you in with data we don\'t hold.',
    body: 'The matters you ran through us are in your matter management system, not ours. Switch tomorrow if a better burner stack ships next quarter. The math on cost-of-switching cancels itself out — there is no accumulated index of your firm to migrate.',
  },
]

export default function BurnerPromise() {
  return (
    <SectionWrapper id="burner" variant="darker" noisy>
      <FadeIn>
        <p className="font-display font-semibold text-brass text-[13px] tracking-widest uppercase mb-4">
          The Burner Promise &middot; cost-of-memory cut
        </p>
        <h2 className="font-display font-bold text-3xl md:text-[2.75rem] leading-[1.1] tracking-tight text-white max-w-3xl">
          Pay for matters,{' '}
          <span className="text-slate-light">not memory.</span>
        </h2>
        <p className="mt-5 text-slate-light text-lg leading-relaxed max-w-[640px]">
          Most AI products charge you for persistence: the more of your firm&rsquo;s
          data you trust them with, the more switching costs them. Burner agents
          run once and disappear &mdash; there is no memory to charge for, so we don&rsquo;t.
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
