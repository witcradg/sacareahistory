# Submission Flow Assessment

## Summary

The codebase currently has no real submission workflow.

The site relies on plain email handoff in multiple places, and the most practical next step is to create a lightweight submission flow that improves intake without introducing a database or admin system.

## Current State

- There is no structured submission workflow in the application.
- Resource-related messaging currently points users to `sacarea@winfirst.com`.
- Similar email-based update patterns already exist elsewhere in the site.

## Relevant Context

The supporting documentation suggests:

- a public submission form for suggesting new resources may be useful
- Resend could be considered for delivering submission emails
- a database-backed editing system is probably too heavy for the current operational model

The stakeholder context also makes clear that there is not currently a strong technical maintenance model for ongoing data administration.

## Recommended Direction

Do not start with CRUD tooling, a database, or a review dashboard.

Start with a lightweight submission path that captures resource suggestions and corrections and delivers them through the organization's existing email workflow.

## Recommended First Implementation

Create a simple "Suggest a Resource or Correction" submission flow.

Likely elements:

- a visible CTA on the resources page
- a small form for resource suggestions and corrections
- delivery to `sacarea@winfirst.com`
- no direct write into JSON or a database

## Suggested Form Fields

- submitter name
- submitter email
- submission type: new resource or correction
- category or section
- title
- URL
- description
- notes

## Delivery Recommendation

Preferred initial delivery model:

- server action or route handler
- send a structured email to `sacarea@winfirst.com`

Possible implementation detail:

- use Resend if reliable transactional email delivery is desired

This keeps the workflow aligned with current site operations while making submissions easier and more structured.

## What Not To Build First

- no admin dashboard
- no database-backed CRUD system
- no direct editing of JSON through the site
- no internal moderation queue unless submission volume proves it is needed

## Why This Is The Right First Step

- it reduces friction for visitors who want to suggest additions or corrections
- it fits the current email-based operating model
- it avoids creating operational burden the organization may not be able to support
- it creates evidence about actual submission volume before larger architecture decisions are made

## Practical Sequence

1. Define the exact intake fields.
2. Add a visible submission CTA on the resources page.
3. Implement the form.
4. Deliver submissions by email.
5. Add lightweight spam protection if needed.

## Practical Decision

If development starts here, the correct target is a thin submission funnel layered on top of the current email-based operating model, not a full content-management workflow.
