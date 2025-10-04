"use client"

import Link from "next/link";

import { TimelineSection } from "@/components/timeline/TimelineSection";
import { Card, CardContent } from "@/components/ui/card";

export default function TimelinePage() {
	return (
		<div className="min-h-screen">
			<div className="container px-4 py-8 lg:px-0">
				<div className="lg:grid lg:grid-cols-[minmax(0,1fr)_minmax(0,54rem)_minmax(0,1fr)] lg:items-start lg:gap-x-12 lg:justify-center">
					<div className="flex justify-center lg:col-start-2">
						<TimelineSection />
					</div>

					<div className="mt-8 lg:mt-0 lg:w-96 shrink-0 lg:self-start lg:col-start-3 lg:justify-self-end">
						<Link href="/california-175-project" className="block h-full">
							<Card className="rounded-xl shadow-sm">
								<CardContent className="p-3">
									<p className="text-center font-semibold uppercase text-[0.8rem] leading-tight">
										<span className="lowercase">see also:</span> THE FRIENDS OF CALIFORNIA ARCHIVES
									</p>
									<p className="mt-1 text-center text-[0.55rem] font-medium leading-snug">
										California 175 Project – Dates of Historic Interest
									</p>
								</CardContent>
							</Card>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}
