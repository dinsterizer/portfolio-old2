import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import robotsTxt from 'astro-robots-txt';
import { defineConfig } from 'astro/config';

import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  site: 'https://divn.dev',
  output: "hybrid",
  adapter: cloudflare(),
  integrations: [mdx(), sitemap(), robotsTxt(), tailwind({
    applyBaseStyles: false
  })],
});