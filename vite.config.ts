import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  // O './' garante que os caminhos dos assets (CSS, imagens) sejam sempre encontrados
  base: './',
  plugins: [react()],
  server: {
    port: 5173,
    host: true,
  },
});
