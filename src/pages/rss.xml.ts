import rss from '@astrojs/rss'
import type { APIRoute } from 'astro'
import { getCollection } from 'astro:content'

export const GET: APIRoute = async (context) => {
  const posts = await getCollection('posts')

  return rss({
    title: 'Dinh`s Blog',
    description: 'My personal blog',
    site: context.site!,
    items: posts.map((post) => {
      return {
        title: post.data.title,
        description: post.data.description,
        link: `${context.site!}/posts/${post.slug}`,
        pubDate: post.data.publishedOn as Date,
      }
    }),
    customData: `<language>en-us</language>`,
  })
}
