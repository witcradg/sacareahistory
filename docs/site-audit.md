# Site Audit – SacArea History Consortium

## Stack & Structure
- Next.js 15 (App Router) with React 19 and TypeScript; Tailwind CSS v4 for styling; shadcn/radix UI components; next-themes for dark mode.
- Global layout lives in `app/layout.tsx` (header/footer/theme provider + Inter font).
- Main pages: home (`app/page.tsx`), resources (`app/resources/page.tsx`), calendar (`app/calendar/page.tsx`), timeline (`app/timeline/page.tsx`), California 175 doc viewer (`app/california-175-project/page.tsx`), in memoriam PDF (`app/memoriam/page.tsx`), placeholder pages for board/members/notes.
- Content and assets: resource data in `data/master.json`; timeline data in `components/timeline/timeline.json`; PDFs/DOCX/images in `public/`.

## Page Behaviors
- **Home** (`app/page.tsx`): static overview of consortium, membership info, and directory links. Hero image from `public/hero.jpg`. Imports `ResourcesSection` but does not render it.
- **Resources** (`app/resources/page.tsx`): client component that groups `master.json` entries alphabetically, provides search, and renders via cards/subcategories. Uses `AlphabetNav` for quick jumps.
- **Calendar** (`app/calendar/page.tsx`): embeds a Google Calendar iframe with a timestamp query param to bust cache.
- **Timeline** (`app/timeline/page.tsx`): renders `timeline.json`; currently marked “Under Construction” with simple vertical list styling and bullet-list descriptions.
- **California 175 Project** (`app/california-175-project/page.tsx`): loads a hosted DOCX through Google Docs viewer. Uses `NEXT_PUBLIC_BASE_URL` to resolve the document URL and falls back to `window.location.origin` in dev; shows an inline error if no base URL can be determined.
- **In Memoriam** (`app/memoriam/page.tsx`): embeds `public/Ray Oliver Memorial.pdf` with mobile link + desktop iframe. Metadata title is misspelled (“Memorium”).
- **Board/Members/Notes**: placeholder pages with minimal content.

## Styling & Theming
- Sepia-inspired palette defined in `app/globals.css` with dark-mode variants; global `<a>` styles add underline and 2rem left padding to all links.
- Tailwind utility helpers duplicated in `lib/utils.ts` and `app/lib/utils.ts`.
- Header uses shadcn `Menubar` + custom `Navbar`; footer pulls social/contact links from `components/footer/footer-content.js`.

## Findings / Risks
- `NEXT_PUBLIC_BASE_URL` now documented with `.env.example`; page falls back to `window.location.origin` in dev (`app/california-175-project/page.tsx`).
- Home page styling uses invalid Tailwind class names (`pl-0!`, `text-foreground!`) so the overrides are ignored (`app/page.tsx:64-130`). The welcome line shows literal asterisks (`**...**`) because it’s not Markdown.
- `CallButton` renders a label only—no tel/mailto handler or link (`components/CallButton.tsx:6-28`).
- Placeholder routes (board/members/notes) do not match the nav descriptions and have no data.
- Footer social links point to generic social accounts rather than consortium-specific URLs (`components/footer/footer-content.js`).
- Global anchor padding in `app/globals.css` forces a 2rem indent on all links, including inline links and cards; likely unintended for nav/text links.
- Utility helper duplicated in two locations; consider consolidating to one import path.

## Recommendations
1) Correct Tailwind classes on home page (`!pl-0 !text-foreground`), remove stray Markdown markers, and render/use `ResourcesSection` if intended.
2) Wire `CallButton` to a tel: link or contact mailto; ensure CTA is actionable.
3) Replace footer social/contact links with consortium-owned URLs; confirm copy in contact column.
4) Fill in board/members/notes pages with real data or hide links until ready.
5) Decide on a single `cn` helper location; delete the duplicate file.
6) Soften or scope the global anchor padding; keep underline/overflow-wrap without shifting layout.
7) (Done) Added `.env.example`, documented `NEXT_PUBLIC_BASE_URL`, and added dev fallback to `window.location.origin` for the California 175 doc viewer.
