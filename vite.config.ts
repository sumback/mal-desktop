import { defineConfig } from 'vite'
import electron from 'vite-plugin-electron'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

import postcss from './postcss.config'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    electron({
      entry: 'electron/main.ts',
    })
  ],
  css: {
    postcss,
  },
})
