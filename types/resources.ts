export interface Resource {
	title: string;           // The main resource title (e.g. "AGRICULTURE")
	description?: string;    // Optional description that appears below the title
	type: 'category' | 'resource';  // Whether this is a category or specific resource
	url?: string;           // URL if this is a direct link
	content?: {
		subcategories?: CategoryItem[];  // For grouping related items (e.g. "County", "State")
		resources?: ResourceItem[];      // Individual resource entries
	};
}

export interface CategoryItem {
	title: string;          // Category name (e.g. "County", "State")
	description?: string;   // Optional category description
	resources?: ResourceItem[];  // Resources in this category
}

export interface ResourceItem {
	title: string;          // Resource name (e.g. "California Agricultural Museum")
	description?: string;   // Optional description text
	url?: string;          // Resource URL
	urlLabel?: string;     // Optional custom text for URL
}

export interface ResourceSection {
	id: string;            // Section identifier (e.g. "sectionAD")
	title: string;         // Section title (e.g. "A-D")
	resources: Resource[]; // Resources in this section
}

export interface ResourceData {
	sections: ResourceSection[];
}