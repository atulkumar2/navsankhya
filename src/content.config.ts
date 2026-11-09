import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const date = z.string().regex(/^\d{4}-\d{2}-\d{2}$/).refine(value => {
  const parsed = new Date(`${value}T00:00:00Z`);
  return !Number.isNaN(parsed.valueOf()) && parsed.toISOString().slice(0, 10) === value;
}, 'Use a real calendar date');

const articles = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/articles' }),
  schema: z.object({
    title: z.string().min(1), description: z.string().min(1),
    publishedAt: date, updatedAt: date.optional(),
    type: z.enum(['article', 'experiment']),
    tags: z.array(z.string()).default([]), draft: z.boolean().default(true),
    cover: z.string().optional(), coverAlt: z.string().optional(),
  }).refine(data => !data.updatedAt || data.updatedAt >= data.publishedAt,
    'Update date cannot precede publication')
    .refine(data => !data.cover || data.coverAlt !== undefined, 'Cover images require coverAlt'),
});

const pages = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/pages' }),
  schema: z.object({ title: z.string(), description: z.string() }),
});

export const collections = { articles, pages };
