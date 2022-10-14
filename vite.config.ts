import { defineConfig } from 'vite';
import electron from 'vite-plugin-electron';
import eslint from 'vite-plugin-eslint';
import vue from '@vitejs/plugin-vue';

import postcss from './postcss.config';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    eslint(),
    vue(),
    electron({
      entry: 'electron/main.ts',
    }),
  ],
  css: {
    postcss,
  },
});
