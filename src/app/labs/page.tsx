import LabsCard from '@/components/shared/LabsCard';
import Paragraph from '@/components/shared/Paragraph';
import { COMPONENTS } from '@/lib/labs';
import type { Metadata } from 'next';
import React from 'react';
import { baseUrl } from '../sitemap';
import BlurFade from '@/components/motion/BlurFade';
import { BLUR_FADE_DELAY } from '@/lib/utils';

export const revalidate = 60;

export const dynamicParams = true;

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: 'Labs',
  description: 'my creative space for experimenting with UI',
  openGraph: {
    title: 'Labs',
    description: 'my creative space for experimenting with UI',
    url: baseUrl,
    siteName: 'Labs',
    locale: 'en-US',
    type: 'website',
    images: [
      {
        url: `${baseUrl}/api/og?title=My Creative Space 🎨`,
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Labs',
    images: [`${baseUrl}/api/og?title=My Creative Space 🎨`],
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

export default function Labs() {
  return (
    <div className="flex flex-col space-y-10">
      <BlurFade delay={BLUR_FADE_DELAY}>
        <Paragraph title="Lab">
          <BlurFade delay={BLUR_FADE_DELAY * 2}>
            <p className="font-light">
              This is my creative space for experimenting with UI, exploring
              components, and designing interactions.
            </p>
          </BlurFade>
        </Paragraph>
      </BlurFade>

      <BlurFade delay={BLUR_FADE_DELAY * 3}>
        <div className="grid w-full max-w-xl grid-flow-dense gap-6 sm:grid-cols-2">
          {COMPONENTS.map((component, i) => (
            <LabsCard
              key={i}
              title={component.name}
              gridClass={component.gridClass}
              slug={component.slug}
              button
            >
              <component.child />
            </LabsCard>
          ))}
        </div>
      </BlurFade>
    </div>
  );
}
