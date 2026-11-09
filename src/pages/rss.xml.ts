import type { APIRoute } from 'astro';
import { publishedArticles } from '../lib/content';
import { articlePath } from '../lib/publication.mjs';
const escape = (value: string) => value.replace(/[<>&"']/g, char => ({ '<': '&lt;', '>': '&gt;', '&': '&amp;', '"': '&quot;', "'": '&apos;' }[char]!));
export const GET: APIRoute = async ({ site }) => {
  const entries = await publishedArticles();
  const items = entries.map(entry => `<item><title>${escape(entry.data.title)}</title><description>${escape(entry.data.description)}</description><link>${new URL(articlePath(entry.id), site)}</link><guid>${new URL(articlePath(entry.id), site)}</guid><pubDate>${new Date(`${entry.data.publishedAt}T00:00:00Z`).toUTCString()}</pubDate></item>`).join('');
  return new Response(`<?xml version="1.0" encoding="UTF-8"?><rss version="2.0"><channel><title>Navsankhya</title><link>${site}</link><description>Knowledge, notes, and experiments by Atul Kumar.</description><language>en</language>${items}</channel></rss>`, { headers: { 'Content-Type': 'application/xml' } });
};
