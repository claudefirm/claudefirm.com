import BuildStamp from './components/BuildStamp'

const NUMBERS = [
  {
    n: '$3,000',
    label: 'average cost to a small firm of a single client-data leak (insurance + bar action + lost matter), per Clio Legal Trends 2024',
  },
  {
    n: '5–10 hrs',
    label: 'a week per attorney that could be reclaimed from intake + billing — value of those hours at $300/hr blended',
  },
  {
    n: '$0',
    label: 'cost of an AI subscription that doesn’t persist your client data, because there is no monthly model-memory infrastructure to amortize',
  },
]

const ARG = [
  {
    point: 'Memory is what costs.',
    body:
      'Cloud AI subscriptions price persistence: training datasets, context windows that survive the session, vector stores that hold your firm’s documents on someone else’s disks. The bill is partly compute and partly the moat that gets built from your data.',
  },
  {
    point: 'Burner agents skip the moat.',
    body:
      'A burner agent runs once. There is no persistent context window to grow, no vector index to maintain, no GPU pool sized for "your firm’s memory." The unit of pricing collapses from "monthly subscription that scales with your data" to "compute used during the matter."',
  },
  {
    point: 'You pay for work, not for hostage value.',
    body:
      'A subscription where switching cost compounds with usage is hostage pricing. A burner stack where switching cost is the price of the next matter’s compute is just pricing. Every matter pays for itself or it doesn’t; there’s no "but I’ve indexed two years of files into Vendor X" lock-in.',
  },
]

const COMPARE = [
  ['Cloud AI subscriptions', 'Pay forever. Switching cost compounds with data accumulated.'],
  ['Per-seat AI tools', 'Pay even when nobody used it. Pay for the seats not the matters.'],
  ['ClaudeFirm (burner)', 'Pay for compute consumed by matters that closed.'],
]

function Stat({ n, label }) {
  return (
    <div className="rounded-2xl border border-stone-300 bg-white p-6">
      <p className="text-4xl font-semibold tracking-tight text-stone-900">{n}</p>
      <p className="mt-3 text-sm text-stone-600 leading-relaxed">{label}</p>
    </div>
  )
}

function Arg({ a }) {
  return (
    <li className="rounded-2xl border border-stone-300 bg-white p-6">
      <h3 className="text-xl font-semibold tracking-tight text-stone-900">{a.point}</h3>
      <p className="mt-3 text-stone-700 leading-relaxed">{a.body}</p>
    </li>
  )
}

export default function App() {
  return (
    <main className="min-h-screen bg-stone-50 text-stone-900">
      <div className="mx-auto max-w-4xl px-6 py-16 md:py-24">
        <header className="border-b border-stone-300 pb-10">
          <p className="font-mono text-xs uppercase tracking-widest text-stone-500">
            ClaudeFirm — burner positioning · cost-of-memory cut
          </p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight md:text-6xl leading-[1.05]">
            Pay for matters,
            <br />
            not memory.
          </h1>
          <p className="mt-6 max-w-prose text-xl leading-relaxed text-stone-700">
            Most AI products charge you for persistence: the more of your firm’s data you trust
            them with, the more switching costs them. ClaudeFirm runs burner agents — fresh per
            matter, gone when it closes. There is no memory to charge for, so we don’t.
          </p>
          <p className="mt-3 max-w-prose text-stone-600">
            For owner-operator partners at 1–10 attorney firms who don’t want a vendor that gets
            more entrenched the longer they stay.
          </p>
        </header>

        <section className="mt-14">
          <h2 className="font-mono text-xs uppercase tracking-widest text-stone-500">
            The economics of memory vs no-memory
          </h2>
          <ul className="mt-6 space-y-4">
            {ARG.map((a) => (
              <Arg key={a.point} a={a} />
            ))}
          </ul>
        </section>

        <section className="mt-16">
          <h2 className="font-mono text-xs uppercase tracking-widest text-stone-500">
            Numbers
          </h2>
          <div className="mt-4 grid gap-4 md:grid-cols-3">
            {NUMBERS.map((n) => (
              <Stat key={n.n} {...n} />
            ))}
          </div>
          <p className="mt-3 text-sm text-stone-500">
            Cost figures are estimated against Clio Legal Trends 2024 baselines; placeholder
            until LOI partner site visit produces firm-specific numbers (vision doc §14).
          </p>
        </section>

        <section className="mt-16">
          <h2 className="font-mono text-xs uppercase tracking-widest text-stone-500">
            What you’re actually paying for
          </h2>
          <div className="mt-4 overflow-hidden rounded-2xl border border-stone-300 bg-white">
            <table className="w-full text-left text-sm">
              <tbody>
                {COMPARE.map(([a, b]) => (
                  <tr key={a} className="border-b border-stone-200 last:border-0">
                    <td className="py-3 px-5 font-medium text-stone-900 align-top w-1/3">{a}</td>
                    <td className="py-3 px-5 text-stone-700 leading-relaxed">{b}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="mt-16 rounded-2xl bg-stone-900 p-8 text-stone-100">
          <p className="font-mono text-xs uppercase tracking-widest text-stone-400">
            The 1-line answer to "but what about lock-in?"
          </p>
          <p className="mt-3 text-lg leading-relaxed">
            We can’t lock you in with data we don’t hold. The matters you ran through us are
            in your matter management system, not ours. Switch tomorrow if a better burner
            stack ships next quarter.
          </p>
        </section>

        <footer className="mt-20 border-t border-stone-300 pt-8 text-xs font-mono text-stone-500">
          <p>
            <em>One of four burner positioning cuts running side-by-side at *-dev.foursli.de.</em>
            &nbsp;Open the others:&nbsp;
            <a className="underline" href="https://marketing-dev.foursli.de">privacy</a>{' '}
            ·{' '}
            <a className="underline" href="https://rebel-dev.foursli.de">anti-cloud</a>{' '}
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
