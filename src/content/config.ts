import { defineCollection, z } from 'astro:content'

export const posts = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    publishedOn: z.string().transform((date) => new Date(date)),
    description: z.string(),
    thumbnail: z.string(),
    category: z.string(),
  }),
})
