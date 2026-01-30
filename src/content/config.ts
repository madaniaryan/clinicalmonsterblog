import { defineCollection, z } from "astro:content";

const posts = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    date: z.union([z.string(), z.date()]),
     author: z.string().optional(),
    excerpt: z.string().optional(),
    heroImage: z.string().optional(),
  }),
});

export const collections = { posts };
