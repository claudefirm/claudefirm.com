# Founding Software Engineer, Applied AI

ClaudeFirm is hiring a single full-time engineer to own the AI surface of
[claudefirm.com](https://claudefirm.com), starting with a streaming chat
bubble that answers product questions, qualifies leads, and books demos.

This page is the public role spec. It is also the source of truth — what
you see here is what we use internally to screen.

- **Title:** Founding Software Engineer, Applied AI
- **Level:** mid → senior IC, ~3–7 years professional experience
- **Location:** remote, US time-zone overlap (≥ 4 hr with US/Pacific). On-site is not on offer.
- **Comp:** $170k–$210k base + 0.5%–1.25% equity, four-year vest, one-year cliff.
- **Apply:** email a paragraph + a link to something you've shipped to `jobs@claudefirm.com`.

---

## Why this role exists

The marketing site is converging on a real positioning around local-first
AI for legal work. The chat bubble is the natural next surface — it
captures intent at the moment a visitor would otherwise bounce, and it
doubles as a public proof-point for the thesis the site argues for.

We need a single owner who can ship v1 in weeks, not quarters, and stick
around to own the post-launch loop: eval, prompt iteration, RAG corpus
curation, content-gap triage.

We are not hiring a manager and not hiring a junior who needs a mentor —
there is no one to mentor them yet.

---

## Must-have skills

- Strong TypeScript + React. You will be reading and writing
  [`claudefirm/claudefirm-com`](https://github.com/claudefirm/claudefirm-com)
  (Vite + React + Tailwind) on day one.
- Hands-on with at least one production LLM app — you have shipped
  streaming chat to real users and dealt with the consequences (eval
  drift, hallucination escalation, abuse handling).
- Comfortable with SSE / streaming response handling end-to-end (server
  route, client transport, partial-render UX).
- Prompt engineering as a working skill, not a vibe. You can articulate
  why a prompt is failing and what to change, with reference to specific
  token-level behaviors.
- Solid product instincts: opinionated about what *not* to ship in v1.

## Nice-to-haves

- RAG experience past "hello world" — chunking strategy, retrieval eval,
  corpus rot.
- Familiarity with eval frameworks (Braintrust, Phoenix, ragas, deepeval,
  or equivalent).
- OTel / Phoenix tracing experience — bonus, not required; we can teach
  this in a week.
- Past contributions to or production use of the
  [Vercel AI SDK](https://www.npmjs.com/package/ai) or
  [`@assistant-ui/react`](https://www.assistant-ui.com/).
- Prior YC / early-stage experience and an opinion about why the
  chat-bubble incumbents (Inkeep, Kapa) aren't the right answer for
  *this* site.

---

## What you own at day 90

- chat-bubble v1 shipped to claudefirm.com production.
- Q&A corpus + retrieval pipeline maintained as a first-class artifact,
  not a scratch script.
- Eval harness with at least 50 ground-truth Q&A pairs running on every
  PR.
- Phoenix dashboards for chat-bubble traffic, hooked into our existing
  OTel pipeline.
- A documented escalation path for sensitive queries — matter-specific
  legal questions hard-refuse and route to a monitored alias.

---

## Comp, candidly

- **Base:** $170k–$210k, depending on level.
- **Equity:** 0.5%–1.25%, four-year vest, one-year cliff.

We are MIT-licensed open-source with zero paying users today. We cannot
win a comp war with a series-B AI infra company, and we are not going to
pretend otherwise.

What we *can* offer:

- Founding-engineer equity, not a "founding engineer" title with regular
  options.
- Genuinely interesting work — building the AI surface for a product
  whose entire thesis is local-first AI.
- A low-bullshit team. CEO and CTO are on the same Slack as you. There
  is no PM layer.
- Public visibility. You build something real, on a site that gets
  looked at, and your name is on it.

The band above is roughly the 50th percentile for senior-IC remote
applied-AI hires per Levels.fyi mid-2026 reads, deliberately under what
FAANG would pay so we self-select for candidates who care about the
mission and the equity upside.

---

## How we screen

We are looking for one hire. We are not running a top-of-funnel
optimization problem.

### 30-minute screen

A real conversation about a thing you've actually shipped. Specifics
beat buzzwords.

We will ask you to walk through how you'd wire `@assistant-ui/react` to
a `/api/chat` SSE endpoint and what you'd verify before merging.

### Take-home (≤ 4 hours, paid $200 honorarium regardless of outcome)

Build a single-route streaming chat component on the
[Vercel AI SDK](https://www.npmjs.com/package/ai) +
[`@assistant-ui/react`](https://www.assistant-ui.com/), against any
OpenAI-compatible provider. The chat must:

- Stream tokens incrementally with visible partial render.
- Implement one tool call: `book_demo({ email })` that returns a static
  Cal.com link.
- Refuse, with a clear message, if the user message contains the
  substring "my matter" (case-insensitive). This stands in for the real
  sensitive-query escalation path.
- Run with `npm install && npm run dev`, no exotic native deps,
  README ≤ 200 words.

Constraints: ≤ 200 lines of meaningful TypeScript (excluding generated
boilerplate), submitted as a public GitHub repo or a tarball.

### Grading rubric

Five axes, 0–4 each, total / 20. Hire bar: ≥ 14, no axis below 2.

| Axis | 0 | 2 | 4 |
|---|---|---|---|
| **Streaming UX** | Blocks on full response. | Tokens appear, no jank. | Tokens stream cleanly, cancellation works, no flash-of-unstyled-message. |
| **Tool-call correctness** | Tool not invoked or invoked wrong. | Tool works on the happy path. | Tool works, schema-validated, graceful failure, structured render. |
| **Refusal handling** | Substring leaks past, model just answers. | Refusal triggers but copy is generic. | Refusal triggers, copy is on-brand, points user at a real next step (email link). |
| **Code quality** | Untyped, copy-pasted, no separation. | Reasonable structure, types mostly right. | Clean module boundaries, types tight, idiomatic AI SDK usage, would merge as-is. |
| **Product judgement** | Built exactly what was asked, no thought. | Made one thoughtful call (e.g. cancel mid-stream, copy tone). | Made multiple thoughtful calls and explained why in the README — and *resisted* over-building. |

Anti-patterns that auto-fail regardless of score:

- Sends prompts client-side with the API key embedded.
- Wraps the AI SDK in a custom abstraction "for flexibility" inside a
  200-line task.
- Uses a hosted vendor (Inkeep / Kapa / Mendable) instead of the SDK —
  direct contradiction of the brief.

### Final round

A 60-minute conversation: 20 min deep-dive on the take-home, 20 min on
how you'd scope chat-bubble v2 once we have a month of traffic data, 20
min 1:1 with the CEO on fit, motivation, comp, references.

---

## What v1 of the chat bubble looks like

So you know what you're walking into.

### What v1 *does*

- Answers FAQ-equivalent product questions: what is ClaudeFirm, what
  does it run on, who is it for, how is data stored, what's the
  deployment model, what's the license.
- Captures an email when the visitor asks for a demo or pricing — drops
  it into a Cal.com booking link plus a notification to a monitored
  alias.
- Cites the source page from the marketing-site corpus when answering.
  No invented citations.
- Streams visibly. The visitor never wonders if it's hung.

### What v1 *routes*

- Pricing-tier-specific questions → "the team will reply with specifics"
  + email capture.
- Hiring questions → static link to this page.
- Partner / press / legal-vendor inbound → static link to the right
  alias.

### What v1 *explicitly does not do*

- It does not answer matter-specific legal questions. It hard-refuses
  with a clear message and routes to humans. No exceptions, no clever
  workarounds.
- It does not retain conversation history across sessions. v1 is
  stateless per page-load.
- It does not personalize based on visitor identity. We do not know who
  they are and we do not pretend to.
- It does not roleplay as a lawyer, a customer, or a ClaudeFirm
  employee. It is "the marketing assistant" and labeled as such.
- It does not log full conversations to a third party. Inference goes
  through our own LLM proxy; logs stay in our own observability
  pipeline.

### Stack

- Frontend: `@assistant-ui/react` mounted in
  [`claudefirm/claudefirm-com`](https://github.com/claudefirm/claudefirm-com).
- Server: a single edge/serverless streaming route (CTO call between
  Vite SSR and a serverless function).
- RAG corpus seeded from the live marketing-site MDX/HTML plus a hand-
  maintained Q&A file. ~50 ground-truth pairs at launch.
- Observability: existing OTel + Phoenix pipeline. No new vendor.

---

## What good looks like

We do not commit to numeric targets pre-launch. We have no traffic
baselines and made-up numbers turn into theatre. Here is what we
*measure*; we agree the targets after week 1 of real data.

**Week 4** — eval pass rate on the 50 Q&A pairs (baseline week 1, target
"didn't regress" by week 4); hallucination-escalation rate trending
down; refusal correctness at 100% (this is a safety floor, not a metric
to optimize); time-to-first-token p50 under 1.5 s.

**Month 3** — visitor → email-capture conversion for visitors who open
the bubble; email-capture → booked-demo rate; topic distribution of
conversations (this tells us what's missing from the marketing site
itself); a running content-gaps log triaged weekly.

We do not claim conversion percentages third-partyly until we have ≥ 4
weeks of stable traffic. We do not benchmark publicly against industry
chat-bubble vendors until our own eval harness is mature.

---

## How to apply

Email `jobs@claudefirm.com` with:

- a paragraph on the last LLM-backed thing you shipped to real users —
  what broke first, what you'd do differently;
- a link to it (repo, demo, post, anything we can look at);
- whether the comp band above works for you.

No cover letter. No resume formatting hoops. We read every message.
