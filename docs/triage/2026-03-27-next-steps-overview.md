# Next Steps Overview

## User Prompt

> We need to pause the homepage redesign plan pending owner response. I want to continue development on this project. What would you suggest based on the b50c959 docs: add repository triage notes

## Recommendation Summary

Based on `b50c959` `docs: add repository triage notes`, the best next focus is the resource directory. It is the clearest functional part of the site, and the triage notes already identify concrete UX and code-quality issues there.

## Status Update

Completed since the original triage:

1. Basic analytics
2. Resource schema cleanup, first pass
3. Resource rendering cleanup, phase 1

Current review implementation:

- `/test-resource` now exists as a stakeholder review version of the resources page
- `/resources` remains unchanged as the current production version

Still open:

1. Resource nav cleanup
2. Submission flow
3. Decision on whether the test resource page should replace the current resources page

## Suggested Development Priorities

1. Improve the resource directory UX.

The triage notes suggest the stakeholder concern is probably not literally "empty sections" but sparse-looking content and the full A-Z navigation showing many disabled letters. Start by revising `components/AlphabetNav.tsx` so it either shows only active letters or makes inactive letters much less prominent. This is the most directly supported improvement from `docs/sahc-repository-triage.md`.

2. Remove rendering drift in the resource subsystem.

The triage notes flagged likely duplication between `app/resources/page.tsx` and `components/ResourceCard.tsx`. The standalone `ResourceCard` component has since been removed as dead code, and a new review implementation now exists at `/test-resource` using a new extracted `ResourceDirectoryCard` component. The remaining decision is whether that review version should replace the current `/resources` page.

3. Fix the resource schema mismatch.

This first-pass cleanup has been completed. The resource types now better match the actual JSON data and placeholder resource entries without URLs are handled safely in the rendering path used for the review page.

4. Define a lightweight content-submission path before considering a database.

The stakeholder-context doc argues against jumping to a database now because maintainership is weak and traffic or contributor volume is unknown. Instead of building CRUD tooling, implement a simple submission flow for resource corrections or additions first. That aligns with `docs/stakeholder-context/resource-management-context.md` and the backlog item in `docs/backlog/emerging-work.md`.

5. Add analytics before larger architecture bets.

This has been completed with basic Vercel Analytics so future decisions can rely more on actual usage.

## Practical Sequence

1. Resource nav cleanup
2. Review decision for `/test-resource`
3. Submission flow

## Suggested Immediate Start

The next highest-value implementation work is resource nav cleanup, followed by a lightweight submission flow.
