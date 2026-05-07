import {
  Cpu, Lock, FileCheck,
  Crown, UserPlus, Receipt, Megaphone,
  Shield, Eye, Server,
} from 'lucide-react'

export const NAV_ITEMS = [
  { label: 'On-Device', href: '#problem' },
  { label: 'Burner', href: '#burner' },
  { label: 'Your Team', href: '#team' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'FAQ', href: '#faq' },
]

export const PAIN_POINTS = [
  {
    icon: Cpu,
    stat: 'Mac',
    title: 'Client work runs on the lawyer\'s machine',
    description: 'Intake, billing, conflict checks, document review — the agent does this work locally on the partner\'s Mac. The data never leaves the building for the things that don\'t need a cloud model.',
  },
  {
    icon: Lock,
    stat: 'Strip',
    title: 'Identifying info stripped before any cloud call',
    description: 'When a cloud model is the right tool for a step, names, numbers, and matter identifiers are replaced on-device with placeholders before the prompt leaves. The partner sees and approves the redacted prompt. The cloud model never sees the original.',
  },
  {
    icon: FileCheck,
    stat: 'Log',
    title: 'Every step is on the record',
    description: 'Every prompt sent, every document read, every approval granted is logged with a trace ID. The disciplinary committee asks how you supervised your AI; you hand them the export.',
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
    autonomy: 'Local',
    autonomyDescription: 'Runs on your Mac. Reports to you. Escalates judgment calls before acting.',
  },
  {
    icon: UserPlus,
    role: 'Intake Agent',
    description: 'Triage, conflict check, consult booking',
    tasks: [
      'Reads the incoming PDF on your machine; nothing leaves before you approve',
      'Drafts the engagement letter locally with the actual matter\'s details',
      'Prepares a one-page summary before the call, not after',
    ],
    autonomy: 'Local + approval-gated',
    autonomyDescription: 'Drafts on-device. Nothing reaches a prospect without your sign-off.',
  },
  {
    icon: Receipt,
    role: 'Billing Agent',
    description: 'Time capture, narrative drafting, collections',
    tasks: [
      'Drafts billable-hour entries from your calendar and mail edits — locally',
      'Writes narratives in your phrasing; the model sees redacted matter labels',
      'Sends follow-ups on aged invoices in your voice, after you approve',
    ],
    autonomy: 'Local + approval-gated',
    autonomyDescription: 'Drafts on-device. You approve every send.',
  },
  {
    icon: Megaphone,
    role: 'Practice Agent',
    description: 'Document drafting, discovery review, marketing',
    tasks: [
      'Drafts from templates with citations the agent verifies before showing you',
      'Sorts incoming discovery on your machine with privilege flags and a privilege log',
      'Drafts referral check-ins that don\'t sound like a newsletter',
    ],
    autonomy: 'Local + approval-gated',
    autonomyDescription: 'Drafts on-device. You sign before anything leaves the firm.',
  },
]

export const HOW_IT_WORKS_STEPS = [
  {
    number: '01',
    title: 'The agent runs on your Mac',
    description: 'Install on the partner\'s machine. Client documents are processed locally. Matter data lives in a per-matter encrypted workspace, not in someone else\'s database.',
  },
  {
    number: '02',
    title: 'Cloud calls are explicit, redacted, and approved',
    description: 'When a step genuinely needs a frontier cloud model, identifying information is replaced with placeholders on-device. You see the redacted prompt before it leaves. The cloud model never sees client identifiers, and never trains on your data.',
  },
  {
    number: '03',
    title: 'Every step is logged for the bar',
    description: 'Trace IDs on every action. Exportable supervision log. The conversation with your IT person and the bar disciplinary committee is short because the answer to "what left the firm" is on a screen.',
  },
]

export const TRUST_POINTS = [
  {
    icon: Cpu,
    title: 'Local-first, not cloud-first',
    description: 'The default for client work is on-device. Cloud is a deliberate, redacted, approved escalation — not the path of least resistance.',
  },
  {
    icon: Shield,
    title: 'No training on your data',
    description: 'Contractual no-training term with every model provider used in a redacted call. The data we send is already redacted, and the contract is on file.',
  },
  {
    icon: Lock,
    title: 'Per-matter cryptographic isolation',
    description: 'The agent working on Acme matters cannot read Smith files. Each matter has its own workspace and its own keys, on the same machine.',
  },
  {
    icon: Eye,
    title: 'Approval-gated by design',
    description: 'No autopilot. Every email, filing, and follow-up sits in a drafts queue until the partner reads and approves it. There is no path that bypasses the gate.',
  },
  {
    icon: FileCheck,
    title: 'Complete supervision log',
    description: 'Every prompt, every document read, every draft, every approval. Exportable. The bar will ask; the answer is the file.',
  },
  {
    icon: Server,
    title: 'No telemetry on client material',
    description: 'We don\'t collect prompts. We don\'t collect outputs. We don\'t collect document contents. We log usage metadata to a degree the partner controls.',
  },
]

export const STATS = [
  {
    value: 'On-device',
    label: 'is the default for client work. Intake, billing, conflict checks, document review run on the partner\'s Mac without leaving the firm.',
    source: 'Vision doc §7C, On-Device / Off-the-Record',
  },
  {
    value: 'Redacted',
    label: 'before any cloud call. Names, numbers, and matter identifiers are replaced on-device. The partner approves the redacted prompt before it leaves.',
    source: 'Vision doc §4, technical moat',
  },
  {
    value: 'No training',
    label: 'on your firm\'s data. Contractual term with every cloud provider used in a redacted call. The contract is on file.',
    source: 'Vision doc §11, deliverables',
  },
  {
    value: 'Logged',
    label: 'with trace IDs the partner can hand to the bar disciplinary committee. The answer to "what left the firm" is one export away.',
    source: 'Vision doc §6, marquee toil',
  },
]

export const FAQS = [
  {
    question: 'A subpoena lands on us. What do you have on my client?',
    answer: 'Nothing. The agent that ran their matter no longer exists. We never had the prompts, never had the documents, never had the work product — those lived on your Mac the whole time. We can\'t produce what we don\'t hold. The audit log is yours, on your machine, and you decide what to disclose.',
  },
  {
    question: 'A breach happens upstream — the model vendor gets hacked. What leaks?',
    answer: 'For local-only matters: nothing of yours. For matters that authorized a cloud step: the stripped, de-identified payload that crossed the boundary, captured in your local audit. PII never crossed. The breach exposes a payload that doesn\'t identify anyone, and your IT or outside counsel can verify the property in the OSS-evaluable runtime.',
  },
  {
    question: 'What actually runs on the Mac, and what goes to the cloud?',
    answer: 'Day-to-day client work — reading documents, drafting time entries, processing intake forms, conflict checks — runs locally on Apple Silicon. Cloud frontier models are reserved for the small set of steps that genuinely need one (e.g. complex argument drafting). Even then, identifying information is stripped on-device first, and the partner sees and approves the redacted prompt before it leaves.',
  },
  {
    question: 'How is this different from "we encrypt your data in the cloud"?',
    answer: 'Most legal-AI products send your client documents to their servers and tell you it\'s encrypted at rest. That doesn\'t answer the bar\'s question — which is whether confidential client information left the firm without informed consent. Our default answer is "no, the document didn\'t leave."',
  },
  {
    question: 'Will my model provider train on my client data?',
    answer: 'No. We use a contractual no-training term with every model provider that handles a redacted prompt from your firm. We can share the contract on request. And the prompt itself is redacted, so even if a provider violated the term, what they\'d have is placeholder text.',
  },
  {
    question: 'What about ABA Model Rules 1.6 and 5.3?',
    answer: 'The product is designed against 1.1 (competence), 1.6 (confidentiality), and 5.3 (supervision of nonlawyer assistants). Every action is approval-gated; every approval is logged with a trace ID; the supervision record is exportable on demand.',
  },
  {
    question: 'How is this different from Harvey, Legora, or CoCounsel?',
    answer: 'They\'re sized for AmLaw 200 — IT teams, procurement, $30K/seat budgets, BigLaw workflows on the vendor\'s cloud. We\'re sized for the owner-operator partner of a 1–10 attorney firm who can\'t outsource their security architecture to a CISO. Different buyer, different threat model, different defaults.',
  },
  {
    question: 'Do I need an IT department to set this up?',
    answer: 'No. The product is built for owner-operator firms that don\'t have one. The partner installs on their Mac, describes how their practice runs, and the agent gets to work. An afternoon for a solo, a day or two for a 10-attorney firm.',
  },
  {
    question: 'What if the Mac is lost or stolen?',
    answer: 'Per-matter workspaces are encrypted at rest with keys tied to FileVault and the partner\'s authentication. We document the recovery procedure for both the partner and their malpractice carrier; it\'s designed to be the same conversation a paper-records office would have if a filing cabinet walked off.',
  },
]
