# TOOLS.md -- Firm Systems & Tools

Current firm tool stack and operational systems. This file is the source of truth for how the agent interacts with firm infrastructure. Update it as tools are adopted, replaced, or retired.

---

## Tech Stack Configuration

The firm operates on one of two primary ecosystems. Set the active stack at setup.

### Option A: Google Workspace

| Function | Tool | Agent Integration |
|----------|------|-------------------|
| Email | Gmail | Draft client comms → Gmail drafts folder. Never send autonomously. |
| Calendar | Google Calendar | Read for deadline/event awareness. Create DRAFT events flagged for attorney confirmation. |
| Documents | Google Docs | Generate drafts. All AI output carries `[DRAFT]` header. Use Docs for collaborative review with attorney. |
| Spreadsheets | Google Sheets | Billing tracking, matter lists, deadline trackers. |
| File Storage | Google Drive | Matter-centric folder structure (see below). |
| Video/Meetings | Google Meet | Calendar integration only. No autonomous scheduling. |

### Option B: Microsoft 365

| Function | Tool | Agent Integration |
|----------|------|-------------------|
| Email | Outlook | Draft client comms → Outlook drafts folder. Never send autonomously. |
| Calendar | Outlook Calendar | Read for deadline/event awareness. Create DRAFT events flagged for attorney confirmation. |
| Documents | Microsoft Word | Generate .docx drafts. Claude operates at the XML level for tracked changes, formatting, and redlining (per article reference). All AI output carries `[DRAFT]` header. |
| Spreadsheets | Excel | Billing tracking, matter lists, deadline trackers. |
| File Storage | SharePoint / OneDrive | Matter-centric folder structure (see below). SharePoint for shared firm files; OneDrive for individual attorney workspaces. |
| Video/Meetings | Teams | Calendar integration only. No autonomous scheduling. |

### Cross-Platform Notes

- **Document format:** Default to .docx for all legal documents regardless of stack. Google Docs can open/edit .docx natively. Word is the industry standard for legal document exchange.
- **Calendar format:** Use .ics standard for any calendar exports or cross-system transfers.
- **PDF:** All final documents delivered to clients or filed with courts should be PDF. The agent generates PDF from the source document after attorney approval.
- **Tracked changes:** When operating in the Microsoft 365 stack, Claude can manipulate Word documents at the XML level to apply real tracked changes attributed to the attorney's name — no Word application required. In the Google stack, use Google Docs suggestion mode for equivalent functionality.

---

## Matter-Centric Folder Structure

Every matter gets a standardized folder structure at opening. This is non-negotiable — consistency enables the agent to find anything in any matter without human guidance.

```
/matters/
  /active/
    /[YYYY-NNN] [Client Last] v [Opposing Last] (or [Client Last] - [Matter Type])/
      /01-engagement/
        engagement-letter.docx
        conflict-check.md
        fee-agreement.docx
        client-intake-form.md
      /02-correspondence/
        /client/
        /opposing-counsel/
        /court/
        /other/
      /03-pleadings/
        (complaints, answers, motions, orders)
      /04-discovery/
        /requests-served/
        /requests-received/
        /responses/
        /productions/
        /depositions/
      /05-research/
        (memos, case law, statutory analysis)
      /06-financial/
        /disclosures/
        /valuations/
        /support-calculations/
      /07-drafts/
        (working drafts — AI-generated material stages here)
      /08-final/
        (attorney-approved final versions only)
      /09-billing/
        time-entries.md
        invoices/
      /10-notes/
        status.md
        strategy-notes.md
        timeline.md
      matter-index.md        ← matter summary, parties, key dates, current status
      deadline-chain.md      ← all deadlines for this matter
  /closed/
    (same structure, archived after closeout checklist)
  /templates/
    (firm-wide document templates — see Template Library below)
```

### Matter Index File (`matter-index.md`)

Every matter has an index file at its root. This is the agent's quick-reference for the matter.

```markdown
# [Matter Name]

- **Matter ID:** YYYY-NNN
- **Client:** [Name, contact info]
- **Opposing Party:** [Name]
- **Opposing Counsel:** [Name, firm, contact info]
- **Matter Type:** [e.g., Contested Divorce, Business Formation, Contract Dispute]
- **Court/Jurisdiction:** [If applicable]
- **Judge:** [If assigned]
- **Date Opened:** [Date]
- **Billing Model:** [Hourly / Flat Fee / Retainer]
- **Retainer Balance:** [If applicable]
- **Status:** [Active phase description]
- **Next Action:** [Specific next step]
- **Next Deadline:** [Date and description]
- **Supervising Attorney:** [Name]
```

---

## Template Library

Templates live in `/matters/templates/` with version control. The agent uses the current version for all drafting. When a template is manually overridden more than twice in active use, the agent flags it as a candidate for template update during the weekly heartbeat.

### Template Naming Convention

```
[document-type]-[jurisdiction]-[version].docx
```

Examples:
- `engagement-letter-general-v3.docx`
- `motion-pendente-lite-nj-v1.docx`
- `parenting-plan-nj-v2.docx`
- `retainer-agreement-hourly-v2.docx`

### Template Versioning

- Templates are never overwritten. New versions are created alongside old ones.
- The `current` symlink or tag always points to the latest approved version.
- Superseded templates are retained for reference (matters opened under old templates may still need them).

---

## Deadline and Statute of Limitations Tracker

The deadline tracker is the firm's most critical operational system. It is checked on every morning heartbeat before anything else.

### Deadline Entry Format

```markdown
- **Matter:** [Matter ID and name]
- **Deadline:** [Date and time, if applicable]
- **Type:** [Filing / Response / Discovery / SOL / Court Date / Client Deliverable / Other]
- **Description:** [What is due]
- **Calculation basis:** [How this deadline was determined — e.g., "30 days from service, served 3/15/2026"]
- **Dependencies:** [What must happen before this deadline can be met]
- **Status:** [Not Started / In Progress / Ready for Review / Complete]
- **Owner:** [Attorney / Paralegal / Client / Opposing]
- **Alert chain:** T-14, T-7, T-3, T-1, T-0
```

### Statute of Limitations Tracking

For every matter involving potential claims, the SOL must be documented at intake:

- Claim type
- Triggering event and date
- Applicable statute and limitations period
- Calculated expiration date
- Tolling considerations (if any)
- Status: Active / Filed / Expired

**The agent surfaces SOL items on every weekly heartbeat until the claim is filed or the matter is closed.**

---

## Time Entry and Billing System

### Time Entry Format

```markdown
- **Date:** [Date]
- **Matter:** [Matter ID]
- **Attorney:** [Name]
- **Hours:** [X.X — tenths of an hour]
- **Task Code:** [See task code table]
- **Narrative:** [Billing description]
- **Status:** [DRAFT / APPROVED / BILLED]
```

### Task Code Table (Customize Per Firm)

| Code | Category | Examples |
|------|----------|----------|
| A100 | Client Communication | Calls, emails, meetings |
| A200 | Document Drafting | Agreements, motions, letters |
| A300 | Document Review | Contract review, discovery review |
| A400 | Legal Research | Case law, statutory, regulatory |
| A500 | Court Appearances | Hearings, arguments, conferences |
| A600 | Negotiation | Settlement discussions, mediation |
| A700 | Case Management | File organization, deadline management |
| A800 | Administrative | Intake, conflicts, billing |

### Billing Models

| Model | How the Agent Supports It |
|-------|--------------------------|
| **Hourly** (default) | Capture time daily. Draft narratives. Generate monthly invoices. Track against retainer balance. |
| **Flat Fee** | Track milestones against fee. Alert if actual time significantly exceeds flat fee (profitability monitoring). |
| **Subscription/Retainer** | Track monthly scope of services delivered. Flag if client usage exceeds subscription value. Generate usage reports. |
| **Hybrid** | Apply appropriate model per matter. Some matters hourly, some flat fee — agent tracks each by its own model. |

---

## Conflict of Interest Database

The agent maintains a searchable database of all current and former clients, opposing parties, and related entities.

```markdown
- **Entity Name:** [Name]
- **Type:** [Client / Opposing Party / Related Entity / Witness / Counsel]
- **Associated Matters:** [List of matter IDs]
- **Relationship:** [Description — e.g., "Spouse of client in 2024-012"]
- **Date Added:** [Date]
- **Notes:** [Any relevant context]
```

**At new matter intake, the agent runs the proposed client name, opposing party name, and all known related entities against this database and surfaces any matches. The attorney makes the conflict determination. The agent does not.**

---

## Audit Log System

All AI-generated work product is logged in `$AGENT_HOME/audit/`.

### Log Structure

```
/audit/
  /YYYY-MM/
    /[matter-id]/
      YYYY-MM-DD-HHMMSS-[skill]-[action].md
```

### Log Entry Format

```markdown
# Audit Entry

- **Timestamp:** [ISO 8601]
- **Matter:** [Matter ID]
- **Skill:** [Which skill was invoked]
- **Action:** [What the agent did — e.g., "Drafted motion for temporary support"]
- **Input Summary:** [What was provided — e.g., "Uploaded financial disclosure, opposing party's motion"]
- **Output Summary:** [What was produced — e.g., "12-page motion draft with supporting calculations"]
- **Output Location:** [File path in matter folder]
- **Review Status:** PENDING | APPROVED | REVISED | REJECTED
- **Reviewing Attorney:** [Name, when reviewed]
- **Attorney Changes:** [Summary of revisions, if any]
```

---

## Practice Management Software Integration Points

If the firm uses a practice management platform (Clio, MyCase, PracticePanther, Smokeball, etc.), the following integration points should be configured:

| Agent Function | PMS Feature |
|---------------|-------------|
| Deadline tracking | PMS calendar / task system |
| Time entry | PMS time/billing module |
| Matter list | PMS matter database |
| Conflict check | PMS contact/conflict database |
| Document storage | PMS document management (or linked cloud storage) |
| Client portal | PMS client portal for status updates and document sharing |

**If no PMS is in use, the agent operates on the file-based systems defined above.** The file-based approach is the fallback and works standalone. PMS integration is additive.

---

## Communication Channels

| Channel | Agent Behavior |
|---------|---------------|
| Email (Gmail/Outlook) | Drafts only. Queued in drafts folder with `[DRAFT — REVIEW BEFORE SENDING]` prefix in subject line. |
| Phone | Agent does not make or receive calls. It can draft call notes, prepare talking points, and log call summaries after the attorney reports back. |
| Client Portal (if available) | Agent can draft portal messages. Never posts without attorney approval. |
| Court E-Filing | Agent prepares filing packages. Attorney files. |
| Physical Mail | Agent drafts letters. Attorney reviews, prints, and mails (or directs staff). |

---

## Notes

(Add notes about tools as you acquire and use them. What works, what doesn't, what integrations save the most time, what manual workarounds persist.)
