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
			<iframe
				src={`https://docs.google.com/gview?url=${document}&embedded=true`}
				width="350"
				height="500"
			/>
			<TimelineSection />
		</>
	);
}
