"use client"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AlphaAD } from "@/components/alphaA-D";
import { AlphaEH } from "@/components/alphaE-H";
import { AlphaIM } from "@/components/alphaI-M";
import { AlphaNR } from "@/components/alphaN-R";
import { AlphaSZ } from "@/components/alphaS-Z";

export const ResourcesSection = () => {
	return (
		<section className="lg:w-[80vw] m-auto bg-card">
			<div>
				<h2 className="w-full block text-2xl font-bold text-center">Resources &ndash; Alphabetical</h2>
			</div>
			<Tabs id="resouces" defaultValue="sectionAD" className="lg:p-4 rounded-none">
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
				<TabsContent className="min-h-44 rounded-none" value="sectionAD">
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
	)
}