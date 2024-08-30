import { skillItems } from '@/lib/constants';
import Image from 'next/image';
import React from 'react';

export default function Marquee() {
	return (
		<div className="group/marquee relative mt-2 flex gap-x-8 overflow-hidden">
			<div className="absolute left-0 top-0 z-10 h-full w-8 bg-gradient-to-r from-background to-transparent" />
			<div className="absolute right-0 top-0 z-10 h-full w-8 bg-gradient-to-l from-background to-transparent" />
			{Array(4)
				.fill(0)
				.map((_, index) => (
					<div
						key={index}
						className="flex shrink-0 animate-marquee flex-row justify-around gap-8 group-hover/marquee:[animation-play-state:paused]"
					>
						{skillItems.map((item) => (
							<div
								key={item.name}
								className="flex items-center space-x-2"
							>
								<Image
									src={item.icon}
									width={16}
									height={16}
									alt={item.name}
								/>
								<p className="text-sm leading-none text-muted-foreground">
									{item.name}
								</p>
							</div>
						))}
					</div>
				))}
		</div>
	);
}
