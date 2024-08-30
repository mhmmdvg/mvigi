import { cn } from '@/lib/utils';
import { NextPage } from 'next';
import React from 'react';
import { Button } from '../ui/button';
import Link from 'next/link';
import { MoveRight } from 'lucide-react';

type TLabsCard = {
	children: React.ReactNode;
	slug?: string;
	gridClass?: 'regular-card' | 'medium-card' | 'large-card' | 'default-card';
	button?: boolean;
	className?: string;
};

export default function LabsCard({
	children,
	slug,
	gridClass,
	button,
	className,
}: TLabsCard) {
	const sizeVariant: { [key: string]: string } = {
		'regular-card': 'aspect-[5/4] p-2 sm:aspect-square',
		'medium-card': 'aspect-square p-8',
		'large-card': 'aspect-square sm:aspect-[2/1] sm:col-span-2 p-8',
		'default-card': '',
	};

	return (
		<div
			className={cn(
				'anim group/card relative z-50 flex h-auto w-full flex-col items-center justify-center overflow-hidden rounded-xl border ',
				sizeVariant[gridClass || 'regular-card'],
				className
			)}
		>
			<div className="absolute h-full w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
			{children}

			{button && (
				<Button
					variant="secondary"
					size="icon"
					asChild
					className="absolute right-3 top-3 z-[100] h-8 w-8 transition-all duration-300 ease-in-out lg:-translate-y-8 lg:scale-75 lg:opacity-0 lg:group-hover/card:translate-y-0 lg:group-hover/card:scale-100 lg:group-hover/card:opacity-100"
				>
					<Link href={`labs/${slug}`} scroll={true}>
						<MoveRight className="h-4 w-4" />
					</Link>
				</Button>
			)}
		</div>
	);
}
