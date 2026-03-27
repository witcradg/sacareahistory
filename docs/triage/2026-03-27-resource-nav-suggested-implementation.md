# Resource Nav Suggested Implementation

see docs/triage/2026-03-27-next-steps-overview.md

## Discussion Context

This note is intended to help discuss the current resource directory navigation issue with the site owner before implementation.

## Observed Issue

The resource directory does **not** render empty alphabetical content sections.

However, the alphabetical navigation currently displays the full A-Z list, including many letters that have no associated resources. Those unavailable letters are shown in a disabled visual state.

This creates a mismatch:

- The content area only shows letters that actually contain resources.
- The navigation area shows all letters, including unavailable ones.

## Why This May Be a Problem

Even though the disabled letters are technically correct, they may create the impression that:

- the directory is incomplete
- content is missing
- the site has many placeholders that have not been filled in yet

This may contribute to the stakeholder perception that the resource section feels sparse or unfinished.

## Suggested Interpretation

The issue may not be "empty sections" in the directory itself.

The more likely issue is that the navigation visually emphasizes how many letters do **not** currently contain resources, which makes the directory feel less complete than it really is.

## Suggested Implementation

### Preferred Option

Show only letters that currently have resources.
[
dgw: Perhaps we show a section for each letter and for those with no links. Show a brief message. Something like:

    K. Currently no available resources. Let us know if you can suggest one more more.

--too verbose - ask AI for suggestions
]

Benefits:

- removes the visual suggestion of missing content
- keeps the navigation focused on usable destinations
- better matches the behavior of the content area itself

Tradeoff:

- users no longer see the full A-Z frame of the directory

### Conservative Option

Keep the full A-Z navigation, but de-emphasize inactive letters much more strongly.

Possible approaches:

- render inactive letters as plain text instead of buttons
- reduce contrast further so unavailable letters read as background reference rather than disabled controls
- separate active letters from inactive letters visually

Benefits:

- preserves the sense of a full alphabetical directory
- still reduces the "unfinished" feeling

Tradeoff:

- the page may still suggest missing or future content, just less strongly

### Mobile Consideration

The current alphabet navigation is hidden on small screens.

If navigation changes are made, it may also be worth discussing whether mobile users should receive:

- a compact active-letter list
- a dropdown or jump menu
- no alphabet navigation at all on mobile

## Recommended First Step

If the goal is to make the resource directory feel more complete and more usable without major redesign, the best first implementation is:

1. show only active letters in the resource navigation
2. keep the content sections unchanged
3. review whether the result feels clearer to the owner before making broader directory changes

## Owner Discussion Prompt

Suggested question:

"Right now the resource page only shows content for letters that actually have resources, but the side navigation still shows the full alphabet with many disabled letters. That may make the directory feel incomplete. Would you prefer the navigation to show only letters with content, or keep the full alphabet as a visual reference?"
