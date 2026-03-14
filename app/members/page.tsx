import type { Metadata } from "next";

type Member = {
	name: string;
	href?: string;
	email?: string;
	note?: string;
};

const paidMembers: Member[] = [
	{ name: "American Windmills", href: "https://windmills.net" },
	{ name: "David Ballard", email: "dballard1952@gmail.com" },
	{ name: "Chinese American Council of Sacramento", href: "https://www.cacsweb.org/council/" },
	{ name: "Citrus Heights Historical Society", href: "https://citrusheightshistory.org" },
	{ name: "Elk Grove Historical Society", href: "https://elkgrovehistoricalsociety.com" },
	{ name: "Florin Historical Society", href: "https://www.florinhistoricalsociety.org" },
	{ name: "Friends of California Archives", href: "https://thefriendsofcaarchives.org" },
	{ name: "Jewish Genealogical Society of Sacramento", href: "https://www.jewishgen.org/jgs-sacramento/" },
	{ name: "Kirk Callan Smith", email: "kirkcallansmith@mindspring.com" },
	{ name: "Locke Foundation", href: "https://locke-foundation.org" },
	{ name: "Old Sacramento Historic Site", href: "https://www.oldsacramento.com" },
	{ name: "Orangevale History Project", href: "https://www.orangevalehistory.org" },
	{ name: "Patrick Ranch", href: "https://www.patrickranchmuseum.org" },
	{ name: "Peter Meyerhof", email: "p.meyerhof@comcase.net" },
	{ name: "Renaissance Society", href: "https://www.csus.edu/college/social-sciences-interdisciplinary-studies/renaissance-society/" },
	{ name: "Sacramento County Historical Society", href: "https://www.achistoricalsociety.org" },
	{ name: "Sacramento Historic Old City Cemetery", href: "https://historicoldcitycemetery.org" },
	{ name: "Sacramento Pioneer Association", href: "https://sacramentopioneer.org" },
	{ name: "Sacramento River Delta Historical Society", href: "http://www.srdhs.org" },
	{ name: "Sacramento Valley Museum", email: "sacramentovalleymuseum@gmail.com", note: "Document note: (1/18)" },
	{ name: "Sonoma County Historical Society", email: "info@sonomavalleyhistory.com" },
	{ name: "SSVMS Museum of Medical History", href: "https://museumofmedicalhistory.org/visit" },
	{ name: "Vintage Iron Museum", href: "https://www.patrickranchmuseum.org/pdf/Vintage%20Iron%20Brochure.pdf" },
	{ name: "West Sacramento Historical Society", href: "https://westsachistoricalsociety.org" },
	{ name: "Winters Historical Society", email: "historicalsocietyofwinters@gmail.com" },
	{ name: "Yolo County Historical Society", href: "http://www.ychs.org" },
];

const pendingMembers: Member[] = [
	{ name: "Placer County Historical Society", href: "https://www.placer.ca.gov/2489/Museums" },
	{ name: "San Joaquin Historical Society", href: "https://sanjoaquinhistory.org" },
	{ name: "Galt Area Historical Society", href: "https://www.galthistory.com" },
	{ name: "Sacramento Valley Historical Railways", href: "https://woodlandtraindepot.org" },
	{ name: "Native Daughters", href: "https://www.ndgw.org", note: "Listed with contact: Vicki Contente" },
	{ name: "Dixon Historical Society", href: "https://www.dixonhistoricalsociety.org" },
	{ name: "Folsom Historical Society", href: "https://www.folsomhistory.org" },
	{ name: "Fair Oaks Historical Society", href: "https://fairoakshistory.org" },
	{ name: "Old Sacramento Living History", href: "https://saclivinghistory.org" },
	{ name: "Pioneer Mutual Hook and Ladder", href: "https://www.facebook.com/sacramentofiremuseum/photos/" },
	{ name: "Greg Voelm" },
	{
		name: "Military Museum Rancho Cordova",
		href: "https://www.worldwar1centennial.org/california-offices-and-organizations-remembering-ww1/3279-california-state-military-museum.html",
	},
	{ name: "John Allen", note: "CSUS" },
	{
		name: "Roseville Carnegie Museum",
		href: "https://www.rosevillehistorical.org/legacy",
		note: "Listed with contact: Audrey Lokteff, Director",
	},
];

export const metadata: Metadata = {
	title: "Members",
	description: "Membership directory for the SacArea History Consortium.",
};

function MemberCard({ member }: { member: Member }) {
	return (
		<li className="rounded-2xl border border-stone-300/80 bg-card/80 p-5 shadow-sm">
			<div className="flex h-full flex-col gap-3">
				<div className="space-y-1">
					<h3 className="text-lg font-semibold text-foreground">{member.name}</h3>
					{member.note ? <p className="text-sm text-muted-foreground">{member.note}</p> : null}
				</div>
				<div className="mt-auto flex flex-wrap gap-3 text-sm">
					{member.href ? (
						<a
							href={member.href}
							target="_blank"
							rel="noreferrer"
							className="inline-flex items-center rounded-full border border-amber-700/25 bg-amber-100 px-3 py-1 no-underline transition hover:bg-amber-200"
						>
							Visit website
						</a>
					) : null}
					{member.email ? (
						<a
							href={`mailto:${member.email}`}
							className="inline-flex items-center rounded-full border border-stone-400/40 bg-secondary px-3 py-1 no-underline transition hover:bg-stone-200"
						>
							{member.email}
						</a>
					) : null}
				</div>
			</div>
		</li>
	);
}

function MemberSection({
	title,
	description,
	members,
}: {
	title: string;
	description: string;
	members: Member[];
}) {
	return (
		<section className="space-y-5">
			<div className="space-y-2">
				<div className="flex items-center justify-between gap-4 border-b border-stone-300 pb-3">
					<div>
						<h2 className="text-2xl font-semibold">{title}</h2>
						<p className="text-sm text-muted-foreground">{description}</p>
					</div>
					<div className="rounded-full bg-stone-800 px-3 py-1 text-sm font-semibold text-stone-100">
						{members.length} listed
					</div>
				</div>
			</div>
			<ul className="grid gap-4 md:grid-cols-2">
				{members.map((member) => (
					<MemberCard key={member.name} member={member} />
				))}
			</ul>
		</section>
	);
}

export default function MembersPage() {
	return (
		<main className="container max-w-6xl px-6 py-10">
			<section className="rounded-3xl border border-stone-300 bg-gradient-to-br from-amber-50 via-background to-stone-100 px-6 py-8 shadow-sm">
				<div className="max-w-3xl space-y-4">
					<p className="text-sm font-semibold uppercase tracking-[0.2em] text-stone-600">Membership Directory</p>
					<h1 className="text-4xl font-bold tracking-tight text-foreground">SacArea member organizations and contacts</h1>
					<p className="text-base leading-7 text-stone-700">
						This page is based on the membership list in <span className="font-medium">SACAREApdMembers1_2026.docx</span>.
						Paid memberships in the source document are marked as expiring on December 30, 2026.
					</p>
					<p className="text-sm leading-6 text-muted-foreground">
						If your organization needs a correction or a direct website link added, contact SacArea so the directory can be updated.
					</p>
				</div>
			</section>

			<div className="mt-10 space-y-10">
				<MemberSection
					title="Paid members"
					description="Organizations and individual members listed in the source document as paid through December 30, 2026."
					members={paidMembers}
				/>
				<MemberSection
					title="Members needing payment confirmation"
					description="Organizations and contacts listed in the source document under the follow-up section for payment confirmation."
					members={pendingMembers}
				/>
			</div>
		</main>
	);
}
