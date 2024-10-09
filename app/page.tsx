import { Hero } from "@/components/Hero"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AlphaAD } from "@/components/alphaA-D";
import { AlphaEH } from "@/components/alphaE-H";
import { AlphaIM } from "@/components/alphaI-M";
import { AlphaNR } from "@/components/alphaN-R";
import { AlphaSZ } from "@/components/alphaS-Z";


import { Card } from "@/components/ui/card";
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
      <Card className='p-5'>
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
      </Card>
      <Hero />
      <section className="w-[80vw] m-auto py-4 mt-4 mb-16 bg-card">
        <div>
          <h2 className="w-full block text-2xl font-bold text-center">Resources &ndash; Alphabetical</h2>
        </div>
        <Tabs defaultValue="alphalisting" className="p-4">
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

      <div className="w-1/2 my-12 mx-auto">
        <h2 className="text-2xl font-bold text-center">Timeline</h2>
        {/* https://flowbite.com/docs/components/timeline/ */}
        <ol className="relative border-s border-black dark:border-white">
          <li className="mb-10 ms-4">
            <div className="absolute w-3 h-3 bg-gray-900 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <time className="mb-1 text-sm font-normal leading-none text-gray-900 dark:text-gray-500">
              February 1895</time>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Timeline Event One</h3>
            <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
              This is a descrption of Timeline Event One</p>
            <a href="#" className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-100 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700">
              Additional Information <svg className="w-3 h-3 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
              </svg></a>
          </li>
          <li className="mb-10 ms-4">
            <div className="absolute w-3 h-3 bg-gray-900 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <time className="mb-1 text-sm font-normal leading-none text-gray-900 dark:text-gray-500">
              March 1895</time>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Founding of ... </h3>
            <p className="text-base font-normal text-gray-500 dark:text-gray-400">A description of the above item</p>
          </li>
          <li className="ms-4">
            <div className="absolute w-3 h-3 bg-gray-900 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <time className="mb-1 text-sm font-normal leading-none text-gray-900 dark:text-gray-200">April 1985</time>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Another Event</h3>
            <p className="text-base font-normal text-gray-500 dark:text-gray-400">A description of the above item</p>
          </li>
        </ol>


      </div>

    </>
  );
}

