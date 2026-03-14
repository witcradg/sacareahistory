import type { Metadata } from "next";
import Link from "next/link";

import { Button } from "@/components/ui/button";

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
		<li className="rounded-2xl border border-[hsl(35_18%_80%)] bg-[hsl(35_28%_96%)] p-5 shadow-sm">
			<div className="flex h-full flex-col gap-3">
				<div className="space-y-1">
					<h3 className="text-lg font-semibold text-stone-900">{member.name}</h3>
					{member.note ? <p className="text-sm text-stone-600">{member.note}</p> : null}
				</div>
				<div className="mt-auto flex flex-wrap gap-3 text-sm">
					{member.href ? (
						<Button
							asChild
							size="sm"
							className="rounded-full bg-amber-400 px-4 text-stone-900 no-underline hover:bg-amber-300"
						>
							<a href={member.href} target="_blank" rel="noreferrer" className="no-underline">
								Visit website
							</a>
						</Button>
					) : null}
					{member.email ? (
						<Button
							asChild
							size="sm"
							variant="outline"
							className="rounded-full border-[hsl(35_18%_74%)] bg-transparent px-4 text-[hsl(34_55%_28%)] no-underline hover:bg-[hsl(40_32%_90%)] hover:text-[hsl(34_55%_24%)]"
						>
							<a href={`mailto:${member.email}`} className="no-underline">
								{member.email}
							</a>
						</Button>
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
				<div className="flex items-center justify-between gap-4 border-b border-[hsl(35_18%_80%)] pb-3">
					<div>
						<h2 className="text-2xl font-semibold text-stone-900">{title}</h2>
						<p className="text-sm text-stone-600">{description}</p>
					</div>
					<div className="rounded-full bg-[hsl(34_40%_28%)] px-3 py-1 text-sm font-semibold text-[hsl(40_45%_92%)]">
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
			<section className="relative overflow-hidden rounded-3xl border border-[hsl(35_18%_78%)] bg-[hsl(35_28%_96%)] px-6 py-8 shadow-sm">
				<div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-[radial-gradient(circle_at_top_right,rgba(239,191,4,0.22),transparent_62%)]" />
				<div className="relative max-w-3xl space-y-4">
					<p className="text-sm font-semibold uppercase tracking-[0.2em] text-stone-500">Membership Directory</p>
					<h1 className="text-4xl font-bold tracking-tight text-stone-900">SacArea member organizations and contacts</h1>
					<p className="text-base leading-7 text-stone-700">
						This page is based on the membership list in <span className="font-medium">SACAREApdMembers1_2026.docx</span>.
						Paid memberships in the source document are marked as expiring on December 30, 2026.
					</p>
					<div className="flex flex-col gap-3 pt-2 sm:flex-row sm:flex-wrap">
						<Button
							asChild
							className="w-fit no-underline bg-amber-400 text-stone-900 hover:bg-amber-300"
						>
							<Link href="mailto:sacarea@winfirst.com?subject=SAHC%20Membership%20Directory%20Update">
								Request a correction
							</Link>
						</Button>
						<Button
							asChild
							variant="outline"
							className="w-fit border-[hsl(35_18%_74%)] bg-transparent text-[hsl(34_55%_28%)] no-underline hover:bg-[hsl(40_32%_90%)] hover:text-[hsl(34_55%_24%)]"
						>
							<Link href="mailto:sacarea@winfirst.com">sacarea@winfirst.com</Link>
						</Button>
					</div>
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
