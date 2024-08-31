import type { Metadata } from 'next';
import { GeistSans } from 'geist/font/sans';
import './globals.css';
import Dock from '@/components/shared/Dock';
import { ThemeProvider } from '@/components/shared/ThemeProvider';
import { baseUrl } from './sitemap';

export const metadata: Metadata = {
	metadataBase: new URL(baseUrl),
	title: 'MVIGI',
	description: 'MVIGI Frontend Developer',
	openGraph: {
		title: 'MVIGI Frontend Developer',
		url: baseUrl,
		siteName: 'MVigi',
		locale: 'en-US',
		type: 'website',
		images: [
			{
				url: `${baseUrl}/og`,
			},
		],
	},

	twitter: {
		card: 'summary_large_image',
		title: 'MVigi',
		images: [`${baseUrl}/og`],
	},

	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			'max-video-preview': -1,
			'max-image-preview': 'large',
			'max-snippet': -1,
		},
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" className={GeistSans.className}>
			<body>
				<ThemeProvider
					attribute="class"
					defaultTheme="light"
					enableSystem
					disableTransitionOnChange
				>
					<div className="relative flex flex-col items-center justify-center transition-all duration-100 selection:bg-black selection:text-white dark:selection:bg-white dark:selection:text-black">
						<div className="pointer-events-none fixed left-0 top-0 z-50 h-8 w-full bg-gradient-to-b from-background to-transparent md:h-10 lg:h-12" />
						<main className="mx-auto mb-14 w-full max-w-screen-sm flex-1 px-4 pb-8 pt-20 ">
							{children}
						</main>
						<Dock />
					</div>
				</ThemeProvider>
			</body>
		</html>
	);
}
