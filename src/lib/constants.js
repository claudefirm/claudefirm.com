import {
  Clock, TrendingDown, BarChart3,
  Crown, UserPlus, Receipt, Megaphone,
  Shield, Eye, FileCheck, Server,
} from 'lucide-react'

export const NAV_ITEMS = [
  { label: 'The Math', href: '#problem' },
  { label: 'Your Team', href: '#team' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Safeguards', href: '#trust' },
  { label: 'FAQ', href: '#faq' },
]

export const PAIN_POINTS = [
  {
    icon: Clock,
    stat: '5–10 hrs',
    title: 'Per attorney per week recovered on billing alone',
    description: 'Design target from the vision doc. The agent drafts billable-hour entries from your calendar, mail, and document edits; you approve. At a $300/hr blended rate that is $1,500–$3,000 per attorney per week of recaptured capacity. Measured against a real partner baseline lands with the LOI visit.',
  },
  {
    icon: TrendingDown,
    stat: '~90s',
    title: 'End-to-end client intake on Apple Silicon',
    description: 'Design target: incoming PDF → safety scan → conflict check → matter created → consult slot proposed → one-page summary. Replaces 30–60 minutes of paralegal-shaped work per matter. Math: at 5 new matters a week, that is 2.5–5 hours back per attorney.',
  },
  {
    icon: BarChart3,
    stat: 'Aged AR',
    title: 'Invoices that go past 60 days are revenue leaks',
    description: 'You meant to follow up. You were in court. Then it got awkward. The agent drafts the follow-up on cadence, in your voice; you approve before anything sends. Specific dollar recovery is firm-specific — we will quote a target range against your collection rate after a five-minute conversation.',
  },
]

export const TEAM_MEMBERS = [
  {
    icon: Crown,
    role: 'Head Partner',
    description: 'Operations, scheduling, matter management',
    tasks: [
      'Daily deadline brief — what is on fire today, what is on fire next week',
      'Inbox triage — surfaces the three things you actually need to read',
      'Calendar coordination and conflict checking before you commit',
    ],
    autonomy: 'Approval-gated',
    autonomyDescription: 'Reports to you. Escalates judgment calls before acting.',
  },
  {
    icon: UserPlus,
    role: 'Intake Agent',
    description: 'Prospective-client triage, conflict check, matter setup',
    tasks: [
      'Reads the incoming PDF; flags the matter type and likely conflicts',
      'Drafts the engagement letter and consult-slot proposal',
      'Hands you a one-page summary before the call, not after',
    ],
    autonomy: 'Approval-gated',
    autonomyDescription: 'Drafts everything. Nothing reaches a prospect without your sign-off.',
  },
  {
    icon: Receipt,
    role: 'Billing Agent',
    description: 'Time capture, narrative drafting, follow-up',
    tasks: [
      'Drafts billable-hour entries from your calendar, mail, and document edits',
      'Writes narratives in your phrasing, not legal-tech filler',
      'Sends follow-ups on aged invoices — in your voice, after you approve',
    ],
    autonomy: 'Approval-gated',
    autonomyDescription: 'Drafts in your voice. You approve every send.',
  },
  {
    icon: Megaphone,
    role: 'Practice Agent',
    description: 'Document drafting, classification, light marketing',
    tasks: [
      'Drafts from your templates — engagement letters, demand letters, NDAs',
      'Sorts incoming discovery into matter folders with privilege flags',
      'Drafts referral check-ins on cadence; you decide what sends',
    ],
    autonomy: 'Approval-gated',
    autonomyDescription: 'Drafts everything. You sign before anything leaves the firm.',
  },
]

export const HOW_IT_WORKS_STEPS = [
  {
    number: '01',
    title: 'Tell us your billing rate and your toil',
    description: 'A five-minute call. Your blended rate, your typical new-matter volume, your collection rate. We translate it into a target hours-back-per-week range and the dollar equivalent — written down, with the math, before you decide.',
  },
  {
    number: '02',
    title: 'The agent does the toil; the math compounds',
    description: 'Intake forms get processed. Billing entries get drafted. Aged invoices get followed up. The 5–10 hours per attorney per week the product targets land in your billable column, not your admin column.',
  },
  {
    number: '03',
    title: 'You review and sign — and your firm bills more',
    description: 'Nothing leaves without your approval. Every action is logged for the supervision record. The dollars recovered are the dollars you bill, not the dollars a vendor claims you saved.',
  },
]

export const TRUST_POINTS = [
  {
    icon: Eye,
    title: 'Approval gate before anything sends',
    description: 'The agent drafts. The lawyer signs. Every email, invoice, engagement letter, and filing waits in a queue until you read it and approve it. There is no autopilot.',
  },
  {
    icon: Shield,
    title: 'Per-matter isolation by default',
    description: 'The agent working on the Acme matter cannot see the Smith files. Not "shouldn\'t" — cannot. Each matter is a separate workspace with its own access boundary.',
  },
  {
    icon: FileCheck,
    title: 'Audit log the bar can read',
    description: 'Every document the agent saw. Every draft it produced. Every action you approved. A supervision record built for ABA Model Rule 5.3, not retrofitted.',
  },
  {
    icon: Server,
    title: 'Runs on your Mac, not someone else\'s server',
    description: 'Your client work stays on your machine by default. When a task needs a cloud model, identifying information is stripped on your machine first — and you authorize the step before it happens.',
  },
]

export const STATS = [
  {
    value: '5–10 hrs',
    label: 'design target for billing-time recovery per attorney per week. At a $300/hour blended rate, that is $1,500–$3,000 per attorney per week. Measured number lands with the LOI partner observation.',
    source: 'Vision doc §6, marquee toil',
  },
  {
    value: '~90s',
    label: 'design target for end-to-end client intake on Apple Silicon. Replaces 30–60 minutes of paralegal-shaped work per matter; multiplies by your new-matter rate.',
    source: 'Vision doc §6, marquee toil',
  },
  {
    value: '[TBD]',
    label: 'observed time-on-task baseline for the LOI partner doing client intake by hand. Replaces this placeholder once Darren completes the 90-minute observation per vision doc §14.',
    source: null,
  },
  {
    value: 'Pays for itself',
    label: 'in week one if the billing-recovery target is met at any blended rate above $150/hour. The math is in the FAQ, not in the marketing.',
    source: null,
  },
]

export const FAQS = [
  {
    question: 'Show me the dollars math.',
    answer: 'At the design-target 5–10 hours of billing-time recovery per attorney per week, against a $300/hour blended rate, you are looking at $1,500–$3,000 per attorney per week of recaptured capacity. For a solo, that pays the product back in week one even at the high end of pricing. For a 5-attorney firm, the recovered capacity is $7,500–$15,000 per week. These are design targets, not customer testimonials — the LOI partner visit produces the first observed measurement.',
  },
  {
    question: 'What if my collection rate, not my billing-rate capture, is the bottleneck?',
    answer: 'Then the dollars math runs through the aged-AR follow-up agent instead. We do not publish a fabricated collection-rate lift number on this page. After a five-minute conversation we will quote you a target range against your specific collection rate — written down, with the math.',
  },
  {
    question: 'Do I need an IT department to set this up?',
    answer: 'No. The product is built for owner-operator firms that do not have one. You describe how your practice runs — intake, billing, conflict checks — in plain English. An afternoon for a solo, a day or two for a 10-attorney firm.',
  },
  {
    question: 'How is this different from Harvey, Legora, or CoCounsel?',
    answer: 'They are sized for AmLaw 200 — in-house IT teams, procurement processes, $30K/seat budgets, BigLaw-shaped workflows like discovery review and M&A diligence. We are sized for the owner-operator partner of a 1–10 attorney firm. Different buyer, different price, different toil.',
  },
  {
    question: 'How is this different from Clio or MyCase?',
    answer: 'Clio and MyCase are practice-management systems — they are where your matters live. Keep them. ClaudeFirm is the agent layer that does the work across them. We integrate; we do not replace.',
  },
  {
    question: 'What about client confidentiality?',
    answer: 'Client work stays on your Mac by default. When a task needs a cloud model for capability reasons, identifying information is stripped on your machine first, you authorize the step, and the audit log records what was stripped, where it went, and what came back. Designed against ABA Model Rules 1.1, 1.6, and 5.3.',
  },
  {
    question: 'When do I get to see real customer numbers, not design targets?',
    answer: 'When the LOI partner site visit completes. We are explicit on this page that every number above is a design target until then — fabricating a customer ROI quote at this stage would not survive the bar guidance we are designing the product to satisfy in the first place.',
  },
]
