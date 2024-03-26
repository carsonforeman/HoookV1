// vite.config.js
import routify from '@roxi/routify/vite-plugin';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import preprocess from 'svelte-preprocess';
import { defineConfig } from 'vite';
import { resolve } from 'path';

const production = process.env.NODE_ENV === 'production';

export default defineConfig({
  clearScreen: false,
  resolve: {
    alias: {
      '@': resolve('src'),
    },
  },
  plugins: [
    routify({
      ssr: {
        enable: false,
      },
    }),
    svelte({
      compilerOptions: {
        dev: !production,
        hydratable: !!process.env.ROUTIFY_SSR_ENABLE,
      },
      extensions: ['.svelte'],
      preprocess: [preprocess()],
    }),
  ],
  server: {
    port: 5173,
  },
  build: {
    // Specify the entry point for your application
    rollupOptions: {
      input: 'src/routes/index.svelte', // Adjust the path as per your project structure
    },
  },
});
