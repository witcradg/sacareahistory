export interface ResourceItem {
	title: string
	url: string
	description?: string
	urlLabel?: string
}

export interface CategoryItem {
	title: string
	description?: string
	resources: ResourceItem[]
}

export interface Resource {
	title: string
	description?: string
	content?: {
		resources?: ResourceItem[]
		subcategories?: CategoryItem[]
	}
}

export interface ResourceData {
	resources: Resource[]
}