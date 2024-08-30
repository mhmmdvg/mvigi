import Notification from '@/components/labs/notification';
import LabsCard from '@/components/shared/LabsCard';
import Paragraph from '@/components/shared/Paragraph';
import { COMPONENTS } from '@/lib/labs';
import React from 'react';

export default function Labs() {
	return (
		<div className="flex flex-col space-y-10">
			<Paragraph title="Lab">
				<p className="font-light">
					This is my creative space for experimenting with UI, exploring
					components, and designing interactions.
				</p>
			</Paragraph>

			<div className="grid w-full max-w-xl grid-flow-dense grid-cols-2 gap-6">
				{COMPONENTS.map((component, i) => (
					<LabsCard
						key={i}
						gridClass={component.gridClass}
						slug={component.slug}
						button
					>
						<component.child />
					</LabsCard>
				))}
			</div>
		</div>
	);
}
