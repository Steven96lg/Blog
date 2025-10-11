// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  markdown: {
    shikiConfig: {
      theme: "dracula", // otros: github-dark, material-palenight, etc.
      wrap: true, // envuelve las líneas largas
    },
  },
  vite: {
    build: {
      sourcemap: true, // aumenta el límite de advertencia a 1600 kB
    },
  },
});
