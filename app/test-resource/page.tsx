"use client"

import { useEffect, useState } from 'react'
import { AlphabetNav } from '@/components/AlphabetNav'
import { ResourceDirectoryCard } from '@/components/resources/ResourceDirectoryCard'
import masterData from '@/data/master.json'
import { Resource, ResourceData, ResourceItem, CategoryItem } from '@/types/resources'
import { Input } from '@/components/ui/input'

// Helper functions to reduce nesting
const matchesSearchQuery = (text: string | undefined, query: string): boolean => {
	return text?.toLowerCase().includes(query) ?? false;
}

const filterResourcesByQuery = (resources: Resource[], query: string): Resource[] => {
	return resources.filter(resource => {
		const matchesTitle = matchesSearchQuery(resource.title, query);
		const matchesDescription = matchesSearchQuery(resource.description, query);
		const matchesSubcategories = resource.content?.subcategories?.some(
			(cat: CategoryItem) => matchesSearchQuery(cat.title, query)
		);
		const matchesResources = resource.content?.resources?.some(
			(res: ResourceItem) => {
				return matchesSearchQuery(res.title, query) || matchesSearchQuery(res.description, query);
			}
		);

		return matchesTitle || matchesDescription || matchesSubcategories || matchesResources;
	});
}

export default function TestResourcePage() {
	const [activeLetters, setActiveLetters] = useState<string[]>([])
	const [resourcesByLetter, setResourcesByLetter] = useState<Record<string, Resource[]>>({})
	const [searchQuery, setSearchQuery] = useState('')
	const [filteredResourcesByLetter, setFilteredResourcesByLetter] = useState<Record<string, Resource[]>>({})

	useEffect(() => {
		// Group resources by first letter
		const typedData = masterData as ResourceData;
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
			const filteredResources = filterResourcesByQuery(resources, query);

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

		if (!value) {
			setFilteredResourcesByLetter(resourcesByLetter);
			setActiveLetters(Object.keys(resourcesByLetter).sort((a, b) => a.localeCompare(b)));
		}
	}

	return (
		<div className="min-h-screen">
			<div className="container py-8">
				<h1 className="mb-2 text-center text-4xl font-bold">Test Resource</h1>
				<p className="mb-8 text-center text-sm text-muted-foreground">
					Review version of the resources page with compact placeholder cards.
				</p>

				<div className="gap-8 lg:flex">
					<div className="flex-1">
						<div className="space-y-12">
							{activeLetters.map(letter => (
								<div
									key={letter}
									id={`section-${letter}`}
									className="scroll-mt-24"
								>
									<section aria-label={`Resources starting with ${letter}`}>
										<h2 className="mb-4 text-2xl font-semibold">{letter}</h2>
										<div className="grid gap-6">
											{filteredResourcesByLetter[letter]?.map((resource) => (
												<ResourceDirectoryCard key={`${letter}-${resource.title}`} resource={resource} />
											))}
										</div>
									</section>
								</div>
							))}
						</div>
					</div>

					<div className="sticky mt-8 flex h-fit gap-4 self-start lg:top-24 lg:mt-0 lg:pr-16">
						<div className="w-full shrink-0 lg:w-48">
							<Input
								type="search"
								placeholder="Search resources..."
								className="w-full"
								value={searchQuery}
								onChange={handleSearchChange}
								aria-label="Search resources"
							/>
						</div>
						<div className="hidden w-10 shrink-0 lg:block">
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
