"use client"

export default function California175ProjectPage() {
	const domain =
		process.env.NEXT_PUBLIC_BASE_URL ||
		(typeof window !== "undefined" ? window.location.origin : "");
	if (!domain) {
		return <div>Error: Unable to resolve base URL for document viewer.</div>;
	}

	const document = `${domain}/FriendsCaArchives175HistoricDates.docx`;

	return (
		<div className="w-full flex justify-center">
			<div
				className="relative w-full max-w-[calc(8.5in)] aspect-[8.5/11] bg-white shadow lg:max-w-[calc(8.5in)] lg:h-[calc(11in)]"
			>
				<iframe
					src={`https://docs.google.com/gview?url=${document}&embedded=true`}
					className="absolute top-0 left-0 w-full h-full"
					style={{ border: "none" }}
				/>
			</div>
		</div>
	);
}
