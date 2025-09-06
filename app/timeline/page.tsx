"use client"

import { TimelineSection } from "@/components/timeline/TimelineSection";

export default function TimelinePage() {
	const domain = process.env.NEXT_PUBLIC_BASE_URL;
	if (!domain) {
		return (
			<div>
				Error: NEXT_PUBLIC_BASE_URL is not defined.
			</div>
		);
	}
	const document = `${domain}/timeline.docx`;
	// const pdfDocument = `${domain}/timeline.pdf`;
	return (
		<>
			<div className="w-full flex justify-center">
				<div
					className="relative w-full max-w-[calc(8.5in)] aspect-[8.5/11] bg-white shadow
						lg:max-w-[calc(8.5in)] lg:h-[calc(11in)]"
				>
					<iframe
						src={`https://docs.google.com/gview?url=${document}&embedded=true`}
						className="absolute top-0 left-0 w-full h-full"
						style={{ border: "none" }}
					/>
				</div>
			</div>
			<TimelineSection />
		</>
	);
}
