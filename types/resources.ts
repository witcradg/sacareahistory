export interface ResourceItem {
	title: string
	url?: string
	description?: string
	urlLabel?: string
}

export interface CategoryItem {
	title: string
	description?: string
	resources?: ResourceItem[]
}

export interface ResourceContent {
	resources?: ResourceItem[]
	subcategories?: CategoryItem[]
}

export interface Resource {
	title: string
	type?: string
	description?: string
	content?: ResourceContent
}

export interface ResourceData {
	resources: Resource[]
}
