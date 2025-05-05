"use client"

import { useEffect, useState } from 'react'
import { AlphabetNav } from '@/components/AlphabetNav'
import resourceData from '@/data/resources.json'
import { ResourceCard } from '@/components/ResourceCard'
import { Resource, ResourceData } from '@/types/resources'
import { Input } from '@/components/ui/input'

export default function ResourcesPage() {
	const [activeLetters, setActiveLetters] = useState<string[]>([])
	const [resourcesByLetter, setResourcesByLetter] = useState<Record<string, Resource[]>>({})
	const [searchQuery, setSearchQuery] = useState('')
	const [filteredResourcesByLetter, setFilteredResourcesByLetter] = useState<Record<string, Resource[]>>({})

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
		setFilteredResourcesByLetter(grouped);
		setActiveLetters(Object.keys(grouped).sort((a, b) => a.localeCompare(b)));
	}, [])

	useEffect(() => {
		if (!searchQuery) {
			setFilteredResourcesByLetter(resourcesByLetter);
			return;
		}

		const query = searchQuery.toLowerCase();
		const filtered = Object.entries(resourcesByLetter).reduce<Record<string, Resource[]>>((acc, [letter, resources]) => {
			const filteredResources = resources.filter(resource => {
				const matchesTitle = resource.title.toLowerCase().includes(query);
				const matchesDescription = resource.description?.toLowerCase().includes(query);
				const matchesSubcategories = resource.content?.subcategories?.some(
					cat => cat.title.toLowerCase().includes(query)
				);
				const matchesResources = resource.content?.resources?.some(
					res => res.title.toLowerCase().includes(query) || res.description?.toLowerCase().includes(query)
				);

				return matchesTitle || matchesDescription || matchesSubcategories || matchesResources;
			});

			if (filteredResources.length > 0) {
				acc[letter] = filteredResources;
			}
			return acc;
		}, {});

		setFilteredResourcesByLetter(filtered);
		setActiveLetters(Object.keys(filtered).sort((a, b) => a.localeCompare(b)));
	}, [searchQuery, resourcesByLetter]);

	const scrollToLetter = (letter: string) => {
		const element = document.getElementById(`section-${letter}`)
		if (element) {
			element.scrollIntoView({ behavior: 'smooth' })
		}
	}

	const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value;
		setSearchQuery(value);

		// If search is cleared, reset to initial state
		if (!value) {
			setFilteredResourcesByLetter(resourcesByLetter);
			setActiveLetters(Object.keys(resourcesByLetter).sort((a, b) => a.localeCompare(b)));
		}
	}

	return (
		<div className="min-h-screen">
			<div className="container py-8">
				<h1 className="text-4xl font-bold text-center mb-8">Resources</h1>

				<div className="flex gap-8">
					{/* Main content */}
					<div className="flex-1">
						<div className="space-y-12">
							{activeLetters.map(letter => (
								<div
									key={letter}
									id={`section-${letter}`}
									className="scroll-mt-32"
								>
									<h2 className="text-2xl font-semibold mb-4">{letter}</h2>
									<div className="grid gap-4">
										{filteredResourcesByLetter[letter]?.map((resource, index) => (
											<ResourceCard
												key={`${letter}-${index}`}
												resource={resource}
											/>
										))}
									</div>
								</div>
							))}
						</div>
					</div>

					{/* Search and alphabet navigation in separate columns */}
					<div className="sticky top-[232px] self-start flex gap-4 h-fit">
						{/* Search column */}
						<div className="w-48 shrink-0">
							<Input
								type="search"
								placeholder="Search resources..."
								className="w-full"
								value={searchQuery}
								onChange={handleSearchChange}
							/>
						</div>

						{/* Alphabet navigation column */}
						<div className="w-10 shrink-0">
							<AlphabetNav
								activeLetters={activeLetters}
								onLetterClick={scrollToLetter}
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}