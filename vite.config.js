import { defineConfig } from 'vite';

export default defineConfig({
  // O './' garante que os caminhos dos assets (CSS, imagens) sejam sempre encontrados
  base: './',
  server: {
    port: 5173,
    host: true
  }
});