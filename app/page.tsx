import { Hero } from "@/components/Hero"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AlphaAD } from "@/components/alphaA-D";
import { AlphaEH } from "@/components/alphaE-H";
import { AlphaIM } from "@/components/alphaI-M";
import { AlphaNR } from "@/components/alphaN-R";
import { AlphaSZ } from "@/components/alphaS-Z";

const colors = [
  { name: '--border', value: 'hsl(var(--border))' },
  { name: '--input', value: 'hsl(var(--input))' },
  { name: '--ring', value: 'hsl(var(--ring))' },
  { name: '--background', value: 'hsl(var(--background))' },
  { name: '--foreground', value: 'hsl(var(--foreground))' },
  { name: '--primary', value: 'hsl(var(--primary))' },
  { name: '--primary-foreground', value: 'hsl(var(--primary-foreground))' },
  { name: '--secondary', value: 'hsl(var(--secondary))' },
  { name: '--secondary-foreground', value: 'hsl(var(--secondary-foreground))' },
  { name: '--destructive', value: 'hsl(var(--destructive))' },
  { name: '--destructive-foreground', value: 'hsl(var(--destructive-foreground))' },
  { name: '--muted', value: 'hsl(var(--muted))' },
  { name: '--muted-foreground', value: 'hsl(var(--muted-foreground))' },
  { name: '--accent', value: 'hsl(var(--accent))' },
  { name: '--accent-foreground', value: 'hsl(var(--accent-foreground))' },
  { name: '--popover', value: 'hsl(var(--popover))' },
  { name: '--popover-foreground', value: 'hsl(var(--popover-foreground))' },
  { name: '--card', value: 'hsl(var(--card))' },
  { name: '--card-foreground', value: 'hsl(var(--card-foreground))' },
];

export default function Home() {
  return (
    <>
      {/* <Card className='p-5'>
        <h2>Color Palette</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
          {colors.map(color => (
            <div key={color.name} style={{ margin: '10px', textAlign: 'center' }}>
              <div style={{
                backgroundColor: color.value,
                width: '100px',
                height: '100px',
                borderRadius: '8px',
                border: '1px solid #000'
              }}>
              </div>
              <p className="black">{color.name}</p>
            </div>
          ))}
        </div>
      </Card> */}
      <Hero />
      <section className="w-[80vw] m-auto py-4 my-4 bg-card">
        <div>
          <h2 className="w-full block text-2xl font-bold text-center">Resources &ndash; Alphabetical</h2>
        </div>
        <Tabs defaultValue="alphalisting" className="p-4">
          <TabsList className="flex justify-around items-center w-full m-auto text-lg text-primary-foreground bg-blue-900">
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
    </>
  );
}

