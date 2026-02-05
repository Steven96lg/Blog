
import { defineCollection, z } from 'astro:content';

const postCollections = defineCollection({
    schema: ({ image }) => z.object({
        title: z.string(),
        pubDate: z.date(),
        description: z.string(),
        tag: z.string(),
        image: image().optional(),
    })
})

const ciberseguridadCollections = defineCollection({
    schema: ({ image }) => z.object({
        title: z.string(),
        pubDate: z.date(),
        description: z.string(),
        tag: z.string(),
        image: image().optional(),
    })
})

export const collections = {
    'posts': postCollections,
    'ciberseguridad': ciberseguridadCollections
};