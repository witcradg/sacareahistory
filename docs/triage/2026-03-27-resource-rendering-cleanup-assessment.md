# Resource Rendering Cleanup Assessment

## Summary

The rendering cleanup issue was real. `components/ResourceCard.tsx` was dead code and has now been removed. `app/resources/page.tsx` is the actual rendering surface for the resource directory.

## Findings

- `components/ResourceCard.tsx` was not imported anywhere else in the repository.
- `app/resources/page.tsx` renders resource cards inline and contains its own nested rendering helpers for resource items and subcategories.
- The two implementations were not equivalent.

## Current Canonical Rendering Path

The canonical rendering path is `app/resources/page.tsx`.

That file currently owns:

- section structure
- search integration
- letter grouping
- top-level resource rendering
- subcategory rendering
- ordering of top-level resources relative to subcategories
- current styling and accessibility labels

## Why `components/ResourceCard.tsx` Was Not Adopted

The standalone `ResourceCard` implementation was simpler than the rendering logic now used in the page and would likely have introduced regression if swapped in directly.

Notable differences:

- it lacks the page's richer layout structure
- it does not reflect the current conditional ordering of top-level resources and subcategories
- it uses simpler presentation
- it lacks some of the current page-level accessibility and UI treatment

## Actual Problem

The problem is not uncertainty about which implementation is live.

The problem was that rendering responsibilities were conceptually split between:

- an unused standalone component
- a page-level inline implementation

This creates:

- confusion about which code should be modified
- maintenance risk
- a higher chance of future divergence

## Recommendation

### Short-Term Low-Risk Cleanup

1. Treat `app/resources/page.tsx` as the canonical implementation.
2. Remove `components/ResourceCard.tsx` once confirmed obsolete.

This was the fastest way to eliminate ambiguity and has now been completed.

### Better Structural Follow-Up

After cleanup, extract the current inline rendering logic from `app/resources/page.tsx` into a new shared component that reflects the page's actual current behavior.

Important constraint:

Do **not** refactor the page to use the removed `components/ResourceCard.tsx` implementation as the basis for reuse. If a shared component is created, it should be extracted from the page's existing rendering behavior, not from the older standalone component.

## Recommended Sequence

1. Confirm `components/ResourceCard.tsx` is obsolete.
2. Remove it.
3. Leave `app/resources/page.tsx` behavior unchanged.
4. If further cleanup is needed, extract a new canonical component from the current page implementation.

## Practical Decision

If the goal is low-risk cleanup now, the dead component has already been removed. The next rendering cleanup should be a deliberate extraction from `app/resources/page.tsx` only if reuse becomes necessary.
