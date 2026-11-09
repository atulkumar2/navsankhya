import type { APIRoute } from 'astro';
export const GET: APIRoute = ({ site }) => new Response(import.meta.env.VERCEL_ENV === 'preview' ? 'User-agent: *\nDisallow: /\n' : `User-agent: *\nAllow: /\nSitemap: ${new URL('/sitemap.xml', site)}\n`);
