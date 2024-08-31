'use client';
import React from 'react';
import { Button } from '../ui/button';
import { Twitter } from 'lucide-react';
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from '../ui/tooltip';

export default function ButtonShare() {
	const handleShare = async () => {
		const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent('test')}&url=${encodeURIComponent(window.location.href)}`;

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
						<Twitter className="h-3.5 w-3.5" />
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
