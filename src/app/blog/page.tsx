import { getAllPublishedContent } from '@/lib/notion';
import { BLUR_FADE_DELAY, formatDate } from '@/lib/utils';
import type { Metadata } from 'next';
import Link from 'next/link';
import React from 'react';
import { baseUrl } from '../sitemap';
import BlurFade from '@/components/motion/BlurFade';

export const revalidate = 60;

export const dynamicParams = true;

async function fetchBlogData() {
  const res = getAllPublishedContent('Blog');

  return res;
}

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: 'Blog',
  description: "I'm an enthusiastic Frontend Developer",
  openGraph: {
    title: 'Labs',
    description: "I'm an enthusiastic Frontend Developer",
    url: baseUrl,
    siteName: 'Labs',
    locale: 'en-US',
    type: 'website',
    images: [
      {
        url: `${baseUrl}/api/og?title=What i wrote? ✍🏻`,
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Labs',
    images: [`${baseUrl}/api/og?title=What i wrote? ✍🏻`],
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

export default async function Blog() {
  const project = await fetchBlogData();

  return (
    <div className="flex flex-col space-y-7">
      <section className="flex flex-col space-y-3">
        <BlurFade delay={BLUR_FADE_DELAY}>
          <h1 className="px-2 font-medium">My Blog</h1>
        </BlurFade>

        <BlurFade delay={BLUR_FADE_DELAY * 3}>
          <div className="flex flex-col">
            {project &&
              project.map((item, i) => (
                <BlurFade key={i} delay={BLUR_FADE_DELAY * 4 + i * 0.05}>
                  <Link
                    href={`/blog/${item.slug}`}
                    scroll={true}
                    className="flex w-full flex-row items-center justify-between rounded-md bg-popover px-2 py-3.5 mix-blend-difference transition-all hover:cursor-pointer hover:bg-primary/10"
                  >
                    <div className="flex flex-col ">
                      <h1 className="text-muted-foreground">{item.title}</h1>
                    </div>
                    <p className="font-mono text-xs text-muted-foreground">
                      {formatDate(item.date)}
                    </p>
                  </Link>
                </BlurFade>
              ))}
          </div>
        </BlurFade>
      </section>
    </div>
  );
}
