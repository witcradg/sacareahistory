"use client"

import { Hero } from "@/components/Hero"
import { ResourcesSection } from "@/components/ResourcesSection"
// import ColorPalette from "@/components/ColorPalette";


export default function Home() {
  return (
    <main>
      {/* <ColorPalette /> */}
      <Hero />
      <ResourcesSection />
    </main>
  );
}

