import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://navsankhya.com',
  output: 'static',
  trailingSlash: 'always',
  markdown: { shikiConfig: { theme: 'github-light' } },
});
