import { getCollection } from 'astro:content';
import { articlePath, isPublished } from './publication.mjs';

export async function publishedArticles() {
  const entries = await getCollection('articles');
  // Validate every route, including drafts, before filtering.
  entries.forEach(entry => articlePath(entry.id));
  return entries.filter(entry => isPublished(entry.data))
    .sort((a, b) => b.data.publishedAt.localeCompare(a.data.publishedAt) || a.id.localeCompare(b.id));
}

export function formatDate(date: string) {
  return new Intl.DateTimeFormat('en', { dateStyle: 'medium', timeZone: 'UTC' })
    .format(new Date(`${date}T00:00:00Z`));
}
