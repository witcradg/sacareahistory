import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Memorium',
	description: 'A page to commemorate and remember. This page includes a timeline, notes, and an In Memoriam section for past members.',
};

export default function Page() {
	return (
		<main className="px-6 py-8 max-w-4xl mx-auto space-y-8 container">
			<section>
				<h2 className="text-2xl font-semibold mb-2">In Memoriam</h2>
				<p>
					New addition. We added Ray Oliver as an example. Our goal is to memorialize past contributing members.
				</p>

				{/* Mobile-friendly PDF viewer */}
				<div className="mt-4 w-full">
					{/* Mobile: Show link to open PDF */}
					<div className="block md:hidden">
						<a
							href="Ray Oliver Memorial.pdf"
							target="_blank"
							rel="noopener noreferrer"
							className="inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
						>
							<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
							</svg>
							<span className="text-white">View Ray Oliver Memorial PDF</span>
						</a>
					</div>

					{/* Desktop: Embedded iframe */}
					<div className="hidden md:block">
						<iframe
							src="Ray Oliver Memorial.pdf"
							className="w-full h-[800px] border border-gray-300 rounded-lg"
							title="Ray Oliver Memorial PDF"
						/>
						<p className="text-sm text-gray-300 mt-2">
							Having trouble viewing the PDF?{' '}
							<a
								href="Ray Oliver Memorial.pdf"
								target="_blank"
								rel="noopener noreferrer"
								className="text-blue-600 underline"
							>
								Open in new tab
							</a>
						</p>
					</div>
				</div>
			</section>
		</main>
	)
}
