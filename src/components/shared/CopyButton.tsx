'use client';
import React, { useState } from 'react';
import { Button } from '../ui/button';
import { CheckIcon, ClipboardListIcon } from 'lucide-react';
import { cn, copyToClipboard } from '@/lib/utils';

type TCopyButtonProps = {
	text: string;
	className?: string;
};

export default function CopyButton({ text, className }: TCopyButtonProps) {
	const [copied, setCopied] = useState<boolean>(false);

	const handleCopy = () => {
		copyToClipboard(text);
		setCopied(true);

		setTimeout(() => setCopied(false), 2000);
	};

	return (
		<Button
			variant="ghost"
			size={'icon'}
			onClick={handleCopy}
			className={cn('text-primary', className)}
		>
			{copied ? (
				<CheckIcon className="h-3.5 w-3.5" />
			) : (
				<ClipboardListIcon className="h-3.5 w-3.5" />
			)}
		</Button>
	);
}
