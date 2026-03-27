"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CategoryItem, Resource, ResourceItem } from "@/types/resources"

interface ResourceDirectoryCardProps {
	resource: Resource
}

const hasLinkedResources = (resources?: ResourceItem[]) => {
	return resources?.some((resource) => Boolean(resource.url)) ?? false
}

const resourceHasAnyLinks = (resource: Resource) => {
	const hasTopLevelLinks = hasLinkedResources(resource.content?.resources)
	const hasSubcategoryLinks =
		resource.content?.subcategories?.some((subcategory) => hasLinkedResources(subcategory.resources)) ?? false

	return hasTopLevelLinks || hasSubcategoryLinks
}

const renderResources = (resources?: ResourceItem[], indent: boolean = false) => {
	if (!resources?.length) return null

	return (
		<div className={`mt-4 space-y-2 ${indent ? "ml-4" : ""}`} role="list">
			<div className="space-y-2">
				{resources.map((resource) => (
					<div key={resource.title} className="border-l-2 border-primary/20 pl-4" role="listitem">
						{resource.url ? (
							<a
								href={resource.url}
								target="_blank"
								rel="noopener noreferrer"
								className="font-medium text-primary hover:underline"
								aria-label={`${resource.title} (opens in new tab)`}
							>
								{resource.title}
							</a>
						) : (
							<p className="font-medium text-foreground">{resource.title}</p>
						)}
						{resource.description && <p className="mt-1 text-sm text-muted-foreground">{resource.description}</p>}
					</div>
				))}
			</div>
		</div>
	)
}

const renderSubcategories = (resource: Resource) => {
	if (!resource.content?.subcategories?.length) return null

	return (
		<div className="mt-6 space-y-6">
			{resource.content.subcategories.map((subcategory: CategoryItem) => (
				<section
					key={`${resource.title}-${subcategory.title}`}
					className="rounded-lg bg-muted/20 p-4"
					aria-labelledby={`subcat-${resource.title}-${subcategory.title}`}
				>
					<h3 id={`subcat-${resource.title}-${subcategory.title}`} className="mb-2 text-lg font-semibold">
						{subcategory.title}
					</h3>
					{subcategory.description && <p className="mb-4 text-muted-foreground">{subcategory.description}</p>}
					{subcategory.resources && renderResources(subcategory.resources, true)}
				</section>
			))}
		</div>
	)
}

export function ResourceDirectoryCard({ resource }: ResourceDirectoryCardProps) {
	const showCompactCard = !resourceHasAnyLinks(resource)

	return (
		<Card className="overflow-hidden">
			<CardHeader className="bg-muted/50">
				<CardTitle className="text-xl">{resource.title}</CardTitle>
				{resource.description && <p className="text-muted-foreground">{resource.description}</p>}
			</CardHeader>
			{!showCompactCard && (
				<CardContent className="pt-6">
					{resource.content?.resources && !resource.content?.subcategories?.length && renderResources(resource.content.resources)}
					{renderSubcategories(resource)}
					{resource.content?.resources && resource.content?.subcategories?.length && (
						<div className="mt-6">
							<h3 className="mb-4 text-lg font-semibold">Additional Resources</h3>
							{renderResources(resource.content.resources)}
						</div>
					)}
				</CardContent>
			)}
		</Card>
	)
}
