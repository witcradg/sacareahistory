"use client"

import { useEffect, useState } from 'react'
import { AlphabetNav } from '@/components/AlphabetNav'
import masterData from '@/data/master.json'
import { Resource, ResourceData, ResourceItem, CategoryItem } from '@/types/resources'
import { Input } from '@/components/ui/input'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'

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

export default function ResourcesPage() {
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

	const renderResources = (resources: ResourceItem[] | undefined, indent: boolean = false) => {
		if (!resources?.length) return null;

		return (
			<div className={`mt-4 space-y-2 ${indent ? 'ml-4' : ''}`} role="list">
				<div className="space-y-2">
					{resources.map((res: ResourceItem) => (
						<div key={res.title} className="pl-4 border-l-2 border-primary/20" role="listitem">
							<a
								href={res.url}
								target="_blank"
								rel="noopener noreferrer"
								className="text-primary hover:underline font-medium"
								aria-label={`${res.title} (opens in new tab)`}
							>
								{res.title}
							</a>
							{res.description && (
								<p className="text-sm text-muted-foreground mt-1">{res.description}</p>
							)}
						</div>
					))}
				</div>
			</div>
		);
	};

	const renderSubcategories = (resource: Resource) => {
		if (!resource.content?.subcategories?.length) return null;

		return (
			<div className="mt-6 space-y-6">
				{resource.content.subcategories.map((subcat) => (
					<section
						key={`${resource.title}-${subcat.title}`}
						className="bg-muted/20 rounded-lg p-4"
						aria-labelledby={`subcat-${resource.title}-${subcat.title}`}
					>
						<h3
							id={`subcat-${resource.title}-${subcat.title}`}
							className="text-lg font-semibold mb-2"
						>
							{subcat.title}
						</h3>
						{subcat.description && (
							<p className="text-muted-foreground mb-4">{subcat.description}</p>
						)}
						{subcat.resources && renderResources(subcat.resources, true)}
					</section>
				))}
			</div>
		);
	};

	return (
		<div className="min-h-screen">
			<div className="container py-8">
				<h1 className="text-4xl font-bold text-center mb-8">Resources</h1>

				<div className="lg:flex gap-8">
					{/* Main content */}
					<div className="flex-1">
						<div className="space-y-12">
							{activeLetters.map(letter => (
								<div
									key={letter}
									id={`section-${letter}`}
									className="scroll-mt-24"
								>
									{/* Use section with aria-label for better semantics */}
									<section aria-label={`Resources starting with ${letter}`}>
										<h2 className="text-2xl font-semibold mb-4">{letter}</h2>
										<div className="grid gap-6">
											{filteredResourcesByLetter[letter]?.map((resource) => (
												<Card key={`${letter}-${resource.title}`} className="overflow-hidden">
													<CardHeader className="bg-muted/50">
														<CardTitle className="text-xl">{resource.title}</CardTitle>
														{resource.description && (
															<p className="text-muted-foreground">{resource.description}</p>
														)}
													</CardHeader>
													<CardContent className="pt-6">
														{/* Show top-level resources first */}
														{resource.content?.resources && !resource.content?.subcategories?.length &&
															renderResources(resource.content.resources)}

														{/* Show subcategories with their resources */}
														{renderSubcategories(resource)}

														{/* Show top-level resources after subcategories if both exist */}
														{resource.content?.resources && resource.content?.subcategories?.length &&
															<div className="mt-6">
																<h3 className="text-lg font-semibold mb-4">Additional Resources</h3>
																{renderResources(resource.content.resources)}
															</div>
														}
													</CardContent>
												</Card>
											))}
										</div>
									</section>
								</div>
							))}
						</div>
					</div>

					{/* Search and alphabet navigation */}
					<div className="sticky lg:top-24 self-start flex gap-4 h-fit lg:pr-16 mt-8 lg:mt-0">
						<div className="w-full lg:w-48 shrink-0">
							<Input
								type="search"
								placeholder="Search resources..."
								className="w-full"
								value={searchQuery}
								onChange={handleSearchChange}
								aria-label="Search resources"
							/>
						</div>
						<div className="w-10 shrink-0 hidden lg:block">
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