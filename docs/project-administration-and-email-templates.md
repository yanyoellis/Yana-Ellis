# Project Administration Notes

These notes are for Yana Ellis only. They are not legal advice and are not shown as public site copy.

## Recorded Submission Fields

Each calculator request should include:

- `requestId`
- `interfaceLanguage`
- `market`
- `calculatorContext.calculatorVersion`
- `calculatorContext.pricingConfigurationVersion`
- `legal.termsAccepted`
- `legal.termsVersion`
- `legal.termsAcceptedAt`
- `legal.privacyAccepted`
- `legal.privacyVersion`
- `legal.privacyAcceptedAt`
- `designerCredit.selected`
- `designerCredit.accepted`
- `designerCredit.termsVersion`
- `designerCredit.acceptedAt`
- `designerCredit.status`
- `administration.timeline`

Designer credit status values:

- `none`
- `active`
- `temporarilyMissing`
- `curePeriod`
- `repaymentDue`
- `removedByAgreement`

## Timeline Event Types

Use these event types if the project is later moved to a database or CRM:

- `request_submitted`
- `terms_accepted`
- `designer_credit_status`
- `proposal_sent`
- `proposal_accepted`
- `payment_received`
- `materials_requested`
- `materials_received`
- `client_followup_sent`
- `project_paused`
- `project_archived`
- `project_reactivated`
- `scope_change_requested`
- `scope_change_approved`
- `cancellation_requested`
- `termination_notice_sent`
- `designer_credit_notice_sent`
- `designer_credit_restored`
- `complaint_received`
- `complaint_resolved`

## Email Templates

### Missing Materials

Subject: Materials needed to continue your website project

Hi [Client Name],

I need the following materials before I can continue the next stage: [list]. The current timeline may move if these are delayed. Please send them by [date] or let me know if you need a pause.

### Client Inactivity Follow-Up

Subject: Follow-up on your website project

Hi [Client Name],

I have not received the information needed to continue: [details]. If I do not hear back by [date], I may need to pause the project and reschedule the remaining work based on availability.

### Project Pause Confirmation

Subject: Website project paused

Hi [Client Name],

As discussed, the project is paused from [date]. When you are ready to return, I will review availability, project state and any technical changes before confirming a new schedule.

### Reactivation Review

Subject: Reactivating your website project

Hi [Client Name],

I can review reactivation. Before confirming a new schedule, I need to check the current scope, files, third-party services and any changes since the pause.

### Cancellation Balance

Subject: Project cancellation balance

Hi [Client Name],

I have reviewed the project stage and payments. The balance is calculated against completed work, discovery/planning, reserved production time and agreed external costs. I will send the itemised summary separately.

### Late Payment

Subject: Payment needed before the next project stage

Hi [Client Name],

The next stage payment is overdue. Work may pause until the payment is received. Launch, transfer or unrestricted administrator access may also wait until due amounts are paid.

### Designer Credit Notice

Subject: Designer credit restoration notice

Hi [Client Name],

The agreed designer credit appears to be removed, hidden, disabled or materially changed. Please restore the agreed credit within 7 calendar days or contact me if you believe this is incorrect. If it is not restored within the cure period, the original discount amount may become payable.

### Formal Complaint Reply

Subject: Complaint received

Hi [Client Name],

I received your complaint about [issue]. I will review the request ID, project history, proposal terms and evidence provided, then respond in writing with the next step.

## Legal Review Reminder

Before using these terms with paid client work, confirm local requirements for consumer rights, refunds, cancellation fees, tax, privacy, electronic signatures, jurisdiction and business disclosures.
