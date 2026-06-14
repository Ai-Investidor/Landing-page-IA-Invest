import { defineConfig } from 'vite';

export default defineConfig({
  base: '/page/',
  server: {
    port: 5173,
    host: true
  }
});