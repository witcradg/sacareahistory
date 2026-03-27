# Analytics Assessment

## Summary

There is currently no analytics implementation in the application.

The most practical next step is to add basic pageview analytics with the least possible operational overhead so future decisions can be based on actual usage rather than assumptions.

## Completion Note

Basic Vercel Analytics has now been implemented.

## Findings

- no analytics package is currently installed
- no tracking code appears in the application layout or elsewhere
- the supporting stakeholder context suggests future architecture decisions should depend on demonstrated traffic and contributor interest

## Recommended Direction

Add basic pageview analytics now.

Keep the first implementation minimal and low-maintenance.

Do not begin with custom event architecture or a larger tracking project.

## Best First Implementation Options

### Option 1

If the site is deployed on Vercel, add Vercel Analytics.

Why:

- lowest implementation overhead
- minimal setup
- sufficient for initial pageview visibility

### Option 2

If the owner specifically wants Google reporting, add GA4 using a Measurement ID from environment configuration.

Why:

- familiar reporting model
- easy to understand for non-technical stakeholders
- supports later event tracking if needed

## What To Track First

Start with pageviews only.

Possible later additions:

- outbound clicks on resource links
- membership update mailto clicks
- submission CTA clicks if a submission flow is added

## What Not To Build First

- no elaborate event taxonomy
- no analytics dashboard inside the application
- no analytics-driven content management workflow
- no broader tracking initiative unless a clear stakeholder need emerges

## Why This Matters

The main purpose of analytics at this stage is decision support.

The organization needs to learn:

- whether the site is being used
- which pages matter most
- whether investment in submission workflows or heavier resource-management tooling is justified

## Practical Sequence

1. Decide on provider: Vercel Analytics or GA4.
2. Add the base tracking to the global layout.
3. Verify that pageviews are being captured.
4. Add a very small number of meaningful events later if needed.

## Practical Decision

If development starts here, the correct target is basic pageview analytics that helps validate traffic and inform future planning, not a large analytics implementation.
