"use client"

import type { Resource, CategoryItem, ResourceItem } from '../types/resources';
import { Card, CardHeader, CardContent, CardTitle, CardDescription } from './ui/card';

interface ResourceCardProps {
	resource: Resource;
}

const ResourceListItem = ({ item }: { item: ResourceItem }) => {
	return (
		<div>
			<h4>{item.title}</h4>
			{item.description && <p className="ml-8">{item.description}</p>}
			{item.url && (
				<a
					href={item.url}
					target="_blank"
					rel="noopener noreferrer"
				>
					{item.urlLabel ?? item.url}
				</a>
			)}
		</div>
	);
};

const CategorySection = ({ category }: { category: CategoryItem }) => {
	return (
		<div>
			<h3>{category.title}</h3>
			{category.description && <p>{category.description}</p>}
			{category.resources?.map((resource, index) => (
				<ResourceListItem key={`${category.title}-resource-${index}`} item={resource} />
			))}
		</div>
	);
};

export const ResourceCard = ({ resource }: ResourceCardProps) => {
	return (
		<Card className="card">
			<CardHeader>
				<CardTitle>{resource.title}</CardTitle>
				{resource.description && (
					<CardDescription>{resource.description}</CardDescription>
				)}
			</CardHeader>
			<CardContent>
				{resource.content?.resources?.map((item, index) => (
					<ResourceListItem key={`${resource.title}-resource-${index}`} item={item} />
				))}
				{resource.content?.subcategories?.map((category, index) => (
					<CategorySection key={`${resource.title}-category-${index}`} category={category} />
				))}
			</CardContent>
		</Card>
	);
};