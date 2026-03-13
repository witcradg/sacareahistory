"use client"

import { Hero } from "@/components/Hero"
import Link from "next/link";
// import ColorPalette from "@/components/ColorPalette";

const directoryLinks = [
  {
    href: "/board",
    title: "SacArea Board",
    description: "Current Board Members",
  },
  {
    href: "/members",
    title: "Member Organizations",
    description: "Alphabetical list of member organizations.",
  },
  {
    href: "/resources",
    title: "Resources",
    description: "Alphabetical list of regional resources. Please submit additional sites to us at sacarea@winfirst.com.",
  },
  {
    href: "/calendar",
    title: "Calendar",
    description:
      "Calendar of events — a representative from each organization can be given access to add events. We can plan a Zoom training session for those interested in adding events for their organization.",
  },
  {
    href: "/timeline",
    title: "Timeline",
    description:
      "The base for this is a timeline that Mickey Knapp and I put together a decade or two ago. We hope to further expand it and are always looking for additions.",
  },
  {
    href: "/notes",
    title: "Notes",
    description: "Includes past meeting minutes, announcements, and other postings.",
  },
  {
    href: "/memoriam",
    title: "In Memoriam",
    description: "Memorialize past contributing members.",
  },
]

export default function Home() {
  return (
    <main className="px-6 py-8 max-w-4xl mx-auto space-y-8">
      <section className="relative isolate">
        <Hero />
        <div className="absolute inset-0 bg-black/35" />
        <div className="absolute inset-x-0 top-0 flex h-[calc(100%-2rem)] items-center justify-center px-6 text-center">
          <div className="relative z-10 max-w-2xl px-6 py-5 text-amber-50">
            <h1 className="text-4xl font-bold">SacArea History Network</h1>
            <p className="mt-2 text-lg italic">Together, let’s preserve and promote our region’s history</p>
          </div>
        </div>
      </section>

      <section className="text-center max-w-3xl mx-auto">
        <p className="text-lg leading-8">
          Welcome to our new site. If you have issues or concerns, please contact us at sacarea@winfirst.com. The site
          serves as a shared hub for the Sacramento Area History Consortium, where visitors can discover local history
          organizations, explore regional resources, follow events, and connect with the network of groups working to
          preserve and promote Sacramento-area history.
        </p>
      </section>

      <section className="space-y-6">
        <h2 className="text-3xl font-semibold text-center">Directory</h2>
        {directoryLinks.map((item) => (
          <section key={item.href}>
            <h3>
              <Link href={item.href} className="text-2xl font-semibold text-foreground">
                {item.title}
              </Link>
            </h3>
            <p>{item.description}</p>
          </section>
        ))}
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">Background</h2>
        <p>
          The Consortium began in 1993 as a “grass roots” organization and later became a committee of the Sacramento
          Historical Society. It serves as a forum for organizations interested in local history to meet, share, and
          exchange thoughts and ideas. Now independent from the Historical Society, the Consortium operates as a
          free-standing organization. Its mission remains to promote and amplify the efforts of our individual
          Societies and Organizations and, in doing so, create a stronger representation for our history through
          communication, publicity, linkage, and mutual support.
        </p>
      </section>

      {/* Who Can Join */}
      <section>
        <h2 className="text-2xl font-semibold mb-2">Who Can Join?</h2>
        <p>
          Any historical society or organization in related fields, such as archives and genealogy, may join.
          Historically minded individuals not affiliated with groups are also welcome. Our focus is on, but not limited
          to, counties surrounding Sacramento.
        </p>
      </section>

      {/* Membership Cost */}
      <section>
        <h2 className="text-2xl font-semibold mb-2">Membership Cost</h2>
        <p>Membership dues beginning January 1, 2025 will be $25.00 annually.</p>
      </section>

      {/* Membership Benefits */}
      <section>
        <h2 className="text-2xl font-semibold mb-2">Benefits of Membership</h2>
        <ul className="list-disc list-inside space-y-1">
          <li><strong>Event Promotion:</strong> Your events and newsletters featured on our website or emailed to our membership</li>
          <li><strong>Educational Programs:</strong> Six programs/meetings a year (three via Zoom, three in-person)</li>
          <li><strong>Networking:</strong> Occasional lunches/seminars for networking and information exchange</li>
          <li><strong>Shared Resources:</strong> Access to other local societies’ newsletters and events</li>
          <li><strong>Mutual Support:</strong> Promote and support each other’s efforts, driving interest in your organization, museums, presentations, and newsletters</li>
        </ul>
      </section>
    </main>
  );
};
