---
name: refresh-marketing-site
description: Refresh claudefirm.com marketing site content from authoritative briefing
  docs in doc/briefs/. Reads source documents, validates claims against the actual
  codebase, generates updated copy, and deploys. Use when asked to "refresh the site",
  "update marketing content", "sync the site with docs", or after briefing docs change.
---

# Refresh Marketing Site

Refreshes claudefirm.com content from the authoritative briefing documents in `doc/briefs/`,
validates claims against the actual codebase, updates the site, builds, and optionally deploys.

## Source of Truth

The authoritative documents live in the repo:

| Document | Path | Covers |
|----------|------|--------|
| Executive Summary | `doc/THE-SMALL-FIRM-AI-ADVANTAGE.md` | Full pitch overview |
| The Lethal Trifecta | `doc/briefs/01-THE-LETHAL-TRIFECTA.md` | Threat model, real incidents, ethics |
| Security Architecture | `doc/briefs/02-SECURITY-ARCHITECTURE.md` | Six security layers |
| Human-Agent Pairing | `doc/briefs/03-HUMAN-AGENT-PAIRING.md` | Org chart, Head Partner, approval gates |
| Deploy Anywhere | `doc/briefs/04-DEPLOY-ANYWHERE.md` | Deployment models, data sovereignty |
| Self-Improving Loops | `doc/briefs/05-SELF-IMPROVING-LOOPS.md` | Feedback loops, compound effect |
| The Moat | `doc/briefs/06-THE-MOAT.md` | Fork strategy, competitive landscape |
| Reading Guide | `doc/briefs/README.md` | Index and key concepts |

**These documents are authoritative.** When content conflicts between the site and the
briefing docs, the briefing docs win.

## Site Architecture

The marketing site lives at `sites/claudefirm.com/`:

```
sites/claudefirm.com/
├── src/
│   ├── lib/constants.js          ← ALL data-driven copy lives here
│   ├── components/
│   │   ├── Hero.jsx              ← Hardcoded: headline, subheadline
│   │   ├── Problem.jsx           ← Hardcoded: headline, quote
│   │   ├── MeetYourTeam.jsx      ← Hardcoded: headline, subheading
│   │   ├── HowItWorks.jsx        ← Hardcoded: headline
│   │   ├── TrustSafety.jsx       ← Hardcoded: headline, subheading, quote
│   │   ├── TheNumbers.jsx        ← Hardcoded: headline
│   │   ├── FAQ.jsx               ← Data-driven from constants.js
│   │   ├── CTA.jsx               ← Hardcoded: headline, subheading
│   │   └── Footer.jsx            ← Hardcoded: disclaimer
│   └── ...
├── index.html                     ← Page title
└── wrangler.jsonc                 ← Cloudflare deployment config
```

**Key insight:** Most structured content (pain points, team members, FAQ, stats, trust
points, how-it-works steps) is data-driven from `constants.js`. Headlines, subheadings,
and quotes are hardcoded in component JSX.

## Workflow

### Step 1: Read authoritative docs

Read all briefing documents in `doc/briefs/` and the executive summary. Extract:
- Key messaging pillars
- Specific claims and statistics
- Security feature descriptions
- Product positioning language

### Step 2: Validate claims against codebase

For every factual claim in the briefing docs that references a specific capability,
**verify it exists in the codebase**. This prevents marketing from drifting ahead of
implementation.

| Claim Category | Where to Verify |
|----------------|-----------------|
| Authentication methods | `server/src/middleware/auth.ts`, `server/src/auth/` |
| Company isolation | `packages/db/src/schema/` (company_id foreign keys), `server/src/routes/authz.ts` |
| Sandboxed execution | `deploy/agent/sandbox-template.yaml` (security context, resource limits) |
| Approval gates | `server/src/routes/approvals.ts`, `packages/db/src/schema/approvals.ts` |
| Budget controls | `server/src/services/budget.ts`, `packages/db/src/schema/cost_events.ts` |
| Audit trail | `server/src/services/activity.ts`, `packages/db/src/schema/activity_log.ts` |
| Deployment modes | `docs/deploy/deployment-modes.md`, `server/src/middleware/private-hostname-guard.ts` |
| Agent org hierarchy | `packages/db/src/schema/agents.ts` (reportsTo field) |
| Head Partner persona | `bootstrap/claudefirm/SOUL.md`, `bootstrap/claudefirm/HEARTBEAT.md` |
| Adapter architecture | `packages/adapters/` directory listing |
| DRAFT watermarking | Search for "DRAFT" in SOUL.md and HEARTBEAT.md |
| Secrets encryption | `server/src/services/secrets.ts` |

**Validation rules:**
- If a feature is claimed but the code doesn't exist → flag it as "future" or remove
- If a feature exists but isn't in the docs → consider adding it
- If stats are claimed (e.g. "$234K/year") → verify the math traces to the docs

### Step 3: Generate updated content

Update these files in order:

1. **`src/lib/constants.js`** — All data-driven content:
   - `NAV_ITEMS` — Section navigation labels
   - `PAIN_POINTS` — Problem section cards (icon, stat, title, description)
   - `TEAM_MEMBERS` — Agent cards (icon, role, description, tasks, autonomy)
   - `HOW_IT_WORKS_STEPS` — Three-step process
   - `TRUST_POINTS` — Security feature cards
   - `STATS` — Key numbers
   - `FAQS` — Question/answer pairs

2. **Component JSX files** — Hardcoded headlines, subheadings, quotes:
   - `Hero.jsx` — h1 headline, p subheadline, ghost button text, status bar text
   - `Problem.jsx` — h2 headline, blockquote text + attribution
   - `MeetYourTeam.jsx` — h2 headline, p subheading, autonomy color map keys
   - `HowItWorks.jsx` — h2 headline
   - `TrustSafety.jsx` — h2 headline, p subheading, blockquote + attribution
   - `TheNumbers.jsx` — h2 headline
   - `CTA.jsx` — h2 headline, p subheading
   - `Footer.jsx` — disclaimer text (only if legal posture changed)

3. **`index.html`** — Page `<title>` tag

### Step 4: Build and verify

```bash
cd sites/claudefirm.com
npm install   # if node_modules missing
npx vite build
```

Build must succeed cleanly. Check for:
- Missing icon imports (lucide-react)
- Autonomy color map keys matching new autonomy labels in TEAM_MEMBERS
- No broken JSX from mismatched quotes/brackets

### Step 5: Deploy (if requested)

```bash
cd sites/claudefirm.com
npx wrangler deploy
```

Deploys to Cloudflare Workers. Site is live at claudefirm.com.

## Design Constraints

**DO NOT change:**
- CSS, colors, fonts, spacing, animations (`index.css`)
- Component structure or layout (JSX structure)
- UI components (`ui/Button.jsx`, `ui/FadeIn.jsx`, `ui/SectionWrapper.jsx`, `ui/WaitlistForm.jsx`)
- Admin page (`pages/Admin.jsx`)
- Worker backend (`worker.js`)
- Cloudflare config (`wrangler.jsonc`)
- Favicon (`public/favicon.svg`)

**DO change:**
- Text content, headlines, descriptions
- Data arrays in constants.js
- Icon choices (from lucide-react only)
- Number of items in data arrays (if the content warrants it)

## Tone & Voice

From the briefing docs:
- **Security-first** — lead with the threat, then the solution
- **Plain English** — translate every technical concept for non-technical readers
- **Credibility through specificity** — name the security controls, cite the ABA rules
- **Finserv authority** — "built by an enterprise AI security engineer"
- **No hype** — let the architecture speak for itself

## Validation Report

After completing the refresh, produce a brief validation report:

```
## Content Refresh Validation

### Claims Verified Against Codebase
- [ ] Authentication layers (5 methods) — auth.ts
- [ ] Company isolation — schema + authz.ts
- [ ] Sandboxed execution — sandbox-template.yaml
- [ ] Approval gates — approvals.ts
- [ ] Budget controls — cost_events schema
- [ ] Audit trail — activity_log schema
- [ ] Deploy modes — deployment-modes.md
- [ ] Agent hierarchy — agents.ts reportsTo

### Claims Not Yet Implemented (marked as future)
- (list any)

### Content Changes Made
- (summary of what changed)

### Build Status
- vite build: PASS/FAIL
```
