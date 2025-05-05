"use client"

import { useEffect, useState } from 'react'
import { AlphabetNav } from '@/components/AlphabetNav'
import resourceData from '@/data/resources.json'
import { ResourceCard } from '@/components/ResourceCard'
import { Resource } from '@/types/resources'

export default function ResourcesPage() {
	const [activeLetters, setActiveLetters] = useState<string[]>([])

	// Get all unique starting letters from resource titles
	useEffect(() => {
		const letters = new Set<string>()
		resourceData.sections.forEach(section => {
			section.resources.forEach(resource => {
				letters.add(resource.title.charAt(0))
			})
		})
		setActiveLetters(Array.from(letters).sort((a, b) => a.localeCompare(b)))
	}, [])

	const scrollToLetter = (letter: string) => {
		const element = document.getElementById(`section-${letter}`)
		if (element) {
			element.scrollIntoView({ behavior: 'smooth' })
		}
	}

	// Sort all resources alphabetically
	const allResources = resourceData.sections.flatMap(section =>
		section.resources as Resource[]
	).sort((a, b) => a.title.localeCompare(b.title))

	// Group resources by first letter
	const resourcesByLetter = allResources.reduce<Record<string, Resource[]>>((acc, resource) => {
		const firstLetter = resource.title.charAt(0)
		acc[firstLetter] ??= []
		acc[firstLetter].push(resource)
		return acc
	}, {})

	console.log("resources:", allResources)
	return (
		<div className="min-h-screen">
			<AlphabetNav
				activeLetters={activeLetters}
				onLetterClick={scrollToLetter}
			/>

			<div className="container py-8">
				<h1 className="text-4xl font-bold text-center mb-8">Resources</h1>

				<div className="space-y-12">
					{Object.entries(resourcesByLetter).map(([letter, resources]) => (
						<div
							key={letter}
							id={`section-${letter}`}
							className="scroll-mt-32"
						>
							<h2 className="text-2xl font-semibold mb-4">{letter}</h2>
							<div className="grid gap-4">
								{resources.map((resource, index) => (
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
		</div>
	)
}