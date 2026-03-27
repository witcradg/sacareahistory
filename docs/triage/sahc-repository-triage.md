## Subsystem Inspection

After repository discovery, specific subsystems should be inspected
to understand how the application behaves before proposing changes.

The first subsystem selected for inspection is the **Resource Directory**
because it is:

- the primary functional area of the site
- the location of a known stakeholder design concern
- likely to influence future architecture decisions

The following files should be reviewed:

app/resources/page.tsx  
components/AlphabetNav.tsx  
components/ResourceCard.tsx  
types/resources.ts

Additionally, at least one resource data file should be inspected:

data/resources-a-d.json

### Purpose of Inspection

This inspection should determine:

- how resources are loaded
- how alphabetical sections are generated
- how empty sections are rendered
- how resource cards are constructed
- how tightly presentation is coupled to data structure

The results will inform the architecture assessment and potential
changes to the resource directory presentation.

### Inspection: `app/resources/page.tsx`

#### Purpose

This file is the main orchestration layer for the resource directory page.

It:

- imports the canonical resource dataset from `data/master.json`
- groups resources by the first letter of each top-level resource title
- sorts resources alphabetically within each letter group
- supports client-side search
- renders the main directory sections and resource cards
- delegates alphabet navigation to `AlphabetNav`

#### Findings

1. The active implementation appears to use `data/master.json` as the primary data source rather than the segmented `resources-a-d.json` style files.
2. Alphabetical grouping is computed dynamically at runtime from resource titles.
3. Only letters that actually contain resources are rendered.
4. Search is client-side and checks top-level resource titles/descriptions as well as nested subcategory and resource text.
5. The page is implemented as a client component (`"use client"`), so grouping and filtering logic run in the browser.

#### Implications

The stakeholder concern about “empty sections” may not refer to literal empty alphabetical headings, since this file does not render letters with zero resources.

The more likely issue is that some rendered sections or cards still appear visually sparse, incomplete, or under-populated.

This shifts the design problem from:

- hiding empty sections

toward:

- improving presentation of sparse content while preserving the sense that the directory is intended to grow.

### Inspection: `components/AlphabetNav.tsx`

#### Purpose

This component renders the alphabetical navigation panel for the resource directory.

It displays the full A–Z alphabet and allows users to jump to the corresponding
letter section on the page.

Letters that correspond to existing resource groups are active.
Letters without resources are rendered in a disabled state.

#### Findings

1. The component always renders the full alphabet A–Z.
2. Which letters are active is determined by the `activeLetters` prop.
3. Disabled letters remain visible but cannot be clicked.
4. Clicking an active letter triggers a callback that scrolls to the corresponding section.

#### Implications

Although the page does not render empty resource sections, the navigation
still displays all alphabet letters.

Inactive letters appear disabled, which may visually suggest that the
directory contains missing content.

This navigation behavior may contribute to the perception that the site
contains incomplete sections.

### Inspection: `components/ResourceCard.tsx`

#### Purpose

This component provides a reusable card renderer for a single `Resource` object.

It renders:

- the top-level resource title and description
- direct resource links
- nested subcategories and their resources

The file is internally decomposed into:

- `ResourceListItem`
- `CategorySection`
- `ResourceCard`

#### Findings

- Verify whether components/ResourceCard.tsx is unused or superseded

1. The component is modular and appears designed as a reusable rendering surface for resource entries.
2. It confirms that the resource schema supports nested resources and subcategories.
3. It supports `urlLabel` fallback behavior when rendering resource links.
4. It does not appear to be the primary rendering surface currently used by `app/resources/page.tsx`, which renders cards inline instead.

#### Implications

There may be implementation drift or partial refactoring in the resource subsystem.

Rendering responsibilities appear duplicated between:

- `app/resources/page.tsx`
- `components/ResourceCard.tsx`

This increases the risk of confusion, dead code, or inconsistent future changes.

The active rendering path for the resource directory should be treated as
`app/resources/page.tsx` unless later inspection shows otherwise.

### Inspection: `types/resources.ts`

#### Purpose

This file defines the TypeScript data model for the resource directory.

The schema describes the structure of the resource dataset imported
from `data/master.json`.

#### Data Model

The resource system is structured hierarchically:

- `ResourceData`
  - contains an array of `Resource` objects

- `Resource`
  - top-level directory entry
  - may include:
    - direct resource links
    - subcategories containing additional resources

- `CategoryItem`
  - grouping for related resources within a top-level resource

- `ResourceItem`
  - individual resource link with optional description and URL label

#### Findings

1. The schema is intentionally simple and avoids database-style complexity.
2. Resources are organized hierarchically using optional nested structures.
3. The model supports both flat lists and categorized resource groups.
4. No metadata fields exist for editing workflows, moderation, or version tracking.

#### Implications

The schema supports a content-directory model that is easy to maintain
with static JSON data.

It aligns with operational simplicity and does not assume the presence
of a database or administrative editing interface.

### Inspection: `data/resources-a-d.json`

#### Purpose

This file contains resource directory data for categories beginning
approximately with A–D.

The dataset includes top-level resource categories, optional nested
subcategories, and individual resource links.

Example categories include:

- Agriculture
- Archives
- Aviation
- Cemeteries
- Chinese History

#### Findings

1. The data structure conforms to the schema defined in `types/resources.ts`.
2. Some categories contain direct resources.
3. Some categories contain nested subcategories.
4. Some categories contain both.

#### Sparse and Placeholder Categories

Several categories appear intentionally defined without resources yet,
including examples such as:

- ARCHIVISTS
- ASSOCIATIONS
- BLOGS
- COMPILATION (HISTORY)

These appear to function as placeholders for future expansion.

This aligns with the design intent that the directory should grow over time.

#### Schema Observation

Some entries contain a `type` field (`"type": "category"`), which is
not currently defined in the TypeScript schema.

This may represent a legacy field or an earlier design intention and
should be reviewed during planning.

#### Implications

The perception of incomplete sections may arise from sparse or
placeholder categories rather than from alphabetical navigation.

Future design improvements may need to address how empty or
low-density categories are visually communicated.

## Resource Directory Architecture

### Overview

The resource directory is implemented as a client-rendered page that
loads a static JSON dataset and dynamically organizes it into an
alphabetically navigable directory of resource categories.

The architecture is intentionally simple and relies on static content
rather than a database or dynamic backend.

### Data Source

The primary dataset appears to be stored in:

data/master.json

This dataset contains an array of top-level `Resource` objects
describing directory categories.

Additional segmented files such as:

- resources-a-d.json
- resources-e-h.json
- resources-i-m.json
- resources-n-r.json
- resources-s-z.json

exist in the repository but may not currently be used by the page
implementation.

### Data Model

The directory uses a hierarchical structure defined in
`types/resources.ts`.

Hierarchy:

ResourceData  
→ Resource[]  
→ ResourceItem[]  
→ CategoryItem[]  
→ ResourceItem[]

A top-level `Resource` entry represents a directory category.
Each category may contain:

- direct resource links
- nested subcategories
- both

### Rendering Flow

The resource directory is rendered by:

app/resources/page.tsx

The page performs the following steps:

1. Load resource dataset from `master.json`
2. Group resources by the first letter of the category title
3. Sort resources alphabetically
4. Compute the set of active alphabet letters
5. Render sections for each active letter
6. Render cards representing each category
7. Render nested resources and subcategories within each card

### Navigation

Alphabet navigation is handled by:

components/AlphabetNav.tsx

The component renders the full A–Z alphabet but enables only letters
that correspond to available resource groups.

Inactive letters remain visible but disabled.

### Resource Rendering

Resource content is rendered primarily within the page component
using helper functions that render nested resource lists and
subcategory sections.

A reusable component (`components/ResourceCard.tsx`) also exists
but does not appear to be the active rendering surface for the page.

This suggests possible implementation drift or an incomplete refactor.

### Placeholder Categories

The dataset contains several categories that do not yet include
resources.

Examples include:

- ARCHIVISTS
- ASSOCIATIONS
- BLOGS
- COMPILATION (HISTORY)

These appear to function as placeholders for future expansion.

This design aligns with the founder’s intention that the directory
should grow over time rather than appear fully populated at launch.

### Design Tension

The presence of placeholder or low-density categories may create
a perception of incomplete content.

However, the underlying design philosophy encourages visible growth
and contribution.

Future design improvements may need to balance:

- presentation polish
- clarity of structure
- signaling that the directory is actively growing

### Architectural Characteristics

Strengths:

- simple static architecture
- readable data model
- flexible hierarchical structure
- minimal operational overhead
- suitable for small organizations without technical maintainers

Limitations:

- manual content editing required
- no submission workflow
- potential confusion from placeholder categories
- some duplication in rendering components

### Operational Constraints

The current architecture reflects operational constraints:

- no technical editors available to manage complex systems
- uncertain traffic and contribution levels
- desire to keep maintenance requirements minimal

Because of this, static JSON content is currently an appropriate
implementation choice.

### Planning Implications

Future architectural decisions (for example database integration,
Supabase adoption, or dynamic editing interfaces) should be based on:

- demonstrated site usage
- evidence of community contribution
- availability of maintainers capable of supporting the system
