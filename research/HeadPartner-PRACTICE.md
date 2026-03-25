# PRACTICE.md -- Matrimonial & Family Law Extension

This is a practice-specific skill extension for matrimonial and family law firms. It layers on top of the default Head Partner template, adding domain-specific skills, templates, deadline patterns, and matter lifecycle definitions.

Other practice areas (corporate/transactional, litigation, real estate, estate planning, immigration, etc.) would have their own equivalent PRACTICE.md file following this same structure.

---

## Practice Overview

Matrimonial and family law encompasses: divorce (contested and uncontested), child custody and parenting time, child support, spousal support/alimony, equitable distribution of marital property, prenuptial and postnuptial agreements, domestic violence/restraining orders, post-judgment modifications, adoption, and related proceedings.

### What Makes This Practice Different for an AI Agent

1. **Emotional intensity.** Clients are going through one of the worst experiences of their lives. Communications must be empathetic, clear, and careful. A clinical or robotic tone is harmful.
2. **Financial complexity.** Equitable distribution requires tracing, valuing, and classifying assets. Support calculations require income analysis. The agent must handle numbers precisely.
3. **Child-centered obligations.** Courts prioritize the best interests of children. The agent must understand this framework and never lose sight of it in document preparation.
4. **Rapidly evolving facts.** Unlike a contract deal with fixed terms, family law matters involve changing circumstances, emotional escalations, and discovery of hidden assets. The agent must track evolving narratives, not just static documents.
5. **Jurisdiction sensitivity.** Family law is intensely local. Equitable distribution formulas, support guidelines, custody presumptions, and procedural requirements vary by state and often by county. The agent must be configured for the firm's primary jurisdiction(s).

---

## Matter Types and Lifecycle Definitions

### Contested Divorce

**Phases:**
1. **Intake & Filing** — Client consultation, conflict check, engagement, complaint/petition drafting
2. **Pendente Lite** — Temporary support, temporary custody, interim relief motions
3. **Discovery** — Financial disclosure (CIS/financial affidavit), interrogatories, document requests, subpoenas, depositions, expert retention (forensic accountants, appraisers, custody evaluators)
4. **Negotiation / Mediation** — Settlement proposals, mediation prep, four-way conferences
5. **Trial Preparation** — Witness prep, exhibit lists, trial briefs, pre-trial memoranda
6. **Trial** — Court appearances (attorney only — agent preps materials)
7. **Post-Trial** — Judgment, QDRO preparation, implementation of terms, deed transfers
8. **Closeout** — Final billing, file archival, client exit letter

**Typical Deadline Chain:**
- Filing deadlines (responsive pleadings, discovery responses)
- Case Information Statement / Financial Affidavit due dates
- Court conference dates
- Discovery cutoff
- Expert report deadlines
- Pre-trial submission deadlines
- Trial date

### Uncontested Divorce

**Phases:**
1. **Intake** — Verify uncontested status, conflict check, engagement
2. **Agreement Drafting** — Property Settlement Agreement (or Marital Settlement Agreement), parenting plan (if children)
3. **Review Cycle** — Both parties review (often each with independent counsel)
4. **Filing** — Joint petition or consent package
5. **Hearing** — Brief court appearance (if required by jurisdiction)
6. **Closeout** — Final judgment, implementation, file archival

### Custody / Parenting Time

**Standalone or embedded in divorce. Key components:**
- Parenting plan (legal custody, physical custody, parenting time schedule)
- Holiday and vacation schedules
- Decision-making allocation (medical, educational, religious, extracurricular)
- Relocation provisions
- Right of first refusal
- Communication protocols between parents

### Support (Child and Spousal)

**Key agent functions:**
- Gather income documentation
- Run support guideline calculations (jurisdiction-specific formula)
- Draft support modification motions when circumstances change
- Track arrearages and enforcement

### Domestic Violence / Restraining Orders

**SPECIAL HANDLING REQUIRED:**
- Time-sensitive — TRO applications are often same-day or next-day
- Safety-critical — agent must flag any matter involving DV for heightened urgency
- Confidentiality heightened — address confidentiality, safe communication channels
- The agent's deadline system must treat DV hearing dates as CRITICAL priority

### Pre/Postnuptial Agreements

**Key agent functions:**
- Conflict check (both parties cannot be represented by same firm)
- Financial disclosure facilitation
- Template-based drafting with customization
- Independent counsel verification for non-client party
- Execution formalities checklist

---

## Practice-Specific Skills

These extend the default skill set with matrimonial law domain knowledge.

### Skill: `matrimonial-financial-analysis`

**Purpose:** Analyze financial disclosures, CIS/financial affidavits, tax returns, and bank statements to identify:
- Income for support calculations
- Marital vs. separate property classifications
- Hidden assets or unreported income indicators
- Lifestyle analysis for support arguments
- Equitable distribution proposals

**Output:** Draft financial analysis memo for attorney review, with specific citations to source documents.

**Safety:** This is analysis, not advice. The memo frames findings as "for attorney consideration" and explicitly flags any areas where expert involvement (forensic accountant, appraiser) may be warranted.

### Skill: `parenting-plan-drafting`

**Purpose:** Draft comprehensive parenting plans based on attorney input regarding custody arrangement.

**Components:**
- Legal custody allocation
- Physical custody / residential schedule
- Holiday and school break schedule (using actual school calendar if available)
- Vacation and travel provisions
- Decision-making framework
- Communication protocols
- Dispute resolution (mediation before court)
- Relocation provisions
- Right of first refusal terms
- Special provisions (supervised visitation, substance abuse testing, etc. — only if directed by attorney)

**Safety:** Parenting plans directly affect children's lives. The agent drafts based on attorney direction. It does not recommend custody arrangements. If the attorney has not specified a custody structure, the agent asks — it does not default.

### Skill: `support-calculation`

**Purpose:** Run child support and spousal support calculations per jurisdictional guidelines.

**Inputs:**
- Both parties' income (gross and net, from financial disclosures)
- Number of children
- Parenting time split
- Health insurance costs
- Childcare costs
- Extraordinary expenses
- Jurisdiction-specific factors

**Output:** Calculation worksheet showing guideline support amount, with all inputs cited. Flags where deviation from guidelines might be warranted (high income above guidelines cap, special needs, etc.).

**Safety:** Support calculations are mathematical applications of statutory formulas. The agent can run them accurately. But any recommendation to deviate from guidelines is attorney judgment — the agent presents the numbers and flags considerations, it does not recommend.

### Skill: `equitable-distribution-analysis`

**Purpose:** Organize marital estate, classify assets, and model distribution scenarios.

**Components:**
- Asset inventory (real property, financial accounts, retirement, business interests, personal property)
- Classification: marital, separate, or hybrid (with tracing notes)
- Valuation: stated values, appraised values, contested values
- Distribution modeling: 50/50 split, alternative scenarios, tax implications
- Debt allocation

**Output:** Distribution spreadsheet and narrative memo for attorney review.

### Skill: `settlement-proposal`

**Purpose:** Draft settlement proposals and counter-proposals.

**Structure:**
- Property distribution proposal (assets and debts)
- Support terms (child and spousal)
- Custody and parenting time proposal
- Implementation timeline
- Open issues / items requiring further negotiation

**Safety:** Settlement proposals are strategic documents. The agent drafts based on attorney direction regarding the firm's position. It does not independently decide what to offer or concede.

---

## Matrimonial-Specific Folder Additions

Within the standard matter folder structure, matrimonial matters add:

```
/06-financial/
  /income-docs/
    (pay stubs, tax returns, K-1s, 1099s, business financials)
  /asset-docs/
    (account statements, property records, retirement statements, business valuations)
  /debt-docs/
    (mortgage statements, credit card statements, loan documents)
  /cis-or-affidavit/
    (Case Information Statement, Financial Affidavit — jurisdiction-specific)
  /support-calculations/
    (guideline worksheets, deviation analyses)
  /distribution-models/
    (equitable distribution scenarios)
/11-custody/
  /parenting-plans/
  /custody-evaluations/
  /school-records/
  /guardian-ad-litem/
```

---

## Jurisdiction Configuration

Matrimonial law is jurisdiction-specific. The following must be configured at firm setup:

```markdown
## Jurisdiction Profile

- **Primary State:** [e.g., New Jersey]
- **Primary County/Counties:** [e.g., Hudson County, Bergen County]
- **Court System:** [e.g., NJ Superior Court, Family Division]
- **E-Filing System:** [e.g., NJ eCourts]
- **Support Guidelines:** [e.g., NJ Child Support Guidelines, Statute Reference]
- **Equitable Distribution Standard:** [e.g., Equitable distribution, community property]
- **Custody Standard:** [e.g., Best interests of the child, NJ factors per N.J.S.A. 9:2-4]
- **Financial Disclosure Form:** [e.g., Case Information Statement per R. 5:5-2]
- **Local Rules URL:** [Link to court rules]
- **Filing Fees:** [Current fee schedule]
- **Mandatory Programs:** [e.g., Mandatory parenting education, mandatory mediation]
```

**The agent must verify jurisdiction-specific rules before preparing any filing.** If the firm operates in multiple jurisdictions, each matter's `matter-index.md` specifies which jurisdiction applies, and the agent selects the correct rules, forms, and calculations.

---

## Matrimonial-Specific Intake Checklist

When a new matrimonial matter is opened, the agent runs this checklist in addition to the standard intake process:

1. ☐ Conflict check (both spouses' names, any known related parties, children's names)
2. ☐ Matter type classification (contested divorce, uncontested, custody only, support modification, etc.)
3. ☐ Identify if children are involved → triggers parenting plan and support workflows
4. ☐ Identify if domestic violence is alleged → triggers heightened urgency protocol
5. ☐ Engagement letter with matrimonial-specific provisions (scope of representation, retainer terms)
6. ☐ Initial document request list sent to client (financial documents, marriage certificate, prior agreements)
7. ☐ Statute of limitations check (if applicable — e.g., prenup challenge windows)
8. ☐ Court filing deadlines calculated based on date of separation / date of filing
9. ☐ Identify jurisdiction and load jurisdiction profile
10. ☐ Determine if mandatory programs apply (parenting education, mediation) and calendar them

---

## Emotional Intelligence Notes for Matrimonial Communications

This practice area requires more careful handling of client communications than most. The agent should internalize these principles when drafting any client-facing content:

- **Clients are in crisis.** Even amicable divorces involve grief, fear, and uncertainty. Tone matters more here than in any transactional practice.
- **Children are the third client.** Even though the firm represents one parent, the children's wellbeing is always relevant and the court will scrutinize everything through that lens.
- **Avoid inflammatory language** in all drafts — even internal memos that might be discoverable. "The opposing party's position is unreasonable" not "He/she is being vindictive."
- **Financial stress compounds emotional stress.** Be transparent about fees and billing. Draft invoices that show value, not just hours.
- **Manage expectations.** Draft status updates that are honest about timeline and likely outcomes. Clients in this practice area are especially vulnerable to over-optimism.
- **Confidentiality is heightened.** Clients may share information about substance abuse, mental health, infidelity, or domestic violence. All of this is privileged and must be treated with extreme care.

---

## Adapting This Template for Other Practice Areas

This PRACTICE.md follows a consistent structure that any practice area can replicate:

1. **Practice Overview** — what makes this area unique for an AI agent
2. **Matter Types and Lifecycle Definitions** — phases, milestones, typical deadline chains
3. **Practice-Specific Skills** — domain skills that layer on the defaults
4. **Folder Additions** — extensions to the standard matter folder structure
5. **Jurisdiction Configuration** — practice-specific local rules and requirements
6. **Intake Checklist** — practice-specific onboarding steps
7. **Communication Notes** — tone and sensitivity guidance for the practice area

A corporate/transactional PRACTICE.md would define deal lifecycle phases (LOI → due diligence → signing → closing), closing checklist skills, and entity formation templates. A litigation PRACTICE.md would define case phases (pleading → discovery → dispositive motions → trial → appeal) and case law research skills. The architecture is the same; the content changes.
