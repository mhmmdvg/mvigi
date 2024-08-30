import Card from '@/components/shared/Card';
import { getAllPublishedContent } from '@/lib/notion';
import type { Metadata } from 'next';
import React from 'react';

async function fetchProjectData() {
	const res = getAllPublishedContent('Project');

	return res;
}

export const metadata: Metadata = {
	title: 'Project',
	description: 'MVIGI Project',
};

export default async function Project() {
	const project = await fetchProjectData();

	return (
		<div className="flex flex-col space-y-7">
			<section className="flex flex-col space-y-3">
				<h1 className="px-2 font-medium">My Project</h1>
				{project &&
					project.map((item, i) => (
						<Card
							key={i}
							title={item.title}
							href={item.link}
							description={item.description}
							date={item.date}
							variant="project"
						/>
					))}
			</section>
		</div>
	);
}
