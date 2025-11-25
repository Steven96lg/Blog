// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://steven96lg.github.io/blog',
  base: '/blog/',

  // Muy importante para GitHub Pages: generar HTML estático
  output: 'static',

  // Aquí SÍ va outDir (a nivel raíz, no dentro de build)
  outDir: 'docs',
  markdown: {
    shikiConfig: {
      theme: "dracula", // otros: github-dark, material-palenight, etc.
      wrap: true, // envuelve las líneas largas
    },
  },
  build: {
    assets: 'assets', // Cambiar de '_astro' a 'assets' (GitHub Pages ignora carpetas con '_')
  },
  vite: {
    build: {
      sourcemap: true, // aumenta el límite de advertencia a 1600 kB
    },
  },
  
});
