# Resource Schema Cleanup Assessment

## Summary

The schema cleanup issue is more serious than the triage note originally suggested.

The mismatch is not just `type`.

## Completion Note

The first-pass schema cleanup has now been completed:

- resource types were aligned more closely with the actual JSON data
- placeholder resource entries without URLs are now handled safely in rendering
- the misleading schema mismatch has been reduced without forcing a data migration

## Findings

- `types/resources.ts` does not include `type`, but the JSON data uses `"type": "category"` extensively in `data/master.json` and the segmented data files.
- `CategoryItem.resources` is currently required in `types/resources.ts`, but many subcategories in `data/master.json` have only a `title` and no `resources`.
- `app/resources/page.tsx` bypasses type safety by casting the JSON import directly with `const typedData = masterData as ResourceData;`.

## Current Problem

The TypeScript schema does not accurately describe the actual dataset.

At the moment, the schema reflects an idealized structure rather than the real content in the JSON files.

As a result:

- the declared types are misleading
- the cast in `app/resources/page.tsx` hides real mismatches
- TypeScript is not providing meaningful protection for this data path

## Recommended Direction

The safest first cleanup is to make the types reflect the real dataset before attempting stricter cleanup or validation.

### Recommended changes

- add `type?: "category"` to `Resource`
- change `CategoryItem.resources` from required to optional
- keep existing optional structures where they already match the data
- review whether any additional fields should be optional based on the actual JSON

## What Not To Do First

- do not remove all `type` fields from the JSON as a first step
- do not try to clean every sparse or placeholder category immediately
- do not add strict runtime validation before the interfaces match reality

## Practical Sequence

1. Update `types/resources.ts` to match the current dataset.
2. Reduce or remove misleading casts where possible.
3. Add lightweight validation or normalization later if stricter guarantees are needed.

## Practical Decision

If the goal is low-risk cleanup now, start by aligning the TypeScript schema with the current JSON data rather than forcing the data to match the existing interfaces.
