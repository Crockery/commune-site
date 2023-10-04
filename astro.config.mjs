import { defineConfig } from 'astro/config';
import image from '@rollup/plugin-image';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [
      image()
    ]
  }
});
