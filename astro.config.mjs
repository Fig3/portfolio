import { defineConfig } from 'astro/config';

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  site: "https://exquisite-toffee-be1fe7.netlify.app",
  integrations: [preact()]
});