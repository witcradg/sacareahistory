import { Hero } from "@/components/Hero"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AlphaAD } from "@/components/alphaA-D";
import { AlphaEH } from "@/components/alphaE-H";
import { AlphaIM } from "@/components/alphaI-M";
import { AlphaNR } from "@/components/alphaN-R";
import { AlphaSZ } from "@/components/alphaS-Z";
import { TimelineSection } from "@/components/timeline/TimelineSection";
// import ColorPalette from "@/components/ColorPalette";


export default function Home() {
  return (
    <>
      {/* <ColorPalette /> */}
      <Hero />
      <section className="w-[80vw] m-auto py-4 mt-4 mb-16 bg-card">
        <div>
          <h2 className="w-full block text-2xl font-bold text-center">Resources &ndash; Alphabetical</h2>
        </div>
        <Tabs defaultValue="sectionAD" className="p-4">
          <TabsList className="flex justify-around items-center w-full m-auto text-lg text-primary-foreground dark:text-foreground bg-skyblue" >
            <TabsTrigger className="text-xl m-10 px-10 data-[state=active]:bg-card"
              value="sectionAD">A-D
            </TabsTrigger>
            <TabsTrigger className="text-xl m-10 px-10 data-[state=active]:bg-card"
              value="sectionEH">E-H
            </TabsTrigger>
            <TabsTrigger className="text-xl m-10 px-10 data-[state=active]:bg-card"
              value="sectionIM">I-M
            </TabsTrigger>
            <TabsTrigger className="text-xl m-10 px-10 data-[state=active]:bg-card"
              value="sectionNR">N-R
            </TabsTrigger>
            <TabsTrigger className="text-xl m-10 px-10 data-[state=active]:bg-card"
              value="sectionSZ">S-Z
            </TabsTrigger>
          </TabsList>
          <TabsContent className="min-h-44" value="sectionAD">
            <AlphaAD />
          </TabsContent>
          <TabsContent className="min-h-44" value="sectionEH">
            <AlphaEH />
          </TabsContent>
          <TabsContent className="min-h-44" value="sectionIM">
            <AlphaIM />
          </TabsContent>
          <TabsContent className="min-h-44" value="sectionNR">
            <AlphaNR />
          </TabsContent>
          <TabsContent className="min-h-44" value="sectionSZ">
            <AlphaSZ />
          </TabsContent>
        </Tabs>
      </section>

      <TimelineSection />

    </>
  );
}

