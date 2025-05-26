"use client"

import { useState, useEffect } from 'react';
import resourceData from "@/data/resources.json";
import { ResourceCard } from "./ResourceCard";
import type { Resource, ResourceData } from "@/types/resources";

export const ResourcesSection = () => {
	const [activeLetters, setActiveLetters] = useState<string[]>([]);
	const [resourcesByLetter, setResourcesByLetter] = useState<Record<string, Resource[]>>({});

	useEffect(() => {
		// Group resources by first letter
		const typedData = resourceData as ResourceData;
		const grouped = typedData.resources.reduce<Record<string, Resource[]>>((acc, resource) => {
			const firstLetter = resource.title.charAt(0).toUpperCase();
			if (!acc[firstLetter]) {
				acc[firstLetter] = [];
			}
			acc[firstLetter].push(resource);
			return acc;
		}, {});

		// Sort resources within each letter group
		Object.keys(grouped).forEach(letter => {
			grouped[letter].sort((a: Resource, b: Resource) => a.title.localeCompare(b.title));
		});

		setResourcesByLetter(grouped);
		setActiveLetters(Object.keys(grouped).sort((a, b) => a.localeCompare(b)));
	}, []);

	const scrollToLetter = (letter: string) => {
		const element = document.getElementById(`section-${letter}`);
		if (element) {
			element.scrollIntoView({ behavior: 'smooth' });
		}
	};

	return (
		<section className="lg:w-[80vw] m-auto bg-card">
			<div>
				<h2 className="w-full block text-2xl font-bold text-center mb-8">Resources</h2>
			</div>

			{/* Alphabet Navigation */}
			<div className="sticky top-16 z-10 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 p-2 mb-8">
				<div className="flex flex-wrap justify-center gap-2">
					{activeLetters.map(letter => (
						<button
							key={letter}
							onClick={() => scrollToLetter(letter)}
							className="px-3 py-1 rounded hover:bg-accent"
						>
							{letter}
						</button>
					))}
				</div>
			</div>

			{/* Resource Sections */}
			<div className="space-y-12 p-4">
				{activeLetters.map(letter => (
					<div
						key={letter}
						id={`section-${letter}`}
						className="scroll-mt-32"
					>
						<h3 className="text-2xl font-semibold mb-4">{letter}</h3>
						<div className="grid gap-4">
							{resourcesByLetter[letter]?.map((resource, index) => (
								<ResourceCard
									key={`${letter}-${index}`}
									resource={resource}
								/>
							))}
						</div>
					</div>
				))}
			</div>
		</section>
	);
};