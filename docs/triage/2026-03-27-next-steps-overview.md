# Next Steps Overview

## User Prompt

> We need to pause the homepage redesign plan pending owner response. I want to continue development on this project. What would you suggest based on the b50c959 docs: add repository triage notes

## Recommendation Summary

Based on `b50c959` `docs: add repository triage notes`, the best next focus is the resource directory. It is the clearest functional part of the site, and the triage notes already identify concrete UX and code-quality issues there.

## Suggested Development Priorities

1. Improve the resource directory UX.

The triage notes suggest the stakeholder concern is probably not literally "empty sections" but sparse-looking content and the full A-Z navigation showing many disabled letters. Start by revising `components/AlphabetNav.tsx` so it either shows only active letters or makes inactive letters much less prominent. This is the most directly supported improvement from `docs/sahc-repository-triage.md`.

2. Remove rendering drift in the resource subsystem.

The triage notes flagged likely duplication between `app/resources/page.tsx` and `components/ResourceCard.tsx`. The standalone `ResourceCard` component has since been removed as dead code, so the remaining follow-up is to keep `app/resources/page.tsx` as the canonical rendering path and only extract a shared component later if reuse is needed.

3. Fix the resource schema mismatch.

The notes mention data entries with a `type` field that is not represented in `types/resources.ts`. This is a good small technical cleanup task: either formalize the field in the type definitions or remove or ignore it consistently. It is low-risk and improves confidence in future data changes.

4. Define a lightweight content-submission path before considering a database.

The stakeholder-context doc argues against jumping to a database now because maintainership is weak and traffic or contributor volume is unknown. Instead of building CRUD tooling, implement a simple submission flow for resource corrections or additions first. That aligns with `docs/stakeholder-context/resource-management-context.md` and the backlog item in `docs/backlog/emerging-work.md`.

5. Add analytics before larger architecture bets.

The triage backlog explicitly mentions analytics. That matters because the stakeholder context says future decisions should depend on demonstrated traffic and contribution patterns. Measuring usage now is more defensible than building a database now.

## Practical Sequence

1. Resource nav cleanup (branch created)
2. Resource rendering cleanup follow-up
3. Schema cleanup
4. Submission flow
5. Analytics

## Suggested Immediate Start

Begin with resource directory cleanup, especially the alphabetical navigation behavior and the active rendering path for resource cards.
