import SectionWrapper from './ui/SectionWrapper'
import FadeIn from './ui/FadeIn'
import { Flame, Shield, Server } from 'lucide-react'

const PROMISES = [
  {
    icon: Flame,
    label: 'Single-use by construction',
    title: 'Spawn at matter open. Destroyed at matter close.',
    body: 'The agent process exists for the life of the matter. When the matter closes, the working memory is wiped, the model context is discarded, and there is nothing left to subpoena. Reopening the matter spins up a fresh agent that starts from the matter file — never from a stash of "what we remembered last time."',
  },
  {
    icon: Server,
    label: 'On-device by default',
    title: 'Your client work doesn\'t leave the office.',
    body: 'The agent runs as a local macOS process under your account. Documents are read from your file system. Drafts are written to your file system. The wire is not in the loop unless a task explicitly calls for cloud-model capability — and even then, PII is stripped first, locally.',
  },
  {
    icon: Shield,
    label: 'No central system',
    title: 'Nothing for a vendor to lose.',
    body: 'Most "AI for lawyers" promises "we don\'t store your data" while routing every prompt through their servers. Burner agents skip the operational promise entirely: there is no central database holding your matter contents because there is no central database. We can\'t leak what we don\'t hold.',
  },
]

export default function BurnerPromise() {
  return (
    <SectionWrapper id="burner" variant="darker" noisy>
      <FadeIn>
        <p className="font-display font-semibold text-brass text-[13px] tracking-widest uppercase mb-4">
          The Burner Promise
        </p>
        <h2 className="font-display font-bold text-3xl md:text-[2.75rem] leading-[1.1] tracking-tight text-white max-w-3xl">
          Used once.{' '}
          <span className="text-slate-light">
            Then burned. Three structural guarantees, not three policies.
          </span>
        </h2>
        <p className="mt-5 text-slate-light text-lg leading-relaxed max-w-[640px]">
          &ldquo;We won&rsquo;t train on your prompts&rdquo; is a policy. Policies have
          exceptions. Subpoenas override them. Burner is structural &mdash; the
          property holds because the system is built so it can&rsquo;t do otherwise.
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
