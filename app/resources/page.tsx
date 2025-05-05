"use client"

import { useEffect, useState } from 'react'
import { AlphabetNav } from '@/components/AlphabetNav'
import resourceData from '@/data/resources.json'
import { ResourceCard } from '@/components/ResourceCard'
import { Resource, ResourceData } from '@/types/resources'

export default function ResourcesPage() {
    const [activeLetters, setActiveLetters] = useState<string[]>([])
    const [resourcesByLetter, setResourcesByLetter] = useState<Record<string, Resource[]>>({})

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
    }, [])

    const scrollToLetter = (letter: string) => {
        const element = document.getElementById(`section-${letter}`)
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
        }
    }

    return (
        <div className="min-h-screen">
            <AlphabetNav
                activeLetters={activeLetters}
                onLetterClick={scrollToLetter}
            />

            <div className="container py-8">
                <h1 className="text-4xl font-bold text-center mb-8">Resources</h1>

                <div className="space-y-12">
                    {activeLetters.map(letter => (
                        <div
                            key={letter}
                            id={`section-${letter}`}
                            className="scroll-mt-32"
                        >
                            <h2 className="text-2xl font-semibold mb-4">{letter}</h2>
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
            </div>
        </div>
    )
}