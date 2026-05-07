import {
  Clock, TrendingDown, BarChart3,
  Crown, UserPlus, Receipt, Megaphone,
  Shield, Eye, FileCheck, Server,
} from 'lucide-react'

export const NAV_ITEMS = [
  { label: 'The Toil', href: '#problem' },
  { label: 'Burner', href: '#burner' },
  { label: 'Your Team', href: '#team' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'FAQ', href: '#faq' },
]

export const PAIN_POINTS = [
  {
    icon: FileCheck,
    stat: 'Intake',
    title: 'Every new client takes a half-hour you don\'t have',
    description: 'A prospect emails you a 12-page PDF. You read it. You run a conflict check. You set up the matter in Clio. You propose a consult slot. Forty-five minutes you weren\'t billing for. Times every new client this month.',
  },
  {
    icon: Receipt,
    stat: 'Billing',
    title: 'Time entries written from memory at 9pm',
    description: 'You meant to capture them as you worked. You didn\'t. Now you\'re reconstructing your Tuesday from your calendar, your sent folder, and a draft you remember editing. The narratives are thin. The hours round down. [Placeholder] hours/week recovered when this is drafted for you.',
  },
  {
    icon: Clock,
    stat: 'Toil',
    title: 'The 90 minutes a day that isn\'t practicing law',
    description: 'Conflict checks. Engagement letter follow-up. Calendar coordination. The same eight questions every prospect asks. The work is real; none of it is the work you trained to do.',
  },
]

export const TEAM_MEMBERS = [
  {
    icon: Crown,
    role: 'Head Partner',
    description: 'Operations, scheduling, matter management',
    tasks: [
      'Daily deadline brief — what\'s on fire today, what\'s on fire next week',
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
    title: 'Tell it how your firm actually runs',
    description: 'You describe your intake process, your billing cadence, your conflict-check rules — in plain English, the way you\'d brief a new paralegal on their first day. No code, no templates to fill out.',
  },
  {
    number: '02',
    title: 'The agent does the toil',
    description: 'Intake forms get processed. Billing entries get drafted. Conflict checks get run. Matter folders get set up. The 90 minutes a day that isn\'t practicing law happens without you doing it.',
  },
  {
    number: '03',
    title: 'You review, sign, and practice law',
    description: 'Nothing leaves the firm without your sign-off. Every output sounds like you wrote it. Every action is logged for the supervision record. You get the time back; the firm gets the audit trail the bar will eventually ask about.',
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
    value: '~90s',
    label: 'design target for end-to-end client intake on Apple Silicon: incoming PDF → safety scan → conflict check → matter created → consult slot proposed → one-page summary for review.',
    source: 'Vision doc §6, marquee toil. Measured number lands with the LOI partner observation.',
  },
  {
    value: '5–10 hrs',
    label: 'design target for billing-time recovery per attorney per week, from automated draft entries with attorney approval.',
    source: 'Vision doc §6. Measured against the LOI partner\'s baseline once the observation lands.',
  },
  {
    value: '[TBD]',
    label: 'observed time-on-task for the LOI partner doing client intake by hand. Replaces this placeholder once Darren completes the 90-minute observation per vision doc §14.',
    source: null,
  },
  {
    value: '100%',
    label: 'of agent actions logged with the prompt seen, the documents read, the draft produced, and the approval that released it. The supervision record is the product, not a bolt-on.',
    source: null,
  },
]

export const FAQS = [
  {
    question: 'A subpoena lands. What do you have on my client?',
    answer: 'Nothing. The agent that ran their matter no longer exists. We never had the prompts, never had the documents, never had the work product — those lived on your Mac the whole time. We can\'t produce what we don\'t hold.',
  },
  {
    question: 'How is "burner" different from "we don\'t store your data"?',
    answer: 'That promise is operational; it can be violated by a config flag, a subpoena, or a breach. Burner is structural. There is no central system holding the data because there is no central system. The agent literally does not exist after the matter closes.',
  },
  {
    question: 'Doesn\'t the agent need memory to be useful?',
    answer: 'It needs context to be useful. Memory is one way to get context; loading the matter file at the start of each session is another. Burner agents do the latter. You hand them the matter, they work it, they\'re gone. The lawyer is the continuity; the agent is fungible.',
  },
  {
    question: 'Do I need an IT department to set this up?',
    answer: 'No. The product is built for owner-operator firms that don\'t have one. You describe how your practice runs — intake, billing, conflict checks — in plain English. If you can brief a new paralegal on day one, you can set this up. An afternoon for a solo, a day or two for a 10-attorney firm.',
  },
  {
    question: 'How is this different from Clio or MyCase?',
    answer: 'Clio and MyCase are practice-management systems — they\'re where your matters live. Keep them. ClaudeFirm is the agent layer that does the work across them: drafting the intake summary, drafting the billing entries, drafting the conflict-check memo. We integrate; we don\'t replace.',
  },
  {
    question: 'How is this different from Harvey, Legora, or CoCounsel?',
    answer: 'They\'re sized for AmLaw 200 — in-house IT teams, procurement processes, $30K/seat budgets, BigLaw-shaped workflows like discovery review and M&A diligence. We\'re sized for the owner-operator partner of a 1–10 attorney firm. Different buyer, different price, different toil.',
  },
  {
    question: 'Will my clients know they\'re talking to AI?',
    answer: 'They\'ll get a faster, more organized firm — because every substantive communication still goes out under your name, in your voice, after you read it and signed it. The agent drafts; you ship. Clients experience your judgment.',
  },
  {
    question: 'What about client confidentiality?',
    answer: 'Client work stays on your Mac by default. When a task needs a cloud model for capability reasons, identifying information is stripped on your machine first, you authorize the step, and the audit log records what was stripped, where it went, and what came back. Designed against ABA Model Rules 1.1, 1.6, and 5.3.',
  },
  {
    question: 'What if a malicious document tries to trick the agent?',
    answer: 'Two safeguards run automatically. Incoming documents are scanned for hidden content the human eye won\'t catch but an agent would act on. And every output goes through your approval gate before anything leaves the firm. Even a document that successfully tricks the model has nowhere to send the result.',
  },
  {
    question: 'Does it get better the longer we use it?',
    answer: 'Yes. The agent learns your phrasing, your judges, your opposing counsel\'s patterns, the way your firm handles its specific practice areas. Month one is helpful. Month twelve is a paralegal who\'s been with the firm for a year.',
  },
]
