import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  build: {
    target: "es2022"
  },
  esbuild: {
    supported: {
      'top-level-await': true
    },
  },
  plugins: [react()],
  resolve: {
    alias: {
      '@/': path.resolve(__dirname, 'component/*'),
    },
  },
  server: {
    proxy: {
      '/socket.io': {
        target: 'http://localhost:3000',
        ws: true,
      },
    },
    hmr: {
      overlay: false,
    },
  },
});
