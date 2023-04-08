import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';
import suidPlugin from '@suid/vite-plugin';
import devtools from 'solid-devtools/vite';

export default defineConfig({
  plugins: [devtools({
    /* additional options */
    autoname: true, // e.g. enable autoname
  }), suidPlugin(), solidPlugin()],
  server: {
    port: 3000,
  },
  build: {
    target: 'esnext',
  },
});
