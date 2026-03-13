import Image from "next/image"
import Link from "next/link"

import { Button } from "@/components/ui/button"

const destinationCards = [
  {
    href: "/resources",
    title: "Resources",
    description:
      "Browse regional research tools, local repositories, and useful reference links for Sacramento-area history.",
    cta: "Explore Resources",
  },
  {
    href: "/calendar",
    title: "Calendar & Events",
    description:
      "Follow programs, meetings, and public events across the network, with opportunities for member groups to contribute listings.",
    cta: "View Events",
  },
  {
    href: "/timeline",
    title: "Timeline",
    description:
      "Trace the region’s story through an evolving historical timeline shaped by shared knowledge and continued additions.",
    cta: "Open Timeline",
  },
  {
    href: "/members",
    title: "Member Organizations",
    description:
      "See the societies, museums, archives, and community groups that make up the Sacramento-area history network.",
    cta: "Meet the Network",
  },
  {
    href: "/board",
    title: "Board",
    description:
      "Find the current board members supporting the consortium’s coordination, communication, and shared programming.",
    cta: "View Board",
  },
  {
    href: "#featured-destinations",
    title: "Directory",
    description:
      "Use this homepage as a gateway into the site’s main destinations, from organizations and events to notes and research tools.",
    cta: "Browse Sections",
  },
]

const membershipBenefits = [
  "Promote your events and newsletters on the website or through member email updates.",
  "Join six programs or meetings each year, with both Zoom and in-person gatherings.",
  "Build connections through occasional lunches, seminars, and information exchange.",
  "Share newsletters, events, and resources across neighboring organizations.",
  "Strengthen public interest in local museums, presentations, publications, and preservation work.",
]

const networkGroups = [
  {
    title: "Historical Societies",
    description: "Local groups preserving community memory, collections, and place-based stories across the region.",
  },
  {
    title: "Archives & Libraries",
    description: "Organizations stewarding records, manuscripts, photographs, and research access for the public.",
  },
  {
    title: "Museums & Historic Sites",
    description: "Spaces that interpret Sacramento-area history through exhibits, buildings, programs, and public engagement.",
  },
  {
    title: "Genealogy & Research Communities",
    description: "Researchers and family-history groups helping connect documents, people, and local historical context.",
  },
]

const quickLinks = [
  { href: "/resources", label: "Resources" },
  { href: "/calendar", label: "Calendar" },
  { href: "/timeline", label: "Timeline" },
  { href: "/members", label: "Member Organizations" },
  { href: "/notes", label: "Notes" },
  { href: "/memoriam", label: "In Memoriam" },
]

function SectionHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string
  title: string
  description: string
}) {
  return (
    <div className="max-w-3xl space-y-3">
      <p className="text-sm font-semibold uppercase tracking-[0.24em] text-stone-500">{eyebrow}</p>
      <h2 className="text-3xl font-semibold tracking-tight text-stone-900 sm:text-4xl">{title}</h2>
      <p className="text-base leading-8 text-stone-700 sm:text-lg">{description}</p>
    </div>
  )
}

export default function HomePageVersion4() {
  return (
    <main className="bg-[hsl(35_30%_94%)] text-[hsl(30_18%_16%)]">
      <section className="px-4 pb-10 pt-6 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <figure className="relative overflow-hidden rounded-[2rem] border border-[hsl(35_20%_78%)] bg-[hsl(30_15%_20%)] shadow-[0_24px_60px_rgba(58,44,28,0.18)]">
            <Image
              src="/hero.jpg"
              alt="Historical illustration of Sutter's Fort"
              width={1120}
              height={703}
              priority
              className="h-[540px] w-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-black/45" />
            <div className="absolute inset-0 flex items-center">
              <div className="relative z-10 w-full px-6 py-10 sm:px-10 lg:px-14">
                <div className="max-w-3xl space-y-6">
                  <p className="text-sm font-semibold uppercase tracking-[0.3em] text-stone-200">
                    Sacramento Area History Consortium
                  </p>
                  <div className="space-y-4">
                    <h1 className="text-4xl font-semibold leading-tight tracking-tight text-amber-50 sm:text-5xl lg:text-6xl">
                      SacArea History Network
                    </h1>
                    <p className="max-w-2xl text-lg leading-8 text-stone-100 sm:text-xl">
                      Discover local history organizations, explore regional resources, follow events, and connect
                      with the people preserving Sacramento-area history.
                    </p>
                    <p className="text-base italic text-stone-200">
                      Together, let’s preserve and promote our region’s history.
                    </p>
                  </div>
                  <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                    <Button
                      asChild
                      size="lg"
                      className="no-underline rounded-md bg-amber-400 px-5 py-3 font-medium text-stone-900 hover:bg-amber-300"
                    >
                      <Link href="/resources">Explore Resources</Link>
                    </Button>
                    <Button
                      asChild
                      size="lg"
                      variant="outline"
                      className="no-underline rounded-md border border-stone-200/30 bg-stone-950/35 px-5 py-3 font-medium text-stone-50 hover:border-stone-100/40 hover:bg-stone-950/50 hover:text-stone-50"
                    >
                      <Link href="/calendar">View Events</Link>
                    </Button>
                    <Button
                      asChild
                      size="lg"
                      variant="ghost"
                      className="no-underline rounded-md border border-stone-200/30 bg-stone-950/35 px-5 py-3 font-medium text-stone-50 hover:border-stone-100/40 hover:bg-stone-950/50 hover:text-stone-50"
                    >
                      <Link href="mailto:sacarea@winfirst.com?subject=SAHC%20Membership%20Inquiry">Become a Member</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            <figcaption className="absolute inset-x-0 bottom-0 z-10 flex flex-col gap-2 border-t border-white/15 bg-[hsl(30_20%_12%_/_0.6)] px-6 py-3 text-xs text-stone-200 sm:flex-row sm:items-center sm:justify-between sm:px-8">
              <span>Sutter&apos;s Fort, 1840s illustration</span>
              <a
                href="https://en.wikipedia.org/wiki/Sutter%27s_Fort"
                className="text-amber-300 underline decoration-amber-300 underline-offset-4 hover:text-amber-200"
              >
                Source: Wikipedia
              </a>
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="border-y border-[hsl(35_18%_82%)] bg-[hsl(36_24%_92%)] px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[minmax(0,1.3fr)_minmax(280px,0.7fr)] lg:items-start">
          <div className="space-y-5">
            <SectionHeader
              eyebrow="Mission"
              title="A shared hub for regional history work"
              description="The site serves as a shared hub for the Sacramento Area History Consortium, connecting visitors to organizations, resources, events, and the broader network preserving Sacramento-area history."
            />
            <div className="max-w-3xl space-y-4 text-base leading-8 text-stone-700">
              <p>
                The consortium began in 1993 as a grassroots forum for local history organizations to meet, share
                ideas, and support one another. Today, it continues that role as an independent network linking
                societies, archives, genealogy groups, museums, and historically minded individuals.
              </p>
              <p>
                Welcome to our new site. If you have issues or concerns, please contact us at{" "}
                <a className="font-medium text-[hsl(34_55%_28%)] hover:text-[hsl(34_55%_22%)]" href="mailto:sacarea@winfirst.com">
                  sacarea@winfirst.com
                </a>
                .
              </p>
            </div>
          </div>

          <aside className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
            <div className="rounded-3xl border border-[hsl(35_18%_80%)] bg-[hsl(35_28%_96%)] p-6 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-stone-500">Founded</p>
              <p className="mt-3 text-3xl font-semibold text-stone-900">1993</p>
              <p className="mt-2 text-sm leading-7 text-stone-700">
                A longstanding grassroots forum for regional collaboration.
              </p>
            </div>
            <div className="rounded-3xl border border-[hsl(35_18%_80%)] bg-[hsl(35_28%_96%)] p-6 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-stone-500">Who It Serves</p>
              <p className="mt-3 text-3xl font-semibold text-stone-900">Local History</p>
              <p className="mt-2 text-sm leading-7 text-stone-700">
                Historical societies, archives, genealogy groups, museums, and researchers.
              </p>
            </div>
            <div className="rounded-3xl border border-[hsl(35_18%_80%)] bg-[hsl(35_28%_96%)] p-6 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-stone-500">Shared Work</p>
              <p className="mt-3 text-3xl font-semibold text-stone-900">Events + Resources</p>
              <p className="mt-2 text-sm leading-7 text-stone-700">
                Communication, publicity, linkage, and mutual support across the region.
              </p>
            </div>
          </aside>
        </div>
      </section>

      <section id="featured-destinations" className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl space-y-10">
          <SectionHeader
            eyebrow="Featured Destinations"
            title="Start with the sections visitors use most"
            description="The homepage is organized as a gateway into the network’s practical value: research tools, event listings, historical context, and the organizations behind the work."
          />
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {destinationCards.map((card) => (
              <article
                key={card.title}
                className="flex h-full flex-col rounded-3xl border border-[hsl(35_18%_80%)] bg-[hsl(35_26%_97%)] p-6 shadow-[0_10px_30px_rgba(71,56,38,0.08)]"
              >
                <div className="space-y-3">
                  <h3 className="text-2xl font-semibold text-stone-900">{card.title}</h3>
                  <p className="text-sm leading-7 text-stone-700">{card.description}</p>
                </div>
                <div className="mt-6 pt-2">
                  <Button
                    asChild
                    variant="outline"
                    className="no-underline border-[hsl(35_18%_74%)] bg-transparent text-[hsl(34_55%_28%)] hover:bg-[hsl(40_32%_90%)] hover:text-[hsl(34_55%_24%)]"
                  >
                    <Link href={card.href}>{card.cta}</Link>
                  </Button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-[hsl(35_18%_82%)] bg-[hsl(35_22%_90%)] px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)]">
          <div className="space-y-6">
            <SectionHeader
              eyebrow="Membership"
              title="Join the network that supports local history work"
              description="Membership is open to organizations in local history and related fields, and historically minded individuals are also welcome."
            />
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl border border-[hsl(35_18%_78%)] bg-[hsl(35_28%_96%)] p-6">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-stone-500">Who Can Join</p>
                <p className="mt-3 text-sm leading-7 text-stone-700">
                  Historical societies, archives, genealogy groups, and individuals interested in regional history.
                </p>
              </div>
              <div className="rounded-3xl border border-[hsl(35_18%_78%)] bg-[hsl(35_28%_96%)] p-6">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-stone-500">Annual Cost</p>
                <p className="mt-3 text-3xl font-semibold text-stone-900">$25</p>
                <p className="mt-2 text-sm leading-7 text-stone-700">Membership dues beginning January 1, 2025.</p>
              </div>
            </div>
            <Button
              asChild
              size="lg"
              className="no-underline bg-[hsl(34_40%_28%)] text-[hsl(40_45%_92%)] hover:bg-[hsl(34_40%_24%)]"
            >
              <Link href="mailto:sacarea@winfirst.com?subject=SAHC%20Membership%20Inquiry">Become a Member</Link>
            </Button>
          </div>

          <div className="rounded-[2rem] border border-[hsl(35_18%_78%)] bg-[hsl(35_28%_96%)] p-7 shadow-sm">
            <h3 className="text-2xl font-semibold text-stone-900">Benefits of Membership</h3>
            <ul className="mt-6 space-y-4">
              {membershipBenefits.map((benefit) => (
                <li
                  key={benefit}
                  className="rounded-2xl border border-[hsl(35_18%_84%)] bg-[hsl(35_24%_98%)] px-4 py-4 text-sm leading-7 text-stone-700"
                >
                  {benefit}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl space-y-10">
          <SectionHeader
            eyebrow="Network Value"
            title="A regional network built on collaboration"
            description="The consortium strengthens local history through communication, publicity, linkage, and mutual support. It is designed to help neighboring organizations work less in isolation and more in concert."
          />
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {networkGroups.map((group) => (
              <article
                key={group.title}
                className="rounded-3xl border border-[hsl(35_18%_80%)] bg-[hsl(35_26%_97%)] p-6 shadow-[0_10px_24px_rgba(71,56,38,0.06)]"
              >
                <h3 className="text-xl font-semibold text-stone-900">{group.title}</h3>
                <p className="mt-3 text-sm leading-7 text-stone-700">{group.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-[hsl(35_18%_82%)] bg-[hsl(36_24%_92%)] px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[minmax(320px,0.95fr)_minmax(0,1.05fr)] lg:items-center">
          <div className="overflow-hidden rounded-[2rem] border border-[hsl(35_18%_78%)] bg-[hsl(35_24%_86%)] shadow-[0_18px_40px_rgba(71,56,38,0.12)]">
            <Image
              src="/hero0ld.jpg"
              alt="Historic Sacramento building facade"
              width={1200}
              height={1043}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="space-y-6">
            <SectionHeader
              eyebrow="History in Motion"
              title="Use the site to follow both the record and the living work around it"
              description="The network is not only about preserving the past. It also helps member groups share programs, document regional stories, and keep historical interpretation active in public life."
            />
            <div className="space-y-4 text-base leading-8 text-stone-700">
              <p>
                The timeline section draws on earlier collaborative work and is intended to keep growing as new
                additions are identified. Notes, announcements, and archived materials help document the consortium’s
                own ongoing life as well.
              </p>
              <p>
                Together, these tools make the site useful both for visitors learning about Sacramento-area history and
                for organizations working to interpret and preserve it.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button
                asChild
                variant="outline"
                className="no-underline border-[hsl(35_18%_74%)] bg-[hsl(35_26%_97%)] text-[hsl(34_55%_28%)] hover:bg-[hsl(40_32%_90%)] hover:text-[hsl(34_55%_24%)]"
              >
                <Link href="/timeline">Explore the Timeline</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="no-underline border-[hsl(35_18%_74%)] bg-[hsl(35_26%_97%)] text-[hsl(34_55%_28%)] hover:bg-[hsl(40_32%_90%)] hover:text-[hsl(34_55%_24%)]"
              >
                <Link href="/notes">Read Notes & Updates</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] border border-[hsl(35_18%_78%)] bg-[hsl(30_24%_18%)] shadow-[0_20px_45px_rgba(47,36,24,0.18)]">
          <div className="grid gap-8 px-6 py-10 text-[hsl(40_38%_90%)] sm:px-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(280px,0.9fr)] lg:px-12 lg:py-12">
            <div className="space-y-4">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[hsl(43_70%_74%)]">Stay Connected</p>
              <h2 className="text-3xl font-semibold tracking-tight text-amber-50 sm:text-4xl">
                Built to help people find the region’s history work more easily
              </h2>
              <p className="max-w-2xl text-base leading-8 text-[hsl(40_24%_84%)]">
                The SacArea History Network brings together organizations, events, research tools, and updates so that
                visitors can move quickly from curiosity to connection.
              </p>
              <p className="text-base leading-8 text-[hsl(40_24%_84%)]">
                Contact:{" "}
                <a className="text-[hsl(43_70%_74%)] underline underline-offset-4" href="mailto:sacarea@winfirst.com">
                  sacarea@winfirst.com
                </a>
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {quickLinks.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="rounded-2xl border border-white/12 bg-white/5 px-4 py-4 text-sm font-medium text-[hsl(40_38%_90%)] no-underline transition-colors hover:bg-white/10"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
