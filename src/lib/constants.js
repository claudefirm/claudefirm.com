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
    icon: Shield,
    stat: '0',
    title: 'Cloud AI vendors that have never had an incident',
    description: 'Every major LLM provider has had at least one disclosed data exposure or training-data leak in the past 24 months. The AI industry is still figuring out the basics of confidentiality. Your privileged client communications should not be the test data.',
  },
  {
    icon: FileCheck,
    stat: '83%',
    title: 'Of state bar opinions on AI cite confidentiality',
    description: 'Florida, California, New York, Texas — the bar opinions all converge on the same point: you have to know where the data goes. With cloud AI, the answer is "into the vendor\'s pipeline, governed by a BAA you didn\'t draft." With local AI, the answer is "nowhere."',
  },
  {
    icon: Server,
    stat: '1',
    title: 'Place your client data lives. The Mac on your desk.',
    description: 'No staging environment. No model-training opt-out checkbox you have to remember to tick. No vendor breach you read about in the WSJ six months later. The hardware is in the room. The data stays in the room.',
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
    icon: Server,
    title: 'Inference is local. Always.',
    description: 'Every prompt, every retrieval, every draft is processed on the Mac in your office. The model weights live on disk. There is no API call to a vendor. There is no fallback path that quietly routes to the cloud when the local model is busy.',
  },
  {
    icon: Shield,
    title: 'No BAA, because no third party',
    description: 'HIPAA, GDPR, state privilege rules — all turn on whether a third party touched the data. None did. You don\'t need a Business Associate Agreement with a vendor that never receives client information. The compliance argument starts and ends at your office wall.',
  },
  {
    icon: Eye,
    title: 'Every action is approved by you',
    description: 'The agent drafts. You review. You send. Nothing leaves the firm without an attorney signing off, in compliance with ABA Model Rule 5.3 on supervising nonlawyer assistants. There is no autopilot. There is no "oops."',
  },
  {
    icon: FileCheck,
    title: 'Audit trail you can hand the bar',
    description: 'Every document the agent read, every draft it produced, every approval you signed — written to an immutable log on disk. When opposing counsel asks how you supervised the AI on a privileged matter, you hand them the log. It runs locally too.',
  },
]

export const STATS = [
  {
    value: '6 min',
    label: 'intake response — down from 6 hours. The fastest lawyer gets the client 70% of the time.',
    source: 'Lead response studies',
  },
  {
    value: '94%',
    label: 'collection rate — up from 85%. On $300K in annual billings, that\'s $27,000 recovered.',
    source: 'Clio Legal Trends Report',
  },
  {
    value: '7.5 hrs',
    label: 'recovered per week. At your billing rate, that\'s $1,500 to $3,000 in recaptured capacity.',
    source: null,
  },
  {
    value: '60–80',
    label: 'active matters managed with the responsiveness of a much larger firm. Without the overhead.',
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
