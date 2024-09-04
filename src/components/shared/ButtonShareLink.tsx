'use client';
import React, { useState } from 'react';
import { Button } from '../ui/button';
import { CheckIcon, Copy } from 'lucide-react';
import { copyToClipboard } from '@/lib/utils';
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from '../ui/tooltip';

export default function ButtonShareLink() {
	const [copied, setCopied] = useState(false);

	const handleCopy = () => {
		copyToClipboard(window.location.href);
		setCopied(true);

		setTimeout(() => setCopied(false), 1000);
	};

	return (
		<TooltipProvider>
			<Tooltip>
				<TooltipTrigger>
					<Button
						variant="ghost"
						size="icon"
						className="rounded-full"
						aria-label="copy-link"
						onClick={handleCopy}
					>
						{copied ? (
							<CheckIcon className="h-3.5 w-3.5" />
						) : (
							<Copy className="h-3.5 w-3.5" />
						)}
					</Button>
				</TooltipTrigger>
				<TooltipContent
					side="top"
					className="border bg-popover text-foreground data-[side=top]:slide-in-from-top-1"
				>
					Copy Link
				</TooltipContent>
			</Tooltip>
		</TooltipProvider>
	);
}
