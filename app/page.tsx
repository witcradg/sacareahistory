"use client"

import { Hero } from "@/components/Hero"
import { ResourcesSection } from "@/components/ResourcesSection"
import { TimelineSection } from "@/components/timeline/TimelineSection";
// import ColorPalette from "@/components/ColorPalette";


export default function Home() {
  return (
    <div role="main">
      {/* <ColorPalette /> */}
      <Hero />
      <ResourcesSection />
      {/* <TimelineSection /> */}
    </div>
  );
}

