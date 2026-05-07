import SectionWrapper from './ui/SectionWrapper'
import FadeIn from './ui/FadeIn'
import { Shield, Lock, FileCheck } from 'lucide-react'

const PROMISES = [
  {
    icon: Shield,
    label: 'On-device by construction',
    title: 'The agent runs as a local daemon. The wire isn\'t in the path.',
    body: 'Inbound documents are read from your file system. Outbound work product is written to your file system. The agent process holds them in memory for the matter and is destroyed on exit. The audit log shows zero outbound network calls during a typical intake.',
  },
  {
    icon: Lock,
    label: 'Off-the-record by construction',
    title: 'No prompt history. No vector index. No log file to forget to delete.',
    body: 'Prompts and responses are not written to durable storage anywhere — not on your Mac, not on our servers. The agent process holds them in memory for the duration of the matter and discards on exit. lsof on the agent shows no open file handles to logs after matter close.',
  },
  {
    icon: FileCheck,
    label: 'PII-stripped by construction',
    title: 'When cloud capability is needed, identifiers leave on your machine.',
    body: 'Names, account numbers, and other identifiers are stripped before the request crosses the boundary. The audit captures both the stripped fields and the cloud response, attached to the matter timeline. The breach exposes a payload that doesn\'t identify anyone.',
  },
]

export default function BurnerPromise() {
  return (
    <SectionWrapper id="burner" variant="darker" noisy>
      <FadeIn>
        <p className="font-display font-semibold text-brass text-[13px] tracking-widest uppercase mb-4">
          The Burner Promise &middot; by-construction cut
        </p>
        <h2 className="font-display font-bold text-3xl md:text-[2.75rem] leading-[1.1] tracking-tight text-white max-w-3xl">
          Subpoena-proof{' '}
          <span className="text-slate-light">by construction.</span>
        </h2>
        <p className="mt-5 text-slate-light text-lg leading-relaxed max-w-[640px]">
          &ldquo;We don&rsquo;t store your data&rdquo; is a policy. Policies have exceptions.
          Subpoenas override them. ClaudeFirm makes the same statement structurally:
          there is no central system holding your data because there is no central
          system. Three properties hold because the system can&rsquo;t do otherwise.
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
