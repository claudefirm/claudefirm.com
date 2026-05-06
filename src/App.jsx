import { useEffect, useState } from 'react'
import BuildStamp from './components/BuildStamp'

const VARIANTS = [
  {
    slug: 'marketing',
    label: 'Capacity',
    url: 'https://marketing-dev.foursli.de',
    hero: 'An AI paralegal that handles the toil, and never leaves your office.',
    audience: 'Homepage + sales',
  },
  {
    slug: 'economics',
    label: 'ROI',
    url: 'https://economics-dev.foursli.de',
    hero: 'Reclaim 10 hours a week from billing alone.',
    audience: 'Sales decks + feature pages',
  },
  {
    slug: 'rebel',
    label: 'Tension-Resolution',
    url: 'https://rebel-dev.foursli.de',
    hero: 'Stop choosing between toy AI and dangerous AI.',
    audience: 'Press, keynote, investor',
  },
  {
    slug: 'evidence',
    label: 'On-Device / Off-the-Record',
    url: 'https://evidence-dev.foursli.de',
    hero: 'On your machine. Off the record.',
    audience: 'IT, bar tech, security',
  },
]

function VariantCard({ v }) {
  const [meta, setMeta] = useState(null)
  useEffect(() => {
    let alive = true
    fetch(`${v.url}/.source-sha`, { mode: 'cors' })
      .then((r) => r.text())
      .then((sha) =>
        fetch(`${v.url}/.built-at`, { mode: 'cors' })
          .then((r) => r.text())
          .then((built) => alive && setMeta({ sha: sha.trim(), built: built.trim() })),
      )
      .catch(() => {})
    return () => {
      alive = false
    }
  }, [v.url])

  return (
    <a
      href={v.url}
      target="_blank"
      rel="noreferrer"
      className="group block rounded-2xl border border-stone-300 bg-white p-6 transition hover:border-stone-900 hover:shadow-lg"
    >
      <div className="flex items-baseline justify-between">
        <span className="text-xs font-mono uppercase tracking-wider text-stone-500">
          {v.audience}
        </span>
        <span className="text-xs font-mono text-stone-400">{v.slug}-dev</span>
      </div>
      <h3 className="mt-2 text-2xl font-semibold tracking-tight text-stone-900">
        {v.label}
      </h3>
      <p className="mt-3 text-sm leading-snug text-stone-700">
        &ldquo;{v.hero}&rdquo;
      </p>
      <div className="mt-4 border-t border-stone-200 pt-3 text-xs font-mono text-stone-500">
        {meta ? (
          <>
            sha&nbsp;<span className="text-stone-700">{meta.sha.slice(0, 8)}</span>
            <span className="mx-2 text-stone-300">|</span>
            built&nbsp;<span className="text-stone-700">{meta.built}</span>
          </>
        ) : (
          <>fetching live build metadata…</>
        )}
      </div>
    </a>
  )
}

function Step({ when, where, what, why }) {
  return (
    <li className="rounded-xl border border-stone-300 bg-white p-5">
      <p className="font-mono text-xs uppercase tracking-wider text-stone-500">
        {when} &nbsp;·&nbsp; {where}
      </p>
      <p className="mt-1 font-medium">{what}</p>
      {why && <p className="mt-1 text-sm text-stone-600">{why}</p>}
    </li>
  )
}

function Tech({ name, role }) {
  return (
    <div className="rounded-lg border border-stone-300 bg-white px-4 py-3">
      <p className="font-medium text-stone-900">{name}</p>
      <p className="mt-0.5 text-stone-600">{role}</p>
    </div>
  )
}

export default function App() {
  return (
    <main className="min-h-screen bg-stone-50 text-stone-900">
      <div className="mx-auto max-w-4xl px-6 py-16 md:py-24">
        <header className="border-b border-stone-300 pb-8">
          <p className="text-xs font-mono uppercase tracking-widest text-stone-500">
            claudefirm-com / dev-sites pipeline
          </p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight md:text-5xl">
            How a marketing variant goes live in ~2 minutes.
          </h1>
          <p className="mt-4 max-w-prose text-lg leading-relaxed text-stone-700">
            Four side-by-side cuts of <code>claudefirm.com</code> live at{' '}
            <code className="rounded bg-stone-200 px-1.5">*-dev.foursli.de</code>.
            One Coder workspace per variant for live edits; one OCI image per
            variant for durable serving. The pipeline below is the connective
            tissue: <strong>commit&nbsp;→ build&nbsp;→ image&nbsp;→ live URL</strong>,
            without an operator in the loop.
          </p>
        </header>

        <section className="mt-12">
          <h2 className="text-xs font-mono uppercase tracking-widest text-stone-500">
            The four variants &mdash; live now
          </h2>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            {VARIANTS.map((v) => (
              <VariantCard key={v.slug} v={v} />
            ))}
          </div>
        </section>

        <section className="mt-16">
          <h2 className="text-xs font-mono uppercase tracking-widest text-stone-500">
            What happens when HOG pushes a commit
          </h2>
          <ol className="mt-4 space-y-4 text-stone-800">
            <Step
              when="t = 0 s"
              where="HOG's machine"
              what={<code>git push origin variant-marketing</code>}
              why="HOG was iterating live in their Coder workspace (pnpm dev with hot reload). Push is the only handoff between iteration and the durable surface."
            />
            <Step
              when="t ≈ 30 s"
              where="arc-runners-claudefirm (in-cluster DinD)"
              what={<>CI checks out <code>main</code>, overlays <code>src/</code> from the variant branch, builds <code>dist/</code> with Vite, bakes it into a Caddy image, pushes 3 tags to the in-cluster Zot registry.</>}
              why="Tags: :sha for traceability, :commit-ts-sha for Flux to sort, :latest for ad-hoc curl. The runner SA has zero cluster RBAC — it can build and push, nothing else."
            />
            <Step
              when="t ≈ 60 s"
              where="flux image-reflector"
              what={<><code>ImageRepository</code> rescans Zot. The new <code>&lt;ts&gt;-&lt;sha&gt;</code> tag is the highest timestamp, so the <code>ImagePolicy</code> resolves it as the latest.</>}
              why="No webhook, no push trigger. The reflector polls every minute. Pull cred is the same Zot apikey that powers paperclip-fourslide-preview."
            />
            <Step
              when="t ≈ 60–120 s"
              where="flux image-automation"
              what={<><code>ImageUpdateAutomation</code> rewrites the <code>image:</code> line in <code>deploy/dev-sites/services.yaml</code> at the <code>{`# {"$imagepolicy": ...}`}</code> setter marker, commits to <code>fourslide/fourslide</code> main, pushes.</>}
              why="The commit is signed as flux-image-automation@foursli.de, authored by Flux. Reverse a bad rollout the same way you reverse anything else: git revert."
            />
            <Step
              when="t ≈ 120 s"
              where="flux kustomize-controller"
              what="Kustomization detects the spec change, applies it. Knative creates a new Revision, pulls the new digest, spins a Caddy pod (always-warm, minScale=1), cuts traffic over."
              why="Old revisions stick around for fast revert. Knative does the blue/green; we don't touch deployments directly."
            />
            <Step
              when="t ≈ 130 s"
              where="reviewer's browser"
              what={<><code>https://&lt;variant&gt;-dev.foursli.de/</code> serves the new build through the istio-https Gateway and per-host Authentik proxy. The build-stamp at the bottom of each variant card shows the live sha.</>}
            />
          </ol>
        </section>

        <section className="mt-16">
          <h2 className="text-xs font-mono uppercase tracking-widest text-stone-500">
            Why this shape
          </h2>
          <div className="mt-4 space-y-4 text-stone-800">
            <p>
              <strong>Iteration and publishing are different jobs.</strong>{' '}
              HOG needs hot-reload; reviewers need durable URLs. Coder workspaces auto-stop on idle &mdash; if those served the public URL, the four-up review broke every time HOG went to dinner. So Coder runs <code>pnpm dev</code> for the editor experience, and a separate Knative tier serves the published dist.
            </p>
            <p>
              <strong>Tags carry meaning.</strong>{' '}
              <code>:latest</code> is unsafe for digest-pinning runtimes like Knative. <code>:&lt;sha&gt;</code> alone doesn&apos;t sort in time order. Flux ImagePolicy picks the latest <code>&lt;ts&gt;-&lt;sha&gt;</code> via numeric sort on the leading timestamp. The same image carries all three tags &mdash; one for humans, one for machines, one for curl.
            </p>
            <p>
              <strong>The CI runner has no cluster RBAC.</strong>{' '}
              An earlier version of this pipeline patched the ksvc annotation from CI to force a Knative roll. That worked but required granting the runner SA <code>patch</code> on <code>services.serving.knative.dev</code>. Flux ImageUpdateAutomation removed that need: the runner only builds and pushes; the cluster reads from git.
            </p>
            <p>
              <strong>One declarative loop, fully reversible.</strong>{' '}
              Roll back a variant by <code>git revert</code>ing the auto-commit; Flux applies the older image ref; Knative rolls back to the prior revision. Git is the source of truth, not the cluster.
            </p>
          </div>
        </section>

        <section className="mt-16">
          <h2 className="text-xs font-mono uppercase tracking-widest text-stone-500">
            Stack
          </h2>
          <div className="mt-4 grid gap-3 md:grid-cols-2 text-sm">
            <Tech name="Coder" role="HOG's iteration sandbox (pnpm dev hot reload)" />
            <Tech name="GitHub Actions on ARC" role="in-cluster DinD; builds + pushes per variant" />
            <Tech name="Zot OCI registry" role="self-hosted, in-cluster, pure-Go" />
            <Tech name="Flux image-reflector" role="ImageRepository scans Zot every 1m" />
            <Tech name="Flux image-automation" role="rewrites image refs in git, commits back" />
            <Tech name="Flux kustomize-controller" role="applies the rewritten ksvc spec" />
            <Tech name="Knative Serving" role="autoscale-from-1, atomic revisions, blue/green" />
            <Tech name="Caddy" role="serves dist/ baked into the OCI image" />
            <Tech name="Istio + per-host Authentik" role="terminates TLS + gates the public URL" />
          </div>
        </section>

        <footer className="mt-20 border-t border-stone-300 pt-8 text-xs font-mono text-stone-500">
          <p>
            Sources:&nbsp;
            <a className="underline" href="https://github.com/claudefirm/claudefirm-com">
              claudefirm/claudefirm-com
            </a>{' '}
            ·{' '}
            <a className="underline" href="https://github.com/fourslide/fourslide/tree/main/deploy/dev-sites">
              fourslide/fourslide deploy/dev-sites
            </a>{' '}
            ·{' '}
            <a className="underline" href="https://github.com/darren-iac/iac/tree/main/infrastructure/controllers/knative-operator">
              iac knative-operator
            </a>
          </p>
          <BuildStamp />
        </footer>
      </div>
    </main>
  )
}
