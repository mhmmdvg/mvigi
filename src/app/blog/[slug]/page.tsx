import { baseUrl } from '@/app/sitemap';
import HeaderDetail from '@/components/details/HeaderDetail';
import BlurFade from '@/components/motion/BlurFade';
import { getDetailContent } from '@/lib/notion';
import { BLUR_FADE_DELAY } from '@/lib/utils';
import React from 'react';

async function fetchBlogData(slug: string) {
  const res = getDetailContent(slug);

  return res;
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const blog = await fetchBlogData(params.slug);

  if (!blog) {
    return null;
  }

  return {
    title: blog?.title || params.slug,
    description: `Read more about "${blog.title}" on my blog. 🚀`,
    openGraph: {
      title: blog?.title || params.slug,
      description: `Read more about "${blog.title}" on my blog. 🚀`,
      url: `${baseUrl}/blog/${blog?.slug}`,
      type: 'article',
      images: [
        {
          url: `${baseUrl}/api/og?title=${blog?.title}`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: blog.title,
      images: [`${baseUrl}/api/og?title=${blog?.title}`],
    },
  };
}

export default async function BlogDetail({
  params,
}: {
  params: { slug: string };
}) {
  const blog = await fetchBlogData(params?.slug);

  if (!blog) {
    return (
      <section className="pad-x flex h-auto w-full grow flex-col items-center justify-center">
        <h2 className="text-center text-xl font-semibold text-accent-foreground">
          Content Not Found
        </h2>
      </section>
    );
  }

  return (
    <main className="space-y-7">
      <BlurFade delay={BLUR_FADE_DELAY}>
        <HeaderDetail backLabel="back to all post" shareName={blog.title} />
      </BlurFade>
      <div className="space-y-4">
        <BlurFade delay={BLUR_FADE_DELAY * 3}>
          <h1 className="text-xl font-medium">{blog.title}</h1>
        </BlurFade>
        <BlurFade delay={BLUR_FADE_DELAY * 4}>
          <div
            className="prose prose-h2:text-xl prose-h2:font-medium prose-h2:text-primary prose-p:font-light prose-p:text-muted-foreground prose-li:font-light prose-li:text-muted-foreground"
            dangerouslySetInnerHTML={{ __html: blog.content }}
          />
        </BlurFade>
      </div>
    </main>
  );
}
