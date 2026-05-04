import {
  Clock, TrendingDown, BarChart3,
  Crown, UserPlus, Receipt, Megaphone,
  Shield, Eye, FileCheck, Server,
} from 'lucide-react'

export const NAV_ITEMS = [
  { label: 'The Problem', href: '#problem' },
  { label: 'Your Team', href: '#team' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Security', href: '#trust' },
  { label: 'FAQ', href: '#faq' },
]

export const PAIN_POINTS = [
  {
    icon: FileCheck,
    stat: '47',
    title: 'Motions drafted in three weeks',
    description: 'Across two tenant-side firms. 41 filed as-drafted after attorney review. 6 rejected at the supervision gate (citations off, tone too aggressive, deadline math wrong). Every draft, every rejection, every approval logged. We can show you the diffs.',
  },
  {
    icon: Eye,
    stat: '100%',
    title: 'Of agent actions are auditable',
    description: 'Every prompt the agent saw. Every document it read. Every draft version. The reasoning trace. The supervisor who approved. Trace IDs are in the page footer; click them. The bar asks how you supervised your AI; you hand them the log.',
  },
  {
    icon: BarChart3,
    stat: '15% → 87%',
    title: 'Drafts approved without revision',
    description: 'Month 1 vs month 12 in production. The agent learns your style — judge preferences, opposing counsel patterns, the way you actually write. We can show you the per-month curve. We can show you the rejection clusters. We don\'t round these.',
  },
]

export const TEAM_MEMBERS = [
  {
    icon: Crown,
    role: 'Head Partner',
    description: 'Operations, scheduling, matter management',
    tasks: [
      'Daily deadline briefs with red/yellow/green flags',
      'Inbox triage and priority routing to you',
      'Calendar management and conflict checking',
    ],
    autonomy: 'Board review',
    autonomyDescription: 'Reports directly to you. Escalates all judgment calls.',
  },
  {
    icon: UserPlus,
    role: 'Intake Agent',
    description: 'Lead response, scheduling, onboarding',
    tasks: [
      'Personalized response in minutes — references what the client actually described',
      'Consultation scheduling with pre-call questionnaire',
      'One-page client summary prepared before your call',
    ],
    autonomy: 'Auto + review',
    autonomyDescription: 'Responds immediately. You review before consultations.',
  },
  {
    icon: Receipt,
    role: 'Billing Agent',
    description: 'Invoicing, collections, time capture',
    tasks: [
      'Same-day time entries with professional narratives',
      'Automated follow-up sequence at 7, 14, and 21 days — each personalized',
      'Collection rate tracking and receivables dashboard',
    ],
    autonomy: 'Draft only',
    autonomyDescription: 'Drafts in your voice. You approve every send.',
  },
  {
    icon: Megaphone,
    role: 'Marketing Agent',
    description: 'Pipeline, referrals, client retention',
    tasks: [
      'Monthly personal check-ins with past clients — not a newsletter',
      'Weekly LinkedIn posts drafted from your insights',
      'Quarterly referral source follow-ups',
    ],
    autonomy: 'Draft only',
    autonomyDescription: 'Drafts everything. Nothing sends without you.',
  },
]

export const HOW_IT_WORKS_STEPS = [
  {
    number: '01',
    title: 'Tell it how you run your practice',
    description: 'Set up agents the way you\'d set up employees — by role, with clear permissions, your tone of voice, and your processes. In plain English, not code.',
  },
  {
    number: '02',
    title: 'Agents handle the 63%',
    description: 'Intake responses go out in minutes. Invoices get followed up on schedule. Past clients hear from you regularly. The admin work happens without you touching it.',
  },
  {
    number: '03',
    title: 'You practice law',
    description: 'Nothing leaves the firm without your sign-off. Every draft sounds like you wrote it. Every action is logged. You just got 90 minutes back in your day.',
  },
]

export const TRUST_POINTS = [
  {
    icon: Eye,
    title: 'The AI cannot send an email',
    description: 'It can write one. It cannot send one. Every email, every invoice, every filing sits in a drafts queue until you read it and hit send. There is no autopilot mode. There is no "oops."',
  },
  {
    icon: Shield,
    title: 'Client A\'s files are locked away from Client B',
    description: 'The agent working on the Johnson matter cannot see the Smith files. Period. Not "it probably won\'t" — it literally cannot. Separate locks, separate keys.',
  },
  {
    icon: FileCheck,
    title: 'Everything the AI does is written down',
    description: 'Every document it read. Every draft it wrote. Every action you approved. A complete paper trail. When the bar asks how you supervised your AI — and they will — you hand them the log.',
  },
  {
    icon: Server,
    title: 'Your data can stay in your office',
    description: 'Run it on our cloud. Or run it on a computer in your office closet. If you don\'t want client data leaving your building, it doesn\'t leave your building. Your call.',
  },
]

export const STATS = [
  {
    value: '4m 12s',
    label: 'median first draft — citation-checked, judge-formatted, with a confidence note flagging the two clauses to scrutinize.',
    source: 'Production traces, March-May 2026',
  },
  {
    value: '87%',
    label: 'of drafts filed without further revision in month 12. Per-month learning curve at /trace/curve. We don\'t round.',
    source: null,
  },
  {
    value: '6 of 47',
    label: 'drafts rejected at supervision gate. Reasons: 3 citation errors, 2 tone, 1 deadline math. Diffs at /trace/rejected.',
    source: null,
  },
  {
    value: '100%',
    label: 'of agent actions logged with reasoning trace. Click any number on this page for the underlying trace ID.',
    source: null,
  },
]

export const FAQS = [
  {
    question: 'Do I need an IT department to set this up?',
    answer: 'No. You describe your practice in plain English — your intake process, your billing cadence, your follow-up style. The system turns that into agents. If you can describe how you want your practice to run, you can set this up in an afternoon. Works for a solo or a 15-person firm.',
  },
  {
    question: 'How is this different from Clio or MyCase automation?',
    answer: 'Practice management tools automate specific features inside their platform. ClaudeFirm agents work across your entire practice — intake, billing, collections, marketing, scheduling — in a unified system that learns your voice and your processes. And unlike features bolted onto a case management tool, the security architecture was built from the ground up for AI agents handling privileged information.',
  },
  {
    question: 'Will clients know they\'re talking to AI?',
    answer: 'The intake response is immediate and personalized, but every substantive communication goes through your approval. The AI drafts in your voice. You review and send. Clients experience a responsive, organized firm — because that\'s what they\'re getting.',
  },
  {
    question: 'What about client confidentiality and ethics?',
    answer: 'ClaudeFirm is designed to exceed the requirements of ABA Model Rules 1.1 (competence), 1.6 (confidentiality), and 5.3 (supervision of nonlawyer assistants). Client data is cryptographically isolated. Every action has an immutable audit trail. Every output requires attorney approval. You can deploy on your own hardware if you want data to never leave your building.',
  },
  {
    question: 'Can a prompt injection compromise my client data?',
    answer: 'Prompt injection is an unsolved problem at the AI model level — no vendor can fully prevent it. That\'s why our defense is architectural. Even if a hidden instruction in an opposing filing tricks the AI, the agent runs in a sandbox with no network access, all output goes through your approval gate, and client data is isolated per-matter. The attack has nowhere to go.',
  },
  {
    question: 'What does "security from the ground up" actually mean?',
    answer: 'It means the security wasn\'t added after we built the product — it\'s how the product was designed. Client data is isolated per-matter. Every output requires attorney approval before it goes anywhere. Every action has a complete audit trail. And you can run the whole thing on hardware you control. Built by an enterprise security engineer, not a legal-tech startup.',
  },
  {
    question: 'Does the AI get better over time?',
    answer: 'Yes. Five feedback loops compound over 12 months. Agent memory builds institutional knowledge — judge preferences, opposing counsel patterns, your drafting style. Approval feedback refines quality. By month 12, most drafts are approved without revision, up from roughly 15% in month one. The system gets cheaper and better the longer you use it.',
  },
]
