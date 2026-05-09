import BuildStamp from './components/BuildStamp'

const PROOFS = [
  {
    n: '01',
    title: 'On-device by construction',
    body:
      'The agent process runs as a local macOS daemon under your user account. Inbound documents are read from your file system. Outbound work product is written to your file system. The wire is not in the path.',
    artifact: 'Audit log shows zero outbound network calls during a typical intake.',
  },
  {
    n: '02',
    title: 'Off-the-record by construction',
    body:
      'Prompts and responses are not written to durable storage. The agent process holds them in memory for the duration of the matter and discards on exit. There is no log file to forget to delete.',
    artifact: 'lsof on the agent process shows no open file handles to logs after matter close.',
  },
  {
    n: '03',
    title: 'PII-stripped by construction',
    body:
      'When a task requires cloud capability — say, a long brief that needs the larger model — names, account numbers, and other identifiers are stripped before the request leaves the machine. The audit captures both the stripped fields and the cloud response.',
    artifact: 'Diff view of stripped vs cloud-bound payload, attached to the matter timeline.',
  },
  {
    n: '04',
    title: 'OSS-evaluable engine',
    body:
      'The runtime that enforces the above is open source under MIT. Your firm’s IT consultant or external security counsel can read the source. "Trust the property because the property is verifiable" is the only stance we’re willing to make.',
    artifact: 'Public repo. Full revision history. SBOM published per release.',
  },
]

const SUBPOENA_FAQ = [
  {
    q: 'A subpoena lands. What do you have on my client?',
    a: 'Nothing. The agent that ran their matter no longer exists. We never had the prompts, never had the documents, never had the work product — those lived on your Mac the whole time. We can’t produce what we don’t hold.',
  },
  {
    q: 'A breach happens upstream — the model vendor gets hacked. What leaks?',
    a: 'For local-only matters: nothing of yours. For matters that authorized a cloud step: the stripped, de-identified payload that crossed the boundary, captured in your local audit. PII never crossed. The breach exposes a payload that doesn’t identify anyone.',
  },
  {
    q: 'A federal regulator wants telemetry from the AI vendor about your firm’s usage.',
    a: 'There is no telemetry that contains client content. We log usage counts and error rates from the runtime itself; nothing about the matters those runs handled. The regulator gets the same answer as the subpoena.',
  },
]

function Proof({ p }) {
  return (
    <li className="rounded-2xl border border-stone-300 bg-white p-6">
      <p className="font-mono text-xs uppercase tracking-widest text-stone-500">{p.n}</p>
      <h3 className="mt-2 text-xl font-semibold tracking-tight text-stone-900">{p.title}</h3>
      <p className="mt-3 text-stone-700 leading-relaxed">{p.body}</p>
      <p className="mt-3 text-xs font-mono text-stone-500">
        Verifiable: {p.artifact}
      </p>
    </li>
  )
}

function Faq({ q, a }) {
  return (
    <div className="border-b border-stone-300 py-5">
      <p className="font-medium text-stone-900">{q}</p>
      <p className="mt-2 text-stone-700 leading-relaxed">{a}</p>
    </div>
  )
}

export default function App() {
  return (
    <main className="min-h-screen bg-stone-50 text-stone-900">
      <div className="mx-auto max-w-4xl px-6 py-16 md:py-24">
        <header className="border-b border-stone-300 pb-10">
          <p className="font-mono text-xs uppercase tracking-widest text-stone-500">
            ClaudeFirm — burner positioning · by-construction cut
          </p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight md:text-6xl leading-[1.05]">
            Subpoena-proof
            <br />
            by construction.
          </h1>
          <p className="mt-6 max-w-prose text-xl leading-relaxed text-stone-700">
            "We don’t store your data" is a policy. Policies have exceptions. Subpoenas
            override them. ClaudeFirm makes the same statement structurally:&nbsp;
            <em>there is no central system holding your data because there is no central
            system.</em> The agent ran on your Mac. The agent is gone. The work product is
            in your matter file.
          </p>
          <p className="mt-3 max-w-prose text-stone-600">
            For IT, bar tech, and the security counsel evaluating whether AI in the practice
            is something the firm can defend if it gets challenged.
          </p>
        </header>

        <section className="mt-14">
          <h2 className="font-mono text-xs uppercase tracking-widest text-stone-500">
            What "by construction" actually buys you
          </h2>
          <ul className="mt-6 grid gap-4 md:grid-cols-2">
            {PROOFS.map((p) => (
              <Proof key={p.n} p={p} />
            ))}
          </ul>
        </section>

        <section className="mt-16">
          <h2 className="font-mono text-xs uppercase tracking-widest text-stone-500">
            What happens when the bad day comes
          </h2>
          <div className="mt-2">
            {SUBPOENA_FAQ.map((f) => (
              <Faq key={f.q} {...f} />
            ))}
          </div>
        </section>

        <section className="mt-16 rounded-2xl border-2 border-stone-900 bg-white p-8">
          <p className="font-mono text-xs uppercase tracking-widest text-stone-500">
            The one-paragraph elevator pitch
          </p>
          <p className="mt-3 text-xl leading-relaxed text-stone-900">
            ClaudeFirm is an AI paralegal that runs on the lawyer’s Mac, handles a single
            matter, and is destroyed when the matter closes. The runtime that guarantees
            this property is open source. There is nothing in someone else’s system to
            subpoena, breach, or train on. The lawyer’s files don’t leave the lawyer’s
            office, by construction.
          </p>
        </section>

        <footer className="mt-20 border-t border-stone-300 pt-8 text-xs font-mono text-stone-500">
          <p>
            <em>One of four burner positioning cuts running side-by-side at *-dev.foursli.de.</em>
            &nbsp;Open the others:&nbsp;
            <a className="underline" href="https://marketing-dev.foursli.de">privacy</a>{' '}
            ·{' '}
            <a className="underline" href="https://economics-dev.foursli.de">cost-of-memory</a>{' '}
            ·{' '}
            <a className="underline" href="https://rebel-dev.foursli.de">anti-cloud</a>{' '}
            ·{' '}
            <a className="underline" href="https://pipeline-dev.foursli.de">how this site got here</a>
          </p>
          <BuildStamp />
        </footer>
      </div>
    </main>
  )
}
