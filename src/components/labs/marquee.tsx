import React, { FC } from 'react';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { cn } from '@/lib/utils';

const items = [
	{
		name: 'Vigi',
		username: 'mhmmdvg',
		fallback: 'mvigi',
		body: 'Incredible UI!',
	},
	{
		name: 'Shadcn',
		username: 'shadcn',
		fallback: 'CN',
		body: 'Also uses my UI library!',
	},
	{
		name: 'Lee Rob',
		username: 'leerob',
		fallback: 'LR',
		body: "I'm at a loss for words. This sucks!",
	},
	{
		name: 'Github',
		username: 'github',
		fallback: 'GH',
		body: 'Take a look at his Github!',
	},
	{
		name: 'Muhammad Askar',
		username: 'muhammadaskar',
		fallback: 'MA',
		body: 'He looks capable! Hire him.',
	},
	{
		name: 'Vidya Chandradev',
		username: 'catgoesmeow14',
		fallback: 'CM',
		body: 'He looks amazing!',
	},
];

type TMarqueeLabs = {
	marqueeReverse?: boolean;
};

const MarqueeLabs: FC<TMarqueeLabs> = ({ marqueeReverse }) => {
	return (
		<div className="group/marquee flex gap-x-4 overflow-hidden p-2">
			<div className="absolute left-0 top-0 z-10 h-full w-8 bg-gradient-to-r from-background to-transparent" />
			<div className="absolute right-0 top-0 z-10 h-full w-8 bg-gradient-to-l from-background to-transparent" />
			{Array(6)
				.fill(0)
				.map((_, i) => (
					<div
						key={i}
						className={cn(
							'flex shrink-0 animate-marquee flex-row justify-around gap-4 group-hover/marquee:[animation-play-state:paused]',
							marqueeReverse ? '[animation-direction:reverse]' : ''
						)}
					>
						{items.map((item, index) => (
							<div
								key={index}
								className="flex min-w-64 flex-col space-y-3 overflow-hidden rounded-lg border bg-card transition-all hover:bg-muted"
							>
								<div className="flex items-center gap-x-3 px-4 pb-2 pt-3">
									<Avatar className="h-6 w-6">
										<AvatarImage
											src={`https://github.com/${item.username}.png`}
											alt={`${item.username}'s avatar`}
											loading="lazy"
										/>
										<AvatarFallback>{item.fallback}</AvatarFallback>
									</Avatar>
									<div className="flex flex-col gap-y-1">
										<p className="text-sm font-medium leading-none text-foreground">
											{item.name}
										</p>
										<code className="text-xs leading-none text-muted-foreground">
											@{item.username}
										</code>
									</div>
								</div>
								<p className=" px-4 pb-3 pt-2 text-sm text-accent-foreground">
									{item.body}
								</p>
							</div>
						))}
					</div>
				))}
		</div>
	);
};

export default MarqueeLabs;
