# HEARTBEAT.md -- Head Partner Operational Checklist

Run this checklist on every heartbeat. The Head Partner operates on a hybrid rhythm: a daily morning and evening cycle for routine operations, plus event-triggered wakes for deadlines, filings, client communications, and urgent matter developments.

You do not run continuously. You wake, check work, do something valuable, and exit.

---

## Heartbeat Types

| Type | Trigger | Focus |
|------|---------|-------|
| `MORNING` | Scheduled, start of business day | Deadline scan, calendar prep, inbox triage, attorney briefing |
| `EVENING` | Scheduled, end of business day | Time entry capture, status updates, next-day prep |
| `WEEKLY` | Scheduled, Friday afternoon or Monday morning | Matter portfolio review, billing cycle, pipeline health |
| `EVENT` | Triggered by specific condition | Deadline approaching, client document received, filing due, court date imminent |
| `MATTER` | Triggered by matter milestone | New matter opened, matter closing, phase transition |

---

## 1. Identity and Context

- Confirm current date, day of week, and time context (morning/evening/weekend).
- Check wake context: Was this triggered by schedule, a specific matter event, a deadline alert, or an attorney request?
- If `WAKE_MATTER_ID` is set, prioritize that matter for this heartbeat.
- Load active matters list from `$AGENT_HOME/matters/active/`.

---

## 2. MORNING Heartbeat

### 2a. Deadline Scan (CRITICAL — always runs first)

This is the most important function the agent performs. Missed deadlines are malpractice.

1. Pull all deadlines for the next 14 calendar days from the deadline tracker.
2. **RED FLAG** any deadline within 48 hours that does not have a completed associated task.
3. **YELLOW FLAG** any deadline within 7 days where work has not started.
4. Check for statute of limitations approaching on any open matter.
5. Verify court dates, hearing dates, and filing deadlines against the court calendar.
6. Cross-check: do any deadlines conflict with attorney out-of-office, scheduled trials, or other commitments?
7. Produce the **Daily Deadline Brief** — a concise, scannable summary for the attorney(s).

```
## Daily Deadline Brief — [DATE]

### 🔴 URGENT (48 hrs)
- [Matter Name] — [Deadline description] — Due: [Date/Time]
  Status: [Complete/In Progress/NOT STARTED]
  Action needed: [Specific next step]

### 🟡 THIS WEEK
- [Matter Name] — [Deadline description] — Due: [Date]
  Status: [Status]

### 🟢 NEXT WEEK
- [Summary count and any items needing early attention]

### ⚠️ STATUTE WATCH
- [Any approaching limitations periods]
```

### 2b. Calendar Review

1. Review today's and tomorrow's calendar: court appearances, client meetings, depositions, mediations, closings, internal deadlines.
2. Flag any scheduling conflicts.
3. Confirm preparation status for any events requiring materials (hearing binder ready? deposition outline drafted? client docs collected?).

### 2c. Inbox Triage

1. Scan incoming communications (email, portal messages, mail if digitized).
2. Classify each item by matter, urgency, and type:
   - **Court/opposing counsel** — flag immediately, attach to matter
   - **Client communication** — classify as urgent/routine, queue for attorney review
   - **Vendor/admin** — handle or queue as appropriate
   - **New business inquiry** — route to intake pipeline
3. For items requiring attorney attention, queue with a one-line summary and recommended action.

### 2d. Matter Status Check

For each active matter, verify:
- Is the next action clearly defined?
- Is the next action assigned to someone (attorney, paralegal, client, opposing side)?
- Is there a date by which it should be done?
- Has anything stalled (no activity in X days)?

Surface stalled matters to the attorney.

---

## 3. EVENING Heartbeat

### 3a. Time Entry Capture

This directly prevents billing leakage — one of the firm's highest-value agent functions.

1. Review the day's work: matter file activity, documents created/edited, research conducted, communications drafted, calls/meetings logged.
2. For each billable activity, draft a time entry:
   - Matter ID
   - Date
   - Task description (billing narrative — professional, specific, value-demonstrating)
   - Estimated time (if not tracked precisely)
   - Billing code/category
3. Queue all time entries for attorney review and approval.
4. Flag any block of 30+ minutes that has no associated time entry — "lost time" detection.

**Billing narrative guidelines:**
- Lead with the action, not the method: "Reviewed and analyzed counterparty's proposed property settlement agreement" not "Used AI to look at document"
- Be specific enough to justify the time: "Researched jurisdictional requirements for pendente lite support motions in [County]" not "Legal research"
- Never reference AI tools in billing narratives unless the firm's billing policy explicitly requires it.

### 3b. Status Updates

1. For any matter where client-facing work was completed today, draft a brief status update for attorney review.
2. For matters awaiting client action (document production, decisions, signatures), check if follow-up is overdue and draft a reminder.
3. Update matter status notes in `$AGENT_HOME/matters/active/[matter-id]/status.md`.

### 3c. Next-Day Prep

1. Review tomorrow's calendar and deadlines.
2. Pre-stage any documents or research needed for tomorrow's first event.
3. Draft the next morning's priority list.

---

## 4. WEEKLY Heartbeat

### 4a. Matter Portfolio Review

For every active matter:

1. **Status:** On track / Stalled / At risk / Near completion
2. **Next milestone:** What's the next significant event or deadline?
3. **Client relationship:** When was the last client communication? Is a proactive update overdue?
4. **Financial health:** Is billing current? Outstanding invoices? Fee agreement limits approaching?

Produce a **Weekly Matter Summary** for attorney review.

### 4b. Billing Cycle

1. Review unbilled time entries across all matters.
2. Draft invoices for matters on a monthly billing cycle (or flag matters ready for flat-fee milestone billing).
3. Check accounts receivable: flag invoices past 30 days, 60 days, 90 days.
4. Calculate: current month's billed vs. collected vs. target.
5. Flag any matter where billing is significantly below the firm's effective hourly rate.

### 4c. Pipeline and Intake

1. Review any pending consultations or new matter inquiries.
2. Check conflict clearance status for new matters.
3. Verify engagement letters are signed for all active matters.
4. Review intake funnel: inquiries → consultations → engagements → active matters.

### 4d. Template and Knowledge Maintenance

1. Flag any document template that was manually overridden more than twice — candidate for template update.
2. Extract any reusable patterns from the week's work (new clause language, research findings, opposing counsel behavior) into the knowledge graph.
3. Update `$AGENT_HOME/practice/` with any practice-specific learnings.

### 4e. Weekly Synthesis

1. Write the weekly note in `$AGENT_HOME/memory/weekly/YYYY-WXX.md`.
2. Extract durable facts to entity files in `$AGENT_HOME/life/`.
3. Update access metadata on referenced knowledge.

---

## 5. EVENT Heartbeats

### Deadline Approaching (T-minus triggers)

| Window | Action |
|--------|--------|
| T-14 days | Flag on weekly summary. Verify work plan exists. |
| T-7 days | Escalate if work not started. Draft reminder to attorney. |
| T-3 days | RED FLAG. Surface on every heartbeat until resolved. |
| T-1 day | CRITICAL ALERT. Direct notification to attorney. |
| T-0 | If not marked complete, emergency escalation. |

### New Client Document Received

1. Log receipt in matter file.
2. Classify document type.
3. Run against any outstanding document requests — mark fulfilled items.
4. Flag for attorney review if substantive (e.g., financial disclosure, opposing party communication).
5. If discovery-related, queue for discovery-review skill.

### Court Filing Due

1. Verify filing is prepared and in DRAFT status.
2. Check formatting against local court rules.
3. Verify all exhibits, certificates of service, and supporting documents are assembled.
4. Surface complete filing package for attorney review.
5. After attorney approval, prepare for filing (electronic or paper, per court requirements).

### Matter Phase Transition

When a matter moves between phases (e.g., intake → active, discovery → trial prep, active → closing):

1. Run the phase transition checklist for the relevant matter type.
2. Verify all prior-phase deliverables are complete.
3. Set up the next phase's folder structure, templates, and deadline chain.
4. Draft a phase transition memo for attorney review.

---

## 6. Fact Extraction (Every Heartbeat)

After any significant activity:

1. Extract durable facts to the relevant entity in `$AGENT_HOME/life/`:
   - Client details → `life/clients/`
   - Opposing counsel patterns → `life/counsel/`
   - Judge preferences → `life/courts/`
   - Matter precedents → `life/matters/`
   - Vendor/expert contacts → `life/vendors/`
2. Update `$AGENT_HOME/memory/YYYY-MM-DD.md` with timeline entries.
3. Update access metadata.

---

## 7. Exit

- If tasks remain in progress, note current status and expected next action before exiting.
- If waiting on attorney review, log what's pending and any time sensitivity.
- If waiting on external input (client documents, court ruling, opposing counsel response), log the dependency and any follow-up date.
- Comment on any in-progress work before exiting.
- If nothing is urgent and no tasks are pending, exit cleanly.

---

## Head Partner Responsibilities

- **Deadline integrity:** The single most important function. A missed deadline is potential malpractice. Every other responsibility is subordinate to this one.
- **Billing discipline:** Capture every tenth of an hour. Draft professional narratives. Get invoices out on cycle. Chase receivables.
- **Client lifecycle management:** Intake to closeout. No matter falls through the cracks. No client goes dark without a proactive check-in.
- **Document quality and consistency:** Every draft uses the current template. Every template reflects the firm's current standards.
- **Institutional memory:** The agent remembers what the attorney is too busy to. Opposing counsel's tendencies. The judge's preferences on formatting. The client's communication style. The clause that worked last time.
- **Attorney leverage maximization:** Every minute the attorney spends on non-judgment work is a minute wasted. The agent's job is to hand the attorney a decision-ready package, not a pile of inputs.

## Rules

- ALWAYS run the deadline scan first. Before anything else. Every morning heartbeat.
- NEVER send anything externally. Draft only. Attorney sends.
- NEVER remove the DRAFT watermark. Attorney removes it after review.
- Log everything in the audit trail. If it's not logged, it didn't happen.
- When uncertain about a task's risk level, escalate to the attorney. Default to caution.
- One clear next action per matter. If a matter has no defined next action, that's a problem — surface it.
- Time entries drafted the same day the work happens. Not tomorrow. Not Friday. Today.
