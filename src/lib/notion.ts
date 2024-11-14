import { NotionRenderer } from '@notion-render/client';
import { Client } from '@notionhq/client';
import hljsPlugin from '@notion-render/hljs-plugin';
import bookmarkPlugin from '@notion-render/bookmark-plugin';
import { revalidatePath } from 'next/cache';

const notion = new Client({ auth: process.env.NOTION_TOKEN });

export const getAllPublishedContent = async (category: string) => {
  const databaseId = process.env.NOTION_DATABASE_ID;

  if (databaseId) {
    const posts = await notion.databases.query({
      database_id: databaseId,
      filter: {
        and: [
          {
            property: 'Category',
            select: {
              equals: category,
            },
          },
          {
            property: 'Status',
            status: {
              equals: 'Live',
            },
          },
        ],
      },
      sorts: [
        {
          property: 'Date',
          direction: 'descending',
        },
      ],
    });

    const allPosts = posts.results;

    revalidatePath(`/${category.toLowerCase()}`, 'page');

    return allPosts.map((post) => {
      return getPageContent(post);
    });
  }
};

const getPageContent = (post: any) => {
  return {
    id: post.id,
    title: post.properties.title.title[0].plain_text,
    description: post.properties.Description.rich_text[0].plain_text,
    slug: post.properties.Slug.formula.string,
    date: post.properties.Date.date.start,
    endDate: post.properties.Date.date.end,
    link: post.properties.Link.rich_text[0].plain_text,
  };
};

export async function getDetailContent(slug: string) {
  const databaseId = process.env.NOTION_DATABASE_ID;

  if (databaseId) {
    const res = await notion.databases.query({
      database_id: databaseId,
      filter: {
        property: 'Slug',
        formula: {
          string: {
            equals: slug,
          },
        },
      },
    });

    const detailLabs = res?.results[0];

    const responseBlockLabs = await notion.blocks.children.list({
      block_id: detailLabs.id,
    });

    const content: any = responseBlockLabs.results;

    const renderer = new NotionRenderer({
      client: notion,
    });

    renderer.use(hljsPlugin({}));
    renderer.use(bookmarkPlugin(undefined));

    const html = await renderer.render(...content);

    revalidatePath(`/${slug}`, 'page');

    return {
      ...getPageContent(detailLabs),
      content: html,
    };
  }
}
