"use client"

import { Hero } from "@/components/Hero"
import { ResourcesSection } from "@/components/ResourcesSection"
import Link from "next/link";
// import ColorPalette from "@/components/ColorPalette";


export default function Home() {
  return (
    <main className="px-6 py-8 max-w-4xl mx-auto space-y-8">
      <Hero />
      <section className="text-center">
        <h1 className="text-4xl font-bold">SacArea History Network</h1>
        <p className="text-lg italic mt-2">Together, let’s preserve and promote our region’s history</p>
      </section>

      {/* Background */}
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

      {/* Navigation Links Overview */}
      <section>
        <h2 className="text-2xl font-semibold mb-2">Overview</h2>
        <ul className="list-none">
          <li><Link href="#board" style={{ paddingLeft: 0 }} className="text-blue-600">SacArea Board</Link></li>
          <li><Link href="#members" style={{ paddingLeft: 0 }} className="text-blue-600">Member Organizations</Link></li>
        </ul>
      </section>

      {/* Resources */}
      <section>
        <h2 className="text-2xl font-semibold mb-2">Resources</h2>
        <p>Alphabetical list of regional resources. Please submit additional sites to us at sacarea@winfirst.com.</p>
      </section>

      {/* Calendar */}
      <section>
        <h2 className="text-2xl font-semibold mb-2">Calendar</h2>
        <p>
          Calendar of events — a representative from each organization can be given access to add events. We can plan a
          Zoom training session for those interested in adding events for their organization.
        </p>
      </section>

      {/* Timeline */}
      <section>
        <h2 className="text-2xl font-semibold mb-2">Timeline</h2>
        <p>
          The base for this is a timeline that Mickey Knapp and I put together a decade or two ago. We hope to further
          expand it and are always looking for additions.
        </p>
      </section>

      {/* Notes */}
      <section>
        <h2 className="text-2xl font-semibold mb-2">Notes</h2>
        <p>Includes past meeting minutes, announcements, and other postings.</p>
      </section>

      {/* In Memoriam */}
      {/* <section> */}
      <Link href="/memoriam" style={{ paddingLeft: '0' }} className="text-2xl font-semibold mb-2">In Memoriam</Link>
      <p>
        Memorialize past contributing members.
      </p>
      {/* </section> */}
    </main>
  );
};
