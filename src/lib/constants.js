import {
  ShieldAlert, FileWarning, Send,
  Crown, Search, FileText, Receipt,
  Shield, Eye, Lock, Layers, DollarSign, Server,
} from 'lucide-react'

export const NAV_ITEMS = [
  { label: 'The Risk', href: '#problem' },
  { label: 'Your Team', href: '#team' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Security', href: '#trust' },
  { label: 'FAQ', href: '#faq' },
]

export const PAIN_POINTS = [
  {
    icon: ShieldAlert,
    stat: 'Leg 1',
    title: 'Access to private data',
    description: 'Client files, case strategy, billing records, privileged communications. Your AI needs this data to be useful — but it\'s the most sensitive information in the civilian economy.',
  },
  {
    icon: FileWarning,
    stat: 'Leg 2',
    title: 'Exposure to untrusted content',
    description: 'Opposing counsel\'s motions, court filings, client-forwarded emails. Every document from outside your firm is a potential attack vector — with hidden instructions invisible to human eyes.',
  },
  {
    icon: Send,
    stat: 'Leg 3',
    title: 'Ability to communicate externally',
    description: 'Sending emails, filing documents, updating case management systems. Every output channel is a potential exfiltration path if the AI has been compromised.',
  },
]

export const TEAM_MEMBERS = [
  {
    icon: Crown,
    role: 'Head Partner',
    description: 'Operations, deadlines, matter management',
    tasks: [
      'Daily deadline briefs with red/yellow/green flags',
      'Matter portfolio review across all active cases',
      'Inbox triage and priority routing to attorney',
    ],
    autonomy: 'Board review',
    autonomyDescription: 'Reports directly to you. Escalates all legal judgment calls.',
  },
  {
    icon: Search,
    role: 'Research Agent',
    description: 'Case law, statutes, precedent analysis',
    tasks: [
      'Legal research with verified citations',
      'Jurisdictional requirement analysis',
      'Opposing counsel pattern recognition',
    ],
    autonomy: 'Full review',
    autonomyDescription: 'Every citation verified. You approve before use.',
  },
  {
    icon: FileText,
    role: 'Drafting Agent',
    description: 'Motions, briefs, correspondence',
    tasks: [
      'Document drafting in your voice and format',
      'Court rule compliance checking',
      'Client communication drafts queued for your send',
    ],
    autonomy: 'Draft only',
    autonomyDescription: 'Everything is DRAFT. You remove the watermark.',
  },
  {
    icon: Receipt,
    role: 'Billing Agent',
    description: 'Time capture, invoicing, collections',
    tasks: [
      'Same-day time entries with professional narratives',
      'Lost time detection — flags unbilled 30-min blocks',
      'Invoice preparation and receivables tracking',
    ],
    autonomy: 'Draft only',
    autonomyDescription: 'Produces drafts and reports. You execute.',
  },
]

export const HOW_IT_WORKS_STEPS = [
  {
    number: '01',
    title: 'Define your org chart',
    description: 'Set up your AI agents the way you\'d set up employees — by role, with clear reporting lines, permissions, and budget limits. In plain English, not code.',
  },
  {
    number: '02',
    title: 'Agents handle the work',
    description: 'Your Head Partner runs morning deadline scans, triages your inbox, and delegates to specialist agents. Every action is logged. Every dollar is tracked.',
  },
  {
    number: '03',
    title: 'You approve what matters',
    description: 'Nothing leaves the firm without your sign-off. Drafts are reviewed, filings are approved, emails are sent by you. The AI is the engine. You hold the keys.',
  },
]

export const TRUST_POINTS = [
  {
    icon: Layers,
    title: 'Company isolation',
    description: 'Each client\'s data lives in a cryptographically separated boundary. Agent for Client A cannot see Client B\'s data — enforced at the database level, not just the UI.',
  },
  {
    icon: Shield,
    title: 'Sandboxed execution',
    description: 'AI agents process documents in locked containers — no network access, non-root execution, dropped Linux capabilities, mandatory seccomp profiles. Same hardening used in banking.',
  },
  {
    icon: Eye,
    title: 'Approval gates on everything',
    description: 'All external communication requires Board (attorney) approval. Hiring new agents, changing strategy, sending anything outside the firm — you decide, always.',
  },
  {
    icon: Lock,
    title: 'Five authentication layers',
    description: 'Session auth, Cloudflare Access, board API keys, run-scoped JWTs, agent API keys. All tokens SHA-256 hashed at rest. Every action traced to a specific identity.',
  },
  {
    icon: DollarSign,
    title: 'Budget controls with auto-pause',
    description: 'Monthly spending caps per agent. Hit the limit? Agent stops automatically. Unusual spending patterns surface immediately — a built-in anomaly detector.',
  },
  {
    icon: Server,
    title: 'Deploy anywhere',
    description: 'Cloud, private cloud, or a Mac Mini in your office closet. Same platform, same security. Your data goes wherever you want — including nowhere outside your building.',
  },
]

export const STATS = [
  {
    value: '6',
    label: 'independent security layers — each assumes the others have failed',
    source: null,
  },
  {
    value: '14.5 hrs',
    label: 'recovered per week for a solo practitioner — reviewing instead of creating',
    source: null,
  },
  {
    value: '$234K',
    label: 'in recovered billable capacity per attorney per year at full compound effect',
    source: null,
  },
  {
    value: '70%',
    label: 'of drafts approved without revision by month 12 — the AI learns your style',
    source: null,
  },
]

export const FAQS = [
  {
    question: 'What is the Lethal Trifecta?',
    answer: 'Security researcher Simon Willison identified three capabilities that, combined in one AI system, create an attack surface that can\'t be patched: access to private data, exposure to untrusted content, and ability to communicate externally. Every useful AI application in law has all three. ClaudeFirm is architecturally designed to break the trifecta — sandboxing untrusted content, gating all external communication, and isolating client data at every layer.',
  },
  {
    question: 'Can a prompt injection steal my client data?',
    answer: 'Prompt injection is an unsolved problem at the AI model level — no vendor can prevent it entirely. That\'s why our defense is architectural, not model-level. Even if a hidden instruction in an opposing counsel\'s filing tricks the AI, the agent runs in a sandbox with no network access, all output goes through your approval gate, and client data is isolated per-company. The attack has nowhere to go.',
  },
  {
    question: 'Who sees my client data?',
    answer: 'That depends on how you deploy. On-premise (a Mac Mini in your office) means nobody — the data never leaves your building. Private cloud means only your infrastructure. Even in managed cloud, each company is cryptographically isolated with all tokens hashed at rest. No model training on your documents, ever.',
  },
  {
    question: 'Can it file or send something without my approval?',
    answer: 'No. Every document is DRAFT until a licensed attorney reviews and removes the watermark. Every email is drafted, not sent. Every filing is prepared, not submitted. The AI proposes — you dispose. This is enforced by the system, not just by policy.',
  },
  {
    question: 'Does the AI get better over time?',
    answer: 'Yes — five feedback loops compound over 12 months. Agent memory builds institutional knowledge (judge preferences, opposing counsel patterns). Approval feedback refines drafting quality. Cost optimization routes tasks to the most efficient model. By month 12, 70% of drafts are approved without revision, up from 15% in month one.',
  },
  {
    question: 'What about ABA Opinion 512 and bar ethics?',
    answer: 'ClaudeFirm is designed to exceed the requirements of ABA Opinion 512, Model Rules 1.1 (competence), 1.6 (confidentiality), and 5.3 (supervision of nonlawyer assistants). The immutable audit trail proves supervisory review occurred. The org hierarchy makes supervision concrete, not theoretical. The architecture documentation is available for your compliance team to verify.',
  },
  {
    question: 'How is this different from ChatGPT or Clio AI?',
    answer: 'ChatGPT has no data isolation, no approval gates, no audit trail, no deployment flexibility, and no defense against the Lethal Trifecta. Clio AI is embedded within Clio with Clio\'s security model. ClaudeFirm is an independent platform with six security layers, org-chart-based agent management, self-improving feedback loops, and the ability to run on your own hardware. It integrates with Clio — it doesn\'t depend on it.',
  },
]
