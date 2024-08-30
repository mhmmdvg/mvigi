import React, { Suspense } from 'react';
import CopyButton from './CopyButton';
import Shiki, { TCodeProps } from './Shiki';

export default function Code({ code, lang }: TCodeProps) {
	return (
		<div className="anim relative h-fit w-full overflow-hidden rounded-lg bg-[#f7f7f7] dark:bg-[#101010]">
			<Suspense
				fallback={
					<div className="h-[272px] w-full animate-pulse bg-[#f7f7f7] dark:bg-[#101010]" />
				}
			>
				<Shiki code={code} lang={lang} />
			</Suspense>
			<div className="absolute right-0 top-0 z-0 h-full w-12 bg-gradient-to-r from-transparent to-[#f7f7f7] dark:to-[#101010]" />

			<CopyButton text={code} className="absolute right-2 top-2 h-8 w-8" />
		</div>
	);
}
