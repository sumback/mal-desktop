import { defineConfig } from 'vite';
import electron from 'vite-plugin-electron';
import renderer from 'vite-plugin-electron-renderer';
import eslint from 'vite-plugin-eslint';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';

import postcss from './postcss.config';

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  resolve: {
    alias: {
      '@/': `${resolve(__dirname, 'src')}/`,
    },
  },
  plugins: [
    eslint(),
    vue(),
    electron({
      entry: 'electron/main.ts',
    }),
    renderer(/* options */),
  ],
  css: {
    postcss,
  },
  build: {
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return id.toString().split('node_modules/')[1].split('/')[0].toString();
          }
        },
      },
    },
  },
});
