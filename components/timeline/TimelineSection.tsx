"use client"

import data from './timeline.json'

export const TimelineSection = () => {

	return (
		<div
			id='timeline-section'
			className="my-12 mx-auto w-full max-w-4xl"
		>
			<h2 className="text-2xl font-bold text-center">Timeline</h2>
				<h3 className="text-lg font-semibold text-gray-900 text-center">(Under Construction)</h3>
				{/* https://flowbite.com/docs/components/timeline/ */}
				<ol className="relative border-s border-black dark:border-white">
					{data.timeline.map((tl, index) => (
						<li key={index} className="mb-10 ms-4">
							<div className="absolute w-3 h-3 bg-gray-900 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
							<time className="mb-1 text-sm font-normal leading-none text-gray-900 dark:text-gray-500">
								{tl.event}</time>
							{Array.isArray(tl.desc) ? (
								<ul className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400 list-disc list-inside space-y-1">
									{tl.desc.map((entry: string, idx: number) => (
										<li key={idx}>{entry}</li>
									))}
								</ul>
							) : (
								<p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
									{tl.desc}
								</p>
							)}
						</li>
					))}
				</ol>
			</div>
		)
}
