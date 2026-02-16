import { defineCollection, z } from "astro:content";

const webApps = defineCollection({
  schema: z.object({
    title: z.string(),
    date: z.string(),
    description: z.string(),
    img: z.string(),
    images: z.array(z.string()).optional(),
    url: z.string().url(),
  }),
});

export const collections = {
  "web-apps": webApps
};