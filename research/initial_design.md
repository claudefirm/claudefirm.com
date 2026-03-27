# PROMPT: Generate Marketing Website for Head Partner AI System

## Context

You are building a single-page marketing website for **Head Partner** — an open-source AI agent template that turns Claude into the operational backbone of a small law firm. Head Partner handles everything a lawyer shouldn't have to think about (intake, deadlines, billing, document drafting, client communications, file management) so the attorney can focus entirely on legal judgment, strategy, and client relationships.

This is NOT a SaaS product. It is NOT a subscription service. It is a free, open-source template system — a set of structured configuration files (AGENTS.md, HEARTBEAT.md, SOUL.md, TOOLS.md, PRACTICE.md) that any small firm can download and use with Claude to operationalize their practice. Think of it like a "starter kit" or "operating system template" that a lawyer installs and customizes for their firm.

The website's job is to explain what this is, why it matters, and get lawyers to download the template and start using it.

---

## Target Audience

**Primary:** Solo practitioners and small firm attorneys (1–3 lawyers) who are:
- Drowning in administrative overhead that eats into billable hours
- Curious about AI but skeptical of overhyped "legal AI" products
- Technically competent enough to use Claude but haven't built structured workflows
- Worried about ethics, privilege, and malpractice risk with AI
- Competing against much larger firms with more resources

**Secondary:**
- Legal operations consultants who advise small firms
- Paralegals and legal assistants who manage firm operations
- Law practice management educators and CLE providers

**Psychographic profile of the primary audience:** These are experienced, practical lawyers. They've probably tried ChatGPT and found it underwhelming for real legal work. They've seen the "legal AI" marketing from Harvey, Spellbook, CoCounsel, etc. and either can't afford it, don't trust it, or tried it and found it too generic. They are skeptical of hype but hungry for something that actually works. They respect specificity, distrust vagueness, and will immediately check whether the safety story is real. If the ethics section is thin, they'll leave.

---

## Product Positioning

### Tagline Options (pick the strongest or combine)
- "Your AI Chief of Staff. Your Practice, Your Judgment, Your Rules."
- "The operational backbone your small firm never had."
- "Stop doing the work you didn't go to law school for."
- "An AI agent that runs your firm's operations — so you can run your practice."

### Core Value Proposition
Head Partner is a structured AI agent template that transforms Claude from a general-purpose chatbot into a law firm operations manager. It ships with pre-built skills for contract review, document drafting, legal research, client communications, court filing preparation, and discovery review — all wrapped in a safety architecture that ensures every AI output is a draft, every draft requires attorney review, and every interaction is logged for audit purposes.

### Key Differentiators (vs. legal AI products like Harvey, Spellbook, CoCounsel)
1. **Open source and free.** No subscription. No per-seat licensing. No vendor lock-in.
2. **Built on a frontier model, not a wrapper.** Legal AI products are wrappers around the same foundation models. Head Partner puts you directly on Claude — every new capability ships to you on day one, not when a product team decides to build a feature.
3. **Encodes YOUR judgment, not a firm playbook.** Legal AI products customize to a firm's template library. Head Partner encodes an individual attorney's analytical frameworks, voice, and decision-making. The difference is the difference between a recipe and knowing how to cook.
4. **Real document manipulation, not chatbot commentary.** Claude operates at the XML level inside Word documents — real tracked changes, real formatting, real redlines that opposing counsel opens in Word and reviews normally. Legal AI chatbots talk about documents. Head Partner reaches inside them and changes them.
5. **Safety-first architecture.** Seven Cardinal Safety Rules are hard-coded: everything is a draft, no autonomous client contact, no legal advice, privilege-aware data handling, full audit trail, citation verification, and conflicts awareness. These aren't guidelines — they're architectural walls.
6. **Practice-agnostic with practice-specific extensions.** Ships with a matrimonial law worked example, but the architecture works for any practice area. Litigators, transactional lawyers, immigration, real estate, estate planning — same system, different skills.

### What Head Partner Is NOT
- Not a SaaS product. No login. No monthly fee. No vendor.
- Not a replacement for lawyer judgment. It makes lawyers faster and more consistent. It does not practice law.
- Not a client-facing chatbot. It never talks to clients. It drafts. The lawyer sends.
- Not a magic wand. It requires a few hours of setup and customization. The returns compound fast, but there's an upfront investment.

---

## Design Direction

### Aesthetic
- **Modern, clean, professional.** Think: Stripe's clarity meets a top-tier law firm's gravitas.
- **Dark navy (#0F1B2D or similar) as primary brand color** with white text for hero sections. This reads as authoritative, trustworthy, and legal without being stuffy.
- **Warm accent color** — a muted gold/amber (#C9963B or similar) for CTAs, highlights, and emphasis. Signals quality and premium positioning without being flashy.
- **Clean sans-serif typography.** Inter, DM Sans, or similar. Professional but modern. NOT a serif font — this is not a law firm website, it's a technology product for law firms. The distinction matters.
- **Generous whitespace.** Let content breathe. Dense walls of text are exactly what these lawyers deal with all day — the website should be a visual relief.
- **Subtle, sophisticated animations.** Gentle fade-ins on scroll. Maybe a subtle code/document animation in the hero. Nothing distracting.
- **No stock photos of gavels, handshakes, or people in suits.** Zero. These are visual clichés that signal "generic legal website" and immediately undermine credibility with sophisticated lawyers.
- **Use abstract visuals, clean diagrams, code snippets, or document mockups** to illustrate concepts. If showing the product, show real-looking document output, folder structures, or skill configurations — things that signal "this is real and specific."
- **Mobile responsive.** Lawyers check things on their phones between hearings.

### Visual Elements to Include
- A hero section with a clear headline, subtext, and CTA
- A "How It Works" section with 3–4 steps
- A "What's Inside" section showing the five files and what they do
- A "Skills" section showing the six default skills
- A "Safety Architecture" section (this is the credibility section — make it prominent)
- A "Before / After" or "Day in the Life" comparison
- A "Practice Areas" section showing the matrimonial example and how to extend
- Social proof section (quotes, even if hypothetical/illustrative for now — frame them as representative scenarios)
- A "Getting Started" section with download CTA
- A FAQ section addressing the obvious objections
- Footer with appropriate links

---

## Page Structure and Content

### Section 1: Hero

**Headline:** Something punchy that captures the core transformation. Examples:
- "Your Small Firm Just Got a Managing Partner"
- "AI That Runs Your Firm — So You Can Practice Law"
- "Stop Drowning in Admin. Start Practicing Law."

**Subheadline:** One sentence that explains what it is:
"Head Partner is a free, open-source AI agent template that turns Claude into your firm's operational backbone — handling intake, deadlines, billing, drafting, and client communications while you focus on the work that actually requires a law degree."

**CTA:** "Download the Template" (primary) and "See How It Works" (secondary/scroll anchor)

**Visual:** An abstract representation of the system — perhaps a stylized document/folder structure, or a split-screen showing "chaos" (scattered tasks) on one side and "order" (organized system) on the other. Or a tasteful animation of documents organizing themselves.

---

### Section 2: The Problem

Frame the pain that every small firm attorney lives with. Be specific and empathetic — these lawyers should feel seen.

**Key points to hit:**
- You went to law school to think critically and advocate for clients. Instead, you spend half your day on admin, billing, and document formatting.
- You compete against firms with armies of associates, paralegals, and practice management teams. You have... yourself. Maybe one other person.
- Things fall through cracks. A deadline almost slips. A client doesn't hear from you for two weeks. A bill goes out late. None of these are because you're bad at your job — it's because there's too much non-lawyer work for one person to handle.
- You've tried "legal AI" tools. They were either too expensive, too generic, or just a chatbot that talked about your documents instead of actually doing anything with them.
- The real problem isn't that you need AI. It's that you need an operations layer — and AI is finally good enough to be one.

---

### Section 3: What Is Head Partner?

Clear, concise explanation.

**Head Partner is a set of structured instruction files** that configure Claude — Anthropic's AI model — to operate as the managing partner of your firm's operations.

**Five files. Your entire firm's operating system.**

Show the five files as cards or a visual stack:

| File | What It Does |
|------|-------------|
| **AGENTS.md** | Defines the agent's role, your firm's context, and the Cardinal Safety Rules that govern everything it does. |
| **HEARTBEAT.md** | The daily, weekly, and event-driven operational checklist — deadline scans, time capture, matter reviews, and more. |
| **SOUL.md** | The agent's operational philosophy, voice, and decision-making framework. How it thinks, how it communicates, how it prioritizes. |
| **TOOLS.md** | Your firm's tech stack configuration — Google Workspace or Microsoft 365, folder structures, billing systems, and integration points. |
| **PRACTICE.md** | Practice-specific extensions — ships with a matrimonial law example, extensible to any practice area. |

**Key message:** These aren't prompts you type every time. They're persistent instructions that fire automatically in context. Set it up once. It compounds from there.

---

### Section 4: Skills — What It Can Do

Show the six default skills with brief descriptions and concrete examples of what each one actually produces:

1. **Contract Review** — Upload an agreement, get a severity-rated analysis with risk flags, cross-reference checks, missing provisions, and specific counter-language. Not a summary — an actionable review.

2. **Document Drafting** — Template-aware drafting that pulls matter context, applies jurisdiction-specific formatting, and maintains style consistency. First drafts that start at 80%, not 20%.

3. **Legal Research** — Parallel multi-angle research with citation verification, confidence ratings, and hallucination guards. Every cited authority is checked before the memo reaches you. Unverified citations are flagged, not hidden.

4. **Client Communications** — Drafts emails, letters, and status updates in your voice and tone. Queued for your review — never sent autonomously. Because the AI doesn't have a bar number.

5. **Court Filing Preparation** — Formatting to local court rules, deadline calculation, checklist generation, exhibit assembly. The filing package is ready for your review. You file it.

6. **Discovery Review** — Document organization, privilege screening, and production set preparation. Turns a box of documents into a structured, reviewable set.

**Note for each skill:** Include a small "DRAFT" badge or watermark icon to visually reinforce that everything is a draft until the attorney approves it.

---

### Section 5: The Safety Architecture (MAKE THIS PROMINENT)

This section is what separates Head Partner from every "move fast" AI pitch. This is where skeptical lawyers become believers. Do NOT bury this. Give it visual weight — perhaps a darker background section with clear, bold statements.

**Headline:** "Seven Cardinal Rules. Non-Negotiable."

**Frame:** "We didn't build safety as a feature. We built it as the foundation. These seven rules are hard-coded into the agent's architecture. They cannot be overridden by any instruction, any shortcut, or any user request."

List all seven rules with brief explanations:

1. **Everything Is a Draft** — Every document carries a `[DRAFT — REQUIRES ATTORNEY REVIEW]` watermark. Only you remove it. The agent never removes it.

2. **No Autonomous Client Contact** — The agent drafts. You send. Emails are queued, not dispatched. Even scheduling confirmations need your approval.

3. **No Legal Advice** — The agent presents analysis, options, and tradeoffs. It does not render opinions, predict outcomes, or tell clients what to do.

4. **Privilege and Confidentiality** — Zero-data-retention API. Matter segregation. No client data used for training. Attorney-client privilege is architecturally respected.

5. **Full Audit Trail** — Every AI-generated output is logged with timestamp, matter ID, input summary, output summary, and attorney review status. Defensible transparency.

6. **Citation Integrity** — Every legal citation is verified before the draft reaches you. Unverified citations are flagged `[UNVERIFIED — CONFIRM BEFORE USE]`. The agent never fabricates authorities.

7. **Conflicts Awareness** — The agent maintains a conflicts database and surfaces potential matches. You make the determination.

**Closing line for this section:** "The lawyers who got sanctioned for AI-generated fake citations weren't using bad AI. They were using AI without guardrails. Head Partner is all guardrails."

---

### Section 6: A Day With Head Partner

A narrative walkthrough showing what the system actually does across a day. This makes the abstract concrete. Use a timeline or scrolling narrative format.

**7:00 AM — Morning Briefing**
You open your inbox. Head Partner's Daily Deadline Brief is waiting. Two filings due this week, both on track. One client hasn't returned your document request — a follow-up draft is queued. Today's schedule: 10 AM client meeting (prep materials staged), 2 PM court conference call (hearing memo drafted and ready for review).

**9:30 AM — New Matter Intake**
A prospective client calls about a contested divorce. You take notes during the consult. Afterward, you hand the intake to Head Partner. It runs the conflict check, drafts the engagement letter, generates the initial document request list, calculates filing deadlines, and sets up the matter folder structure — all in the time it takes you to get a coffee. You review, sign the engagement letter, and you're in business.

**11:00 AM — Opposing Counsel Sends a Redlined Agreement**
Forty pages of changes to a settlement agreement. Head Partner analyzes every change, classifies by severity, flags where the opposing side shifted risk, identifies provisions that conflict with their own prior positions, and produces a summary with recommended counter-language. You apply your judgment — context the AI doesn't have — make your decisions, and Head Partner applies tracked changes at the Word XML level. Real tracked changes. Opposing counsel opens it in Word and it looks like you spent the whole afternoon on it.

**5:30 PM — End of Day**
Head Partner drafts today's time entries. Six billable activities, each with a professional narrative that describes the work specifically enough to survive a fee dispute. You review, adjust where needed, approve. Tomorrow's priority list is staged. A client status update draft is queued for your review.

**Friday — Weekly Review**
Matter portfolio summary: 12 active matters, all on track. Two invoices ready to send. One receivable past 60 days — follow-up drafted. One template override flagged as a candidate for template update. Pipeline: two pending consultations scheduled for next week.

---

### Section 7: Built for YOUR Practice

Show the practice-agnostic architecture with the matrimonial law example.

**Headline:** "Ships with Matrimonial Law. Built for Everything."

Explain that Head Partner ships with a complete worked example for matrimonial/family law (financial analysis, parenting plans, support calculations, equitable distribution, settlement proposals) but the architecture is designed for any practice area to build their own extension.

Show examples of how other practice areas would extend it:
- **Corporate/Transactional:** Deal lifecycle skills, closing checklist automation, entity formation templates
- **Litigation:** Case timeline construction, deposition preparation, motion drafting, case law synthesis
- **Real Estate:** Title review, closing document generation, lease analysis
- **Immigration:** Visa petition preparation, deadline tracking across multiple filing types, RFE response drafting
- **Estate Planning:** Trust drafting, estate inventory, beneficiary tracking, administration timelines

**Message:** "The PRACTICE.md file is your practice area's playbook. It follows a consistent structure: matter types, lifecycle phases, practice-specific skills, folder additions, jurisdiction configuration, and intake checklists. Build yours once. It compounds from there."

---

### Section 8: Works With Your Stack

Show dual-stack support with Google Workspace and Microsoft 365 logos/icons.

**Key points:**
- Full support for Google Workspace (Gmail, Google Calendar, Drive, Docs) and Microsoft 365 (Outlook, Calendar, SharePoint/OneDrive, Word)
- Document output in .docx — the universal legal document format — regardless of which stack you use
- Claude operates at the XML level inside Word documents: real tracked changes, real formatting, real redlines
- Integration points for practice management software (Clio, MyCase, PracticePanther, Smokeball) — the template works standalone, PMS integration is additive
- Folder structures, deadline trackers, billing systems, and conflict databases all work file-based — no vendor dependency

---

### Section 9: Why Not "Legal AI"?

Address the elephant in the room directly. Lawyers have seen the Harvey/Spellbook/CoCounsel marketing. Explain why Head Partner takes a different approach.

**Frame it respectfully but directly:**

"Legal AI products are wrappers built on top of the same foundation models that power general-purpose tools like Claude. Their pitch: we'll customize the AI to your firm's playbook. The problem: a template library was never your competitive advantage. Every competent firm in your practice area has roughly the same templates."

**The real leverage:**
- Not which template the AI starts with, but the instructions that tell it how to think about the work
- Not a firm's playbook, but an individual lawyer's encoded judgment
- Not a chatbot that talks about documents, but a system that reaches inside them and changes them
- Not a product that ships features when an engineering team decides to, but a frontier model where every new capability ships to you on day one

"Head Partner is free. It's open source. It's built on the most capable AI model available. And it encodes your judgment, not someone else's product roadmap."

---

### Section 10: Getting Started

Clear, simple steps. Don't make this look hard.

**Step 1: Download the Template**
Get the five files. Read AGENTS.md first — it's the starting point.

**Step 2: Configure Your Firm**
Edit TOOLS.md with your tech stack (Google or Microsoft 365). Set your jurisdiction in PRACTICE.md. Update the matter folder structure if you want to customize it.

**Step 3: Build Your First Skill**
Pick the task you do most often. The template ships with six default skills. Start using one. Customize it to your practice and your voice.

**Step 4: Open Your First Matter**
Use the intake checklist. Watch the folder structure, deadline chain, and document templates populate automatically.

**Step 5: Compound**
Every week, the system gets more valuable. Your institutional memory grows. Your templates improve. Your skills get sharper. The returns compound.

**CTA:** Big, clear "Download Head Partner" button. Secondary: "Read the Docs" link.

---

### Section 11: FAQ

Address the objections lawyers will have:

**"Is this ethical? What about privilege?"**
The same framework that lets you use Dropbox, Google Drive, Clio, and Westlaw applies. ABA guidance treats AI tools as third-party technology providers. Your obligations: use zero-data-retention configurations, understand data handling, document your reasoning. Head Partner's safety architecture is designed to make this easy — and to produce an audit trail that demonstrates responsible use.

**"What if it hallucinates citations?"**
The research skill includes mandatory citation verification. Every authority is checked. Unverified citations are flagged, not hidden. The lawyers who got sanctioned were using AI without quality control. Head Partner is all quality control.

**"I'm not technical. Can I set this up?"**
If you can write a detailed email, you can customize these files. They're markdown — plain text with simple formatting. The hard part isn't technical. It's thinking clearly about how you want your practice to work. If you can describe your ideal process in words, you can build a skill.

**"What does it cost?"**
Head Partner is free and open source. You'll need a Claude subscription or API access, which is a separate cost from Anthropic. But the template itself — the five files, the skills, the architecture — costs nothing.

**"Will this replace my staff?"**
No. It replaces the work that makes you consider whether you need staff. First-pass review, initial drafts, research starting points, time entry capture, document formatting. Your paralegal, if you have one, gets upgraded too — they supervise the same AI output you do, at a lower cost basis. The humans do higher-value work.

**"What about client data security?"**
Configure Claude with zero-data-retention. Your inputs are not stored, not trained on, and not accessible after the session. The template's Cardinal Safety Rules enforce matter segregation and privilege-aware data handling. Your data processing agreements with Anthropic cover the same ground as your agreements with any cloud vendor.

**"I practice [X law], not matrimonial. Does this work for me?"**
Yes. The matrimonial law extension is a worked example — a reference implementation. The architecture is practice-agnostic. Your PRACTICE.md follows the same structure: matter types, lifecycle phases, practice-specific skills, folder additions, jurisdiction configuration. Build yours using the matrimonial example as a blueprint.

---

### Section 12: Footer

- Download link
- Documentation link
- GitHub repository link (or placeholder)
- "Built for lawyers, by lawyers, with Claude by Anthropic" (or appropriate attribution)
- No legal advice disclaimer: "Head Partner is an operational tool. It does not provide legal advice. All AI-generated work product requires review and approval by a licensed attorney."

---

## Technical Requirements

- **Single-page React application** (.jsx) with smooth scroll navigation
- **Fully self-contained** — no external API calls, no backend
- **Responsive** — looks good on desktop, tablet, and mobile
- **Accessible** — proper heading hierarchy, alt text, sufficient color contrast, keyboard navigable
- **Performance** — lightweight, fast load, no unnecessary dependencies
- **Animations** — subtle, scroll-triggered fade-ins. Nothing that slows down the page or annoys a busy lawyer.
- Use **Tailwind CSS** utility classes for styling
- Use **Lucide React** icons where appropriate
- Dark sections and light sections should alternate for visual rhythm
- The safety section should have a distinct visual treatment (darker background, perhaps a subtle border or accent) that signals "this is important"
- Code/file snippets (showing AGENTS.md structure, skill examples, folder structure) should be displayed in clean, syntax-highlighted code blocks that look real and specific — not abstract

---

## Tone of the Entire Website

- **Confident, specific, and grounded.** This is not a Silicon Valley hype pitch. These are lawyers. They hate vagueness and love specificity.
- **Respect the reader's intelligence.** Don't over-explain basic concepts. Don't be condescending about AI.
- **Address skepticism directly.** Don't dodge the hard questions (ethics, hallucination, privilege). Answer them head-on, with specificity.
- **Show, don't just tell.** Concrete examples, real-looking document outputs, specific scenarios. Every claim should be illustrated.
- **No buzzwords.** No "leverage synergies." No "revolutionize your practice." No "game-changer." Lawyers can smell this from a mile away and it destroys credibility instantly.
- **The article's tone is the benchmark.** Reread the source article. It's direct, specific, confident without being arrogant, and intensely practical. That's the voice.