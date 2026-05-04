import {
  Unplug, DollarSign, Lock,
  Crown, UserPlus, Receipt, Megaphone,
  Key, EyeOff, Archive, Hammer,
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
    icon: DollarSign,
    stat: '$0/mo',
    title: 'What inference should cost after you bought the hardware',
    description: 'You already paid for the laptop. You already paid for the electricity. The "AI tax" — $20/seat/month, $200/seat/month, per-token surcharges, "enterprise" pricing — is rent extracted on top of compute you already own. Nobody charges you a monthly fee to run Word.',
  },
  {
    icon: Unplug,
    stat: '14 days',
    title: 'Notice you get when a vendor decides to deprecate your stack',
    description: 'Your workflow depends on a model. The vendor sunsets the model. Your prompts stop returning the same outputs. Your firm\'s habits — built over 18 months — are now a research project. And there is nothing in your contract that prevents this from happening again next quarter.',
  },
  {
    icon: EyeOff,
    stat: '$0',
    title: 'What you get paid for the data you give them',
    description: 'Every prompt you send to a hosted model trains some part of someone\'s next product, refines someone\'s reinforcement learning loop, sharpens someone\'s competitive moat. Your client work is the unpaid intern of a $300B industry. The opt-out toggle is a courtesy, not a guarantee.',
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
    icon: Hammer,
    title: 'You own the install. Forever.',
    description: 'One-time license. The binary lives on your disk. The model weights live on your disk. The configuration lives on your disk. Cancel us tomorrow and the software keeps running — same as Photoshop CS6 keeps running, same as your 2009 copy of Word keeps running. Software you bought, not software you rented.',
  },
  {
    icon: EyeOff,
    title: 'No telemetry. No phone-home. No "anonymized analytics."',
    description: 'There is no "we collect aggregate usage data to improve the product" footnote. The product does not call out. The agents do not report. Run a packet capture on your own router and verify it. We expect you to.',
  },
  {
    icon: Archive,
    title: 'No platform risk',
    description: 'Your firm runs on a stack. The stack should not be able to disappear because someone in San Francisco missed a fundraising round. Local install + local weights + local data = a workflow that survives every cycle of vendor consolidation, acquisition, pivot, and shutdown that the next decade will produce.',
  },
  {
    icon: Key,
    title: 'No accounts. No SSO. No "log in to continue."',
    description: 'There is no central system you authenticate against. There is no token that expires. There is no admin who can lock you out. The software runs because you launched it. The data is yours because it never went anywhere else.',
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
