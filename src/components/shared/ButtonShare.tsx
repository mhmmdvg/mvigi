'use client';
import React from 'react';
import { Button } from '../ui/button';
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from '../ui/tooltip';
import { TwitterLogoIcon } from '@radix-ui/react-icons';

type TButtonShareProps = {
	text: string;
};

export default function ButtonShare({ text }: TButtonShareProps) {
	const handleShare = async () => {
		const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(window.location.href)}`;

		window.open(twitterUrl, '_blank');
	};

	return (
		<TooltipProvider>
			<Tooltip>
				<TooltipTrigger>
					<Button
						variant="ghost"
						size="icon"
						className="rounded-full"
						aria-label="share-on-twitter"
						onClick={handleShare}
					>
						<TwitterLogoIcon className="h-3.5 w-3.5" />
					</Button>
				</TooltipTrigger>
				<TooltipContent
					side="top"
					className="border bg-popover text-foreground data-[side=top]:slide-in-from-top-1"
				>
					Share on Twitter
				</TooltipContent>
			</Tooltip>
		</TooltipProvider>
	);
}
