import { Resource } from '../types/resources';

export const resourcesAD: Resource[] = [
	{
		title: "AGRICULTURE",
		type: "category",
		content: {
			resources: [
				{
					title: "California Agricultural Museum",
					url: "http://www.californiaagmuseum.org/",
					urlLabel: "www.californiaagmuseum.org/"
				}
			]
		}
	},
	{
		title: "ARCHITECTURE",
		type: "category",
		content: {
			subcategories: [
				{ title: "Commercial" },
				{ title: "Home" },
				{ title: "Associations – AIA" },
				{ title: "Blogs (under each category) including facebook/social media" },
				{ title: "Tours" }
			]
		}
	},
	{
		title: "ARCHIVES",
		type: "category",
		content: {
			resources: [
				{
					title: "Sacramento History Online",
					url: "http://www.sacramentohistory.org",
					urlLabel: "Sacramento History Online"
				},
				{
					title: "Internet Archive",
					description: "a non-profit library of millions of free books, movies, software, music, and more.",
					url: "https://archive.org",
					urlLabel: "archive.org"
				},
				{
					title: "GLBT Historical Society",
					description: "The archives of the GLBT Historical Society contain approximately 800 collections of personal papers, photographs, audiovisual recordings, and organizational records.",
					url: "http://www.glbthistory.org/archives/",
					urlLabel: "www.glbthistory.org/archives/"
				}
			],
			subcategories: [
				{
					title: "County",
					resources: [
						{
							title: "Yolo County Archives",
							url: "http://www.yolocountylibrary.org/locations/yca-ychc/",
							urlLabel: "www.yolocountylibrary.org/locations/yca-ychc/"
						}
					]
				},
				{
					title: "State",
					resources: [
						{
							title: "California State Archives",
							description: "a public research facility and they encourage you to come in person to do your research.",
							url: "http://www.sos.ca.gov/archives/",
							urlLabel: "www.sos.ca.gov/archives/"
						},
						{
							title: "Sacramento Archives Crawl (one day every October)",
							url: "https://www.sos.ca.gov/archives/public-events/archives-month/archives-crawl",
							urlLabel: "www.sos.ca.gov/archives/public-events/archives-month/archives-crawl"
						}
					]
				},
				{
					title: "Private/Educational"
				}
			]
		}
	},
	{
		title: "ARCHIVISTS",
		type: "category"
	},
	{
		title: "ASSOCIATIONS",
		type: "category"
	},
	{
		title: "AVIATION",
		type: "category",
		content: {
			resources: [
				{
					title: "California Aerospace Museum",
					description: "Aerospace history is a remarkable story, and it all unfolds here at the Museum. Explore the exhibits, sit in the cockpit of an airplane, learn the stories of these",
					url: "http://www.aerospaceca.org/",
					urlLabel: "www.aerospaceca.org"
				}
			]
		}
	},
	{
		title: "BENEVOLENT SOCIETIES",
		type: "category"
	},
	{
		title: "BLOGS",
		type: "category"
	},
	{
		title: "CALENDAR EVENTS (Historical)",
		type: "category",
		description: "Sources for future calendar events",
		content: {
			resources: [
				{
					title: "Sacramento 365",
					description: "Find art and culture events in the Sacramento area. Get times and locations for performing arts, theatre. music. dance. visual arts & museums. film & videos.",
					url: "http://www.sacramento365.com/",
					urlLabel: "www.sacramento365.com"
				},
				{
					title: "Sacramento Archives Crawl (one day every October)",
					url: "https://www.sos.ca.gov/archives/public-events/archives-month/archives-crawl"
				}
			]
		}
	},
	{
		title: "COMMERCE – BUSINESS – TRADE",
		type: "category"
	},
	{
		title: "COMMUNICATION",
		type: "category",
		content: {
			subcategories: [
				{ title: "Radio, TV, Newspapers" }
			]
		}
	},
	{
		title: "COMPILATION (HISTORY)",
		type: "category"
	},
	{
		title: "CONFERENCES, SYMPOSIA",
		type: "category"
	},
	{
		title: "CEMETERIES",
		type: "category",
		content: {
			resources: [
				{
					title: "Website for PDF of New Helvetia Brochure",
					url: "http://coroner.saccounty.net/documents/NewHelvetiaBrochure.pdf"
				},
				{
					title: "List of Sacramento County Cemeteries",
					url: "https://coroner.saccounty.gov/sccac/Pages/CompleteSacramentoCountyCemeteryList.aspx"
				},
				{
					title: "Sacramento County Cemetery Advisory Commission",
					url: "https://coroner.saccounty.gov/sccac/Pages/default.aspx"
				},
				{
					title: "Website for PDF of District Cemetery Brochure",
					url: "http://coroner.saccounty.net/documents/DistCemBro.pdf"
				},
				{
					title: "Sacramento Historic City Cemetery",
					url: "https://historicoldcitycemetery.org"
				},
				{
					title: "Association for Gravestone Studies",
					url: "http://www.gravestonestudies.org",
					urlLabel: "www.gravestonestudies.org"
				}
			]
		}
	},
	{
		title: "CHINESE HISTORY",
		type: "category",
		content: {
			resources: [
				{
					title: "Locke Foundation",
					url: "http://www.locke-foundation.org/?np=true"
				},
				{
					title: "Yee Fow Museum",
					url: "http://www.yeefowmuseum.org/learn.html"
				}
			]
		}
	},
	{
		title: "COMMUNICATION-CONNECTIONS",
		type: "category",
		content: {
			subcategories: [
				{ title: "Pony Express" },
				{ title: "Wells Fargo" }
			]
		}
	},
	{
		title: "CITIES/LOCALITIES",
		type: "category",
		content: {
			subcategories: [
				{ title: "Locke" }
			]
		}
	},
	{
		title: "DEMOGRAPHICS",
		type: "category",
		content: {
			subcategories: [
				{ title: "Population" }
			]
		}
	}
];