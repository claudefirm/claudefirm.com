import BuildStamp from './components/BuildStamp'

const FALSE_CHOICES = [
  {
    name: 'Cloud AI that remembers',
    cost: 'Memory becomes someone else’s asset. Logs are subpoenable. Training data drifts. Your client list is one config flag from a third party’s dataset.',
  },
  {
    name: 'On-device AI that has no idea what it’s doing',
    cost: 'Sandboxed, isolated, can’t take action. The fancy autocomplete you don’t want to use because it doesn’t reduce work — it just produces it.',
  },
]

const STANCES = [
  {
    title: 'We don’t train.',
    body:
      'Not on your client data. Not on your firm’s phrasing. Not on the patterns of your judges or opposing counsel. The agents you run are not making us smarter at the cost of making your firm legible to a vendor.',
  },
  {
    title: 'We don’t persist.',
    body:
      'No prompt history outside the matter. No vector index of your documents. No "session memory" that survives the task. The agent finishes the work and is gone, in the same way a contractor paralegal finishes a brief and goes home — without a copy of your file.',
  },
  {
    title: 'We don’t phone home.',
    body:
      'No telemetry that contains client content. No "improve our model" pipeline that hoovers up the contents of incoming PDFs. The only thing we know about your usage is what you tell us in support tickets.',
  },
]

function Stance({ s }) {
  return (
    <li className="rounded-2xl border border-stone-300 bg-white p-6">
      <h3 className="text-xl font-semibold tracking-tight text-stone-900">{s.title}</h3>
      <p className="mt-3 text-stone-700 leading-relaxed">{s.body}</p>
    </li>
  )
}

export default function App() {
  return (
    <main className="min-h-screen bg-stone-50 text-stone-900">
      <div className="mx-auto max-w-4xl px-6 py-16 md:py-24">
        <header className="border-b border-stone-300 pb-10">
          <p className="font-mono text-xs uppercase tracking-widest text-stone-500">
            ClaudeFirm — burner positioning · anti-cloud cut
          </p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight md:text-6xl leading-[1.05]">
            Cloud AI remembers.
            <br />
            ClaudeFirm forgets,
            <br />
            by design.
          </h1>
          <p className="mt-6 max-w-prose text-xl leading-relaxed text-stone-700">
            The default for legal AI is "trust us." Trust us not to train on your prompts.
            Trust us not to log them. Trust us when the subpoena arrives. ClaudeFirm replaces
            "trust us" with "the data isn’t there." Burner agents on your machine. The lawyer’s
            files don’t leave the lawyer’s office.
          </p>
          <p className="mt-3 max-w-prose text-stone-600">
            For owner-operator partners at 1–10 attorney firms who’ve already had the
            uncomfortable feeling of dragging a confidential PDF into ChatGPT and wondering
            whether that was, in fact, a bar violation.
          </p>
        </header>

        <section className="mt-14">
          <h2 className="font-mono text-xs uppercase tracking-widest text-stone-500">
            Today’s false choice
          </h2>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            {FALSE_CHOICES.map((c) => (
              <div key={c.name} className="rounded-2xl border border-stone-300 bg-white p-6">
                <h3 className="text-xl font-semibold tracking-tight text-stone-900">{c.name}</h3>
                <p className="mt-3 text-stone-700 leading-relaxed">{c.cost}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-stone-700">
            Both are bad. The first is fast and dangerous; the second is safe and useless. The
            third way exists. It’s a burner agent that runs locally, has the full model
            capability for the task, and doesn’t exist a minute past the close of the matter.
          </p>
        </section>

        <section className="mt-16">
          <h2 className="font-mono text-xs uppercase tracking-widest text-stone-500">
            Stances we’re willing to bind to
          </h2>
          <ul className="mt-6 grid gap-4 md:grid-cols-3">
            {STANCES.map((s) => (
              <Stance key={s.title} s={s} />
            ))}
          </ul>
        </section>

        <section className="mt-16">
          <h2 className="font-mono text-xs uppercase tracking-widest text-stone-500">
            The one-line summary
          </h2>
          <div className="mt-4 rounded-2xl border-2 border-stone-900 bg-white p-8">
            <p className="text-2xl font-semibold tracking-tight leading-snug text-stone-900">
              Stop renting your firm’s memory to AI vendors. Run a burner.
            </p>
          </div>
        </section>

        <section className="mt-16 rounded-2xl bg-stone-900 p-8 text-stone-100">
          <p className="font-mono text-xs uppercase tracking-widest text-stone-400">
            What this means for "AI capability"
          </p>
          <p className="mt-3 text-lg leading-relaxed">
            Local doesn’t mean limited. The burner agent can call cloud models when the work
            requires it — but PII is stripped first, on your machine, with a full audit of
            what crossed and what came back. Capability when you authorize it. No persistence
            anywhere else, ever.
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
            <a className="underline" href="https://evidence-dev.foursli.de">by-construction</a>{' '}
            ·{' '}
            <a className="underline" href="https://pipeline-dev.foursli.de">how this site got here</a>
          </p>
          <BuildStamp />
        </footer>
      </div>
    </main>
  )
}
