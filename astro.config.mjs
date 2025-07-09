// @ts-check
import { defineConfig } from 'astro/config';

import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: process.env.PUBLIC_SITE_URL,
  integrations: [sitemap()],
  image:{
    domains:['m.media-amazon.com','i.ebayimg.com','tienda-kuromi.vercel.app']
  }
});