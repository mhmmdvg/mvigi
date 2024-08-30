import React from 'react';
import { BundledLanguage, codeToHtml } from 'shiki';
import { transformerNotationHighlight } from '@shikijs/transformers';
import { cn } from '@/lib/utils';

export type TCodeProps = {
	code: string;
	lang?: BundledLanguage;
};

export default async function Shiki({ code, lang = 'typescript' }: TCodeProps) {
	const html = await codeToHtml(code, {
		lang,
		themes: { dark: 'github-dark', light: 'github-light' },
		transformers: [transformerNotationHighlight()],
	});

	return (
		<div
			className={cn(
				'anim no-scrollbar w-full min-w-0 overflow-x-auto rounded-xl text-xs md:text-sm [&_code]:block [&_code]:w-fit [&_code]:min-w-full'
			)}
			dangerouslySetInnerHTML={{ __html: html }}
		/>
	);
}
