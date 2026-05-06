import {
  Clock, TrendingDown, BarChart3,
  Crown, UserPlus, Receipt, Megaphone,
  Shield, Eye, FileCheck, Server,
} from 'lucide-react'

export const NAV_ITEMS = [
  { label: 'The Dichotomy', href: '#problem' },
  { label: 'Your Team', href: '#team' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Safeguards', href: '#trust' },
  { label: 'FAQ', href: '#faq' },
]

export const PAIN_POINTS = [
  {
    icon: Clock,
    stat: '63%',
    title: 'Of your week is administrative toil',
    description: 'Intake forms, conflict checks, billing entries drafted from memory at 9pm. The work is real; none of it is the work you trained to do. Handcuffed chatbots can\'t handle it. Reckless free agents can\'t be trusted with it.',
  },
  {
    icon: TrendingDown,
    stat: 'Bar',
    title: 'Discipline & risk lawyers already take',
    description: 'You see your colleagues pasting confidential documents into ChatGPT despite firm policy and bar guidance. They\'re taking the risk because the safe alternatives don\'t get the work done. That behavior is the strongest possible demand signal.',
  },
  {
    icon: BarChart3,
    stat: 'Both',
    title: 'Bad options today',
    description: 'Sandboxed chatbots save no time. Ungoverned free agents work once but break scary the second time. No current product gives small firms capable agents with safeguards built in — running on their own machine.',
  },
]

export const TEAM_MEMBERS = [
  {
    icon: Crown,
    role: 'Head Partner',
    description: 'Operations, scheduling, matter management',
    tasks: [
      'Daily deadline brief with judgment calls flagged before they fire',
      'Inbox triage that surfaces the three things that actually need your eyes',
      'Calendar coordination and conflict checking so you don\'t double-book',
    ],
    autonomy: 'Approval-gated',
    autonomyDescription: 'Reports to you. Escalates judgment calls before acting.',
  },
  {
    icon: UserPlus,
    role: 'Intake Agent',
    description: 'Triage, conflict check, consult booking',
    tasks: [
      'Reads the incoming PDF; flags privileged material the human eye misses',
      'Drafts the engagement letter with the actual matter\'s details',
      'Prepares a one-page summary before the call, not after',
    ],
    autonomy: 'Approval-gated',
    autonomyDescription: 'Drafts everything. Nothing reaches a prospect without your sign-off.',
  },
  {
    icon: Receipt,
    role: 'Billing Agent',
    description: 'Time capture, narrative drafting, collections',
    tasks: [
      'Drafts billable-hour entries from your calendar and mail edits',
      'Writes narratives in your phrasing, not legal-tech filler',
      'Sends follow-ups on aged invoices — in your voice, after you approve',
    ],
    autonomy: 'Approval-gated',
    autonomyDescription: 'Drafts in your voice. You approve every send.',
  },
  {
    icon: Megaphone,
    role: 'Practice Agent',
    description: 'Document drafting, discovery review, marketing',
    tasks: [
      'Drafts from templates with the citations and tone that match your judges',
      'Sorts incoming discovery with privilege flags and privilege logs',
      'Drafts referral check-ins that don\'t sound like a newsletter',
    ],
    autonomy: 'Approval-gated',
    autonomyDescription: 'Drafts everything. You sign before anything leaves the firm.',
  },
]

export const HOW_IT_WORKS_STEPS = [
  {
    number: '01',
    title: 'They tell us what they\'re already doing',
    description: 'Every small-firm partner already runs a practice with specific processes: intake responses, billing follow-ups, conflict-check rules. We don\'t ask them to change how they work; we ask them to describe it in plain English.',
  },
  {
    number: '02',
    title: 'The agent does the toil they already hate',
    description: 'Intake forms get processed in minutes instead of hours. Billing entries get drafted from your calendar instead of memory. Aged invoices get followed up automatically instead of being forgotten.',
  },
  {
    number: '03',
    title: 'You review and sign — now the work gets done',
    description: 'Nothing leaves without your approval. Every output sounds like you wrote it. The supervision record is complete for when the bar eventually asks how you supervised your AI.',
  },
]

export const TRUST_POINTS = [
  {
    icon: Eye,
    title: 'The AI cannot take unsupervised action',
    description: 'It can draft. It cannot send. Every email, invoice, filing sits in a drafts queue until you read and approve. No autopilot. No "oops".',
  },
  {
    icon: Shield,
    title: 'Per-matter isolation',
    description: 'The agent working on Acme matters cannot see Smith files. Not "shouldn\'t" — cannot. Each matter has its own workspace and keys.',
  },
  {
    icon: FileCheck,
    title: 'Complete supervision log',
    description: 'Every prompt, every document read, every draft produced, every approval granted. The bar will ask for this; you hand them the complete paper trail.',
  },
  {
    icon: Server,
    title: 'Runs on the lawyer\'s machine',
    description: 'Client work stays on the Mac by default. When cloud AI is needed, identifying information is stripped on your machine first — then you authorize the step.',
  },
]

export const STATS = [
  {
    value: 'Intake',
    label: '30–60 minutes of paralegal work compressed into 90 seconds. The agent works faster than the human because it doesn\'t get tired or distracted.',
    source: 'Vision doc §6, marquee toil',
  },
  {
    value: 'Billable',
    label: '5–10 hours per attorney per week recovered from time-capture. At $300/hour, that is $1,500–$3,000 in recaptured capacity.',
    source: 'Vision doc §6, marquee toil',
  },
  {
    value: 'LOI',
    label: 'in active negotiation with a design-partner firm. Behavioral evidence: lawyers already taking risk with ChatGPT despite firm policy.',
    source: 'Vision doc §9, demand evidence',
  },
  {
    value: 'Third',
    label: 'way. The first way is handcuffed chatbots. The second way is reckless free agents. The third way is capable agents with safeguards built in.',
    source: 'Vision doc §3, the false dichotomy',
  },
]

export const FAQS = [
  {
    question: 'Why would a lawyer use ChatGPT if it\'s risky?',
    answer: 'Because the safe alternatives don\'t get the work done. Handcuffed chatbots can\'t process intake forms or draft time entries. Reckless free agents can, so lawyers take the risk. The demand signal isn\'t what they say in surveys; it\'s what they actually do.',
  },
  {
    question: 'How is ClaudeFirm different from both?',
    answer: 'It\'s the third way: capable enough to handle the toil lawyers want to offload, with safeguards built in. It runs on the lawyer\'s Mac, not someone else\'s server. Every output requires approval. Every action is logged.',
  },
  {
    question: 'Do I need an IT department to set this up?',
    answer: 'No. The product is built for owner-operator firms that don\'t have one. You describe how your practice runs — intake, billing, conflict checks — in plain English. An afternoon for a solo, a day or two for a 10-attorney firm.',
  },
  {
    question: 'How is this different from Harvey, Legora, or CoCounsel?',
    answer: 'They\'re sized for AmLaw 200 — IT teams, procurement processes, $30K/seat budgets, BigLaw workflows. We\'re sized for the owner-operator partner of a 1–10 attorney firm. Different buyer, different price, different toil.',
  },
  {
    question: 'How is this different from Clio or MyCase?',
    answer: 'Clio and MyCase are case management tools. Keep them. ClaudeFirm is the agent layer that does the work across them. We integrate; we don\'t replace.',
  },
  {
    question: 'What about client confidentiality?',
    answer: 'Client work stays on your machine by default. When cloud AI is needed, identifying information is stripped on your machine first, you authorize the step, and the audit log records everything. Designed against ABA Model Rules 1.1, 1.6, and 5.3.',
  },
  {
    question: 'Will this work without the partner getting overwhelmed?',
    answer: 'Every draft waits for your approval. The agent is a paralegal that never leaves the office — it does the toil, you review the work. The supervision record is built-in; you don\'t have to remember to create it.',
  },
]
