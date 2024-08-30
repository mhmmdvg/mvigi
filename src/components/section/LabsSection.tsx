import React from 'react';
import Paragraph from '../shared/Paragraph';
import LabsCard from '../shared/LabsCard';
import { COMPONENTS } from '@/lib/labs';

export default function LabsSection() {
	const newLabs = COMPONENTS[COMPONENTS.length - 1];

	return (
		<section className="flex flex-col space-y-3">
			<Paragraph
				title="Latest from Labs"
				link
				href={`/labs/${newLabs.slug}`}
			/>
			<LabsCard gridClass="regular-card">
				{newLabs.slug === 'marquee' && <newLabs.child marqueeReverse />}
				<newLabs.child />
			</LabsCard>
		</section>
	);
}
