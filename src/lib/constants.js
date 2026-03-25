import {
  FileText, HeartPulse, Brain, Wrench, BookOpen,
  FileSearch, FilePen, Search, Mail, Scale, FolderSearch,
  Shield, ShieldCheck, ShieldAlert, Eye, FileCheck, Quote, Users,
  Clock, AlertTriangle, FileX, TrendingDown,
  Building2, Gavel, Home, Globe, ScrollText,
} from 'lucide-react'

export const NAV_ITEMS = [
  { label: 'How It Works', href: '#what-is' },
  { label: 'Skills', href: '#skills' },
  { label: 'Safety', href: '#safety' },
  { label: 'FAQ', href: '#faq' },
]

export const CONFIG_FILES = [
  {
    name: 'AGENTS.md',
    icon: FileText,
    description: "Defines the agent's role, your firm's context, and the Cardinal Safety Rules that govern everything it does.",
  },
  {
    name: 'HEARTBEAT.md',
    icon: HeartPulse,
    description: 'The daily, weekly, and event-driven operational checklist — deadline scans, time capture, matter reviews, and more.',
  },
  {
    name: 'SOUL.md',
    icon: Brain,
    description: "The agent's operational philosophy, voice, and decision-making framework. How it thinks, communicates, and prioritizes.",
  },
  {
    name: 'TOOLS.md',
    icon: Wrench,
    description: "Your firm's tech stack configuration — Google Workspace or Microsoft 365, folder structures, billing systems, and integration points.",
  },
  {
    name: 'PRACTICE.md',
    icon: BookOpen,
    description: 'Practice-specific extensions — ships with a worked example, extensible to any practice area.',
  },
]

export const SKILLS = [
  {
    name: 'Contract Review',
    icon: FileSearch,
    description: 'Upload an agreement, get a severity-rated analysis with risk flags, cross-reference checks, missing provisions, and specific counter-language. Not a summary — an actionable review.',
  },
  {
    name: 'Document Drafting',
    icon: FilePen,
    description: 'Template-aware drafting that pulls matter context, applies jurisdiction-specific formatting, and maintains style consistency. First drafts that start at 80%, not 20%.',
  },
  {
    name: 'Legal Research',
    icon: Search,
    description: 'Parallel multi-angle research with citation verification, confidence ratings, and hallucination guards. Every cited authority is checked. Unverified citations are flagged, not hidden.',
  },
  {
    name: 'Client Communications',
    icon: Mail,
    description: "Drafts emails, letters, and status updates in your voice and tone. Queued for your review — never sent autonomously. Because the AI doesn't have a bar number.",
  },
  {
    name: 'Court Filing Prep',
    icon: Scale,
    description: 'Formatting to local court rules, deadline calculation, checklist generation, exhibit assembly. The filing package is ready for your review. You file it.',
  },
  {
    name: 'Discovery Review',
    icon: FolderSearch,
    description: 'Document organization, privilege screening, and production set preparation. Turns a box of documents into a structured, reviewable set.',
  },
]

export const CARDINAL_RULES = [
  {
    name: 'Everything Is a Draft',
    icon: FileCheck,
    description: 'Every document carries a [DRAFT — REQUIRES ATTORNEY REVIEW] watermark. Only you remove it. The agent never removes it.',
  },
  {
    name: 'No Autonomous Client Contact',
    icon: Mail,
    description: 'The agent drafts. You send. Emails are queued, not dispatched. Even scheduling confirmations need your approval.',
  },
  {
    name: 'No Legal Advice',
    icon: ShieldAlert,
    description: 'The agent presents analysis, options, and tradeoffs. It does not render opinions, predict outcomes, or tell clients what to do.',
  },
  {
    name: 'Privilege and Confidentiality',
    icon: Shield,
    description: 'Zero-data-retention API. Matter segregation. No client data used for training. Attorney-client privilege is architecturally respected.',
  },
  {
    name: 'Full Audit Trail',
    icon: Eye,
    description: 'Every AI-generated output is logged with timestamp, matter ID, input summary, output summary, and attorney review status.',
  },
  {
    name: 'Citation Integrity',
    icon: Quote,
    description: 'Every legal citation is verified before the draft reaches you. Unverified citations are flagged [UNVERIFIED — CONFIRM BEFORE USE].',
  },
  {
    name: 'Conflicts Awareness',
    icon: Users,
    description: 'The agent maintains a conflicts database and surfaces potential matches. You make the determination.',
  },
]

export const TIMELINE = [
  {
    time: '7:00 AM',
    title: 'Morning Briefing',
    description: "You open your inbox. ClaudeFirm's Daily Deadline Brief is waiting. Two filings due this week, both on track. One client hasn't returned your document request — a follow-up draft is queued. Today's schedule: 10 AM client meeting (prep materials staged), 2 PM court conference call (hearing memo drafted and ready for review).",
  },
  {
    time: '9:30 AM',
    title: 'New Matter Intake',
    description: 'A prospective client calls. You take notes during the consult. Afterward, you hand the intake to ClaudeFirm. It runs the conflict check, drafts the engagement letter, generates the initial document request list, calculates filing deadlines, and sets up the matter folder structure — all in the time it takes you to get a coffee.',
  },
  {
    time: '11:00 AM',
    title: 'Opposing Counsel Sends a Redline',
    description: "Forty pages of changes to a settlement agreement. ClaudeFirm analyzes every change, classifies by severity, flags where the opposing side shifted risk, and produces a summary with recommended counter-language. You apply your judgment, make your decisions, and ClaudeFirm applies tracked changes at the Word XML level. Real tracked changes. Opposing counsel opens it in Word and it looks like you spent the whole afternoon on it.",
  },
  {
    time: '5:30 PM',
    title: 'End of Day',
    description: "ClaudeFirm drafts today's time entries. Six billable activities, each with a professional narrative that describes the work specifically enough to survive a fee dispute. You review, adjust where needed, approve. Tomorrow's priority list is staged.",
  },
  {
    time: 'Friday',
    title: 'Weekly Review',
    description: 'Matter portfolio summary: 12 active matters, all on track. Two invoices ready to send. One receivable past 60 days — follow-up drafted. Pipeline: two pending consultations scheduled for next week.',
  },
]

export const PRACTICE_AREAS = [
  {
    name: 'Corporate / Transactional',
    icon: Building2,
    description: 'Deal lifecycle skills, closing checklist automation, entity formation templates.',
  },
  {
    name: 'Litigation',
    icon: Gavel,
    description: 'Case timeline construction, deposition preparation, motion drafting, case law synthesis.',
  },
  {
    name: 'Real Estate',
    icon: Home,
    description: 'Title review, closing document generation, lease analysis.',
  },
  {
    name: 'Immigration',
    icon: Globe,
    description: 'Visa petition preparation, deadline tracking across multiple filing types, RFE response drafting.',
  },
  {
    name: 'Estate Planning',
    icon: ScrollText,
    description: 'Trust drafting, estate inventory, beneficiary tracking, administration timelines.',
  },
]

export const FAQS = [
  {
    question: 'Is this ethical? What about privilege?',
    answer: "The same framework that lets you use Dropbox, Google Drive, Clio, and Westlaw applies. ABA guidance treats AI tools as third-party technology providers. Your obligations: use zero-data-retention configurations, understand data handling, document your reasoning. ClaudeFirm's safety architecture is designed to make this easy — and to produce an audit trail that demonstrates responsible use.",
  },
  {
    question: 'What if it hallucinates citations?',
    answer: "The research skill includes mandatory citation verification. Every authority is checked. Unverified citations are flagged, not hidden. The lawyers who got sanctioned were using AI without quality control. ClaudeFirm is all quality control.",
  },
  {
    question: "I'm not technical. Can I set this up?",
    answer: "If you can write a detailed email, you can customize these files. They're markdown — plain text with simple formatting. The hard part isn't technical. It's thinking clearly about how you want your practice to work.",
  },
  {
    question: 'What do I need to get started?',
    answer: "ClaudeFirm provides the complete operational architecture — the five configuration files, the skills, and the safety framework. You'll also need a Claude subscription or API access from Anthropic.",
  },
  {
    question: 'Will this replace my staff?',
    answer: "No. It replaces the work that makes you consider whether you need staff. First-pass review, initial drafts, research starting points, time entry capture, document formatting. Your paralegal, if you have one, gets upgraded too — they supervise the same AI output you do. The humans do higher-value work.",
  },
  {
    question: 'What about client data security?',
    answer: "Configure Claude with zero-data-retention. Your inputs are not stored, not trained on, and not accessible after the session. The template's Cardinal Safety Rules enforce matter segregation and privilege-aware data handling.",
  },
  {
    question: "I practice [X law], not matrimonial. Does this work for me?",
    answer: "Yes. The architecture is practice-agnostic. Your PRACTICE.md follows the same structure: matter types, lifecycle phases, practice-specific skills, folder additions, jurisdiction configuration. Build yours using the worked example as a blueprint.",
  },
]

export const PAIN_POINTS = [
  {
    icon: Clock,
    title: 'Half your day is admin',
    description: 'You went to law school to think critically and advocate for clients. Instead, you spend half your day on billing, formatting, and document management.',
  },
  {
    icon: TrendingDown,
    title: 'Competing against armies',
    description: "You compete against firms with associates, paralegals, and practice management teams. You have yourself. Maybe one other person.",
  },
  {
    icon: AlertTriangle,
    title: 'Things fall through cracks',
    description: "A deadline almost slips. A client doesn't hear from you for two weeks. A bill goes out late. Not because you're bad at your job — there's just too much.",
  },
  {
    icon: FileX,
    title: '"Legal AI" didn\'t deliver',
    description: "You've tried legal AI tools. Too expensive, too generic, or just a chatbot that talked about your documents instead of actually doing anything with them.",
  },
]
