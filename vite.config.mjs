import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  server: {
    port: 4028,
    host: '0.0.0.0',
  },
  preview: {
    port: 4028,
    host: '0.0.0.0',
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          const normalizedId = id.replaceAll('\\', '/');
          if (!normalizedId.includes('/node_modules/')) return;

          if (
            normalizedId.includes('/node_modules/react/') ||
            normalizedId.includes('/node_modules/react-dom/') ||
            normalizedId.includes('/node_modules/scheduler/')
          ) {
            return 'framework';
          }

          if (normalizedId.includes('/node_modules/react-router-dom/')) return 'router';
          if (
            normalizedId.includes('/node_modules/@reduxjs/toolkit/') ||
            normalizedId.includes('/node_modules/react-redux/')
          ) {
            return 'state';
          }
          if (
            normalizedId.includes('/node_modules/lucide-react/') ||
            normalizedId.includes('/node_modules/@heroicons/react/')
          ) {
            return 'icons';
          }
        },
      },
    },
  },
});
