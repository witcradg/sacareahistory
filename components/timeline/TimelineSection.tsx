"use client"

import data from './timeline.json'

export const TimelineSection = () => {

	return (
		<div id='timeline-section' className="w-1/2 my-12 mx-auto">
			<h2 className="text-2xl font-bold text-center">Timeline</h2>
			{/* https://flowbite.com/docs/components/timeline/ */}
			<ol className="relative border-s border-black dark:border-white">
				{data.timeline.map((tl, index) => (
					<li key={index} className="mb-10 ms-4">
						<div className="absolute w-3 h-3 bg-gray-900 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
						<time className="mb-1 text-sm font-normal leading-none text-gray-900 dark:text-gray-500">
							{tl.event}</time>
						{/* <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
							{tl.title}</h3> */}
						<p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
							{tl.desc}</p>
						{/* <a target="_blank" rel="noopener noreferrer" href={event.url} className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-100 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700">
							Additional Information <svg className="w-3 h-3 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
								<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
							</svg></a> */}
					</li>
				))}
			</ol>
		</div>
	)
}
