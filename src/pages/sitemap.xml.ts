import type { APIRoute } from 'astro';
import { publishedArticles } from '../lib/content';
import { articlePath } from '../lib/publication.mjs';
export const GET: APIRoute = async ({ site }) => {
  const routes = ['/', '/resume/', '/it/', '/non-it/', '/links/', '/github/', ...(await publishedArticles()).map(entry => articlePath(entry.id))];
  return new Response(`<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${routes.map(route => `<url><loc>${new URL(route, site)}</loc></url>`).join('')}</urlset>`, { headers: { 'Content-Type': 'application/xml' } });
};
