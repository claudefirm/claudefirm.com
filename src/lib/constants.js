import {
  Clock, TrendingDown, AlertTriangle,
  UserCheck, FileText, PhoneIncoming, Receipt,
  Shield, Eye, Lock, FileCheck, MessageSquare, Scale,
} from 'lucide-react'

export const NAV_ITEMS = [
  { label: 'The Problem', href: '#problem' },
  { label: 'Your Team', href: '#team' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Trust', href: '#trust' },
  { label: 'FAQ', href: '#faq' },
]

export const PAIN_POINTS = [
  {
    icon: Clock,
    stat: '45–60 min',
    title: 'Per new client intake',
    description: '7 steps across 5 systems — ActionStep, SharePoint, Teams, Zoom, LawPay. Every single time.',
  },
  {
    icon: TrendingDown,
    stat: '80–90',
    title: 'Active matters to track',
    description: 'Court deadlines, client follow-ups, document requests. One missed date and you\'re explaining it to a judge.',
  },
  {
    icon: AlertTriangle,
    stat: '11 PM',
    title: 'When billing actually happens',
    description: 'Time entries, invoice reviews, collections follow-up. The work that keeps the lights on — done after hours.',
  },
]

export const TEAM_MEMBERS = [
  {
    icon: UserCheck,
    role: 'Legal Assistant',
    description: 'Intake, filing, calendar management, follow-up',
    tasks: [
      'Opens new matter files across all systems',
      'Tracks and diaries court deadlines',
      'Drafts routine correspondence for your review',
    ],
    autonomy: 'External review',
    autonomyDescription: 'Runs internal tasks autonomously. You approve anything going to clients or courts.',
  },
  {
    icon: FileText,
    role: 'Associate Attorney',
    description: 'Drafting, research, document review',
    tasks: [
      'First-pass contract review with risk flags',
      'Legal research with verified citations',
      'Document drafting in your voice and format',
    ],
    autonomy: 'Full review',
    autonomyDescription: 'You approve each action before it executes.',
  },
  {
    icon: PhoneIncoming,
    role: 'Intake Coordinator',
    description: 'New client onboarding, conflict checks',
    tasks: [
      'Runs conflict checks on new prospects',
      'Generates engagement letters and fee agreements',
      'Builds initial document request lists',
    ],
    autonomy: 'External review',
    autonomyDescription: 'Runs internal tasks autonomously. You approve anything going to clients or courts.',
  },
  {
    icon: Receipt,
    role: 'Billing Coordinator',
    description: 'Time capture, invoicing, collections',
    tasks: [
      'Captures time entries with professional narratives',
      'Prepares invoices for your review',
      'Drafts collections follow-ups on aging receivables',
    ],
    autonomy: 'Draft-only',
    autonomyDescription: 'Produces drafts and reports. You execute.',
  },
]

export const HOW_IT_WORKS_STEPS = [
  {
    number: '01',
    title: 'Define your firm\'s procedures',
    description: 'Tell your agents how your firm operates — your matter types, your filing conventions, your communication standards. In plain English, not code.',
  },
  {
    number: '02',
    title: 'Your team handles the work',
    description: 'Agents run your procedures — opening files, tracking deadlines, drafting documents, capturing time. With human review built into every step.',
  },
  {
    number: '03',
    title: 'You review and approve',
    description: 'Everything lands in your notification inbox. Review drafts, approve actions, delegate follow-ups. You stay in control without doing the busywork.',
  },
]

export const TRUST_POINTS = [
  {
    icon: Eye,
    title: 'Every action is logged',
    description: 'Full audit trail — timestamp, matter ID, input, output, and your review status. If a bar association ever asks, you have the receipts.',
  },
  {
    icon: MessageSquare,
    title: 'Nothing goes out without you',
    description: 'Emails are drafted, not sent. Filings are prepared, not submitted. Your agents don\'t have a bar number and they know it.',
  },
  {
    icon: Lock,
    title: 'Your data stays yours',
    description: 'No model training on your documents. Matter segregation. Attorney-client privilege is architecturally respected, not just policy.',
  },
  {
    icon: FileCheck,
    title: 'Your agents ask, not guess',
    description: 'Uncertain about a jurisdiction? Missing a document? Your agents flag it and ask you — they don\'t fill in the blanks and hope for the best.',
  },
  {
    icon: Shield,
    title: 'Format compliance built in',
    description: 'Court rules, firm letterhead, document standards. Every draft meets the formatting requirements before it reaches your desk.',
  },
  {
    icon: Scale,
    title: 'Every dollar is tracked',
    description: 'Budget limits, spend approvals, billing transparency. No surprise costs, no runaway agents racking up charges.',
  },
]

export const STATS = [
  {
    value: '45 min',
    label: 'saved per new client intake',
    source: null,
  },
  {
    value: '5–10 hrs',
    label: 'reclaimed per week at a 15-person firm',
    source: null,
  },
  {
    value: '$27K',
    label: 'in recovered billable time per attorney per year',
    source: 'Clio 2025 Legal Trends Report',
  },
  {
    value: '80+',
    label: 'active matters tracked without a single missed deadline',
    source: null,
  },
]

export const FAQS = [
  {
    question: 'Will it hallucinate in a legal document?',
    answer: 'Agents flag uncertainty and ask clarifying questions rather than guessing. All drafts go through attorney review before any external use. Every cited authority is verified — unverified citations are flagged, not hidden. The lawyers who got sanctioned were using AI without guardrails. ClaudeFirm is all guardrails.',
  },
  {
    question: 'Who sees my client data?',
    answer: 'Your data stays in your instance. No model training on your documents. Security architecture designed with SOC 2 principles in mind. Attorney-client privilege is non-negotiable — it\'s enforced architecturally, not just by policy.',
  },
  {
    question: 'Can it file something without my approval?',
    answer: 'No. All external communications and filings require attorney approval. Internal operations — filing, routing, calendar management — run autonomously with full audit trails. Your agents draft. You send.',
  },
  {
    question: 'Does it work with ActionStep / Clio / SharePoint?',
    answer: 'Integrations are in development. Launch priority: Outlook, Teams, SharePoint. Practice management integrations (ActionStep, Clio, PracticePanther) are on the roadmap. The system is designed to work with your existing stack, not replace it.',
  },
  {
    question: 'Will this replace my staff?',
    answer: 'No. It replaces the work that makes you wonder whether you need more staff. First-pass review, initial drafts, research starting points, time entry capture, document formatting. Your paralegal gets upgraded too — they supervise the same AI output you do. The humans do higher-value work.',
  },
  {
    question: 'Is this ethical? What about my bar obligations?',
    answer: 'The same framework that lets you use Dropbox, Clio, and Westlaw applies. ABA guidance treats AI tools as third-party technology providers. ClaudeFirm\'s safety architecture produces an audit trail that demonstrates responsible use — the kind of documentation a bar association actually wants to see.',
  },
]
