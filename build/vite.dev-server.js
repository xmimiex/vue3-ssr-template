import { defineConfig } from 'vite'
import vuePlugin from '@vitejs/plugin-vue'
import * as path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@app': path.resolve(process.cwd(), 'src/app'),
      '@server': path.resolve(process.cwd(), 'src/server'),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "@app/assets/scss/tokens.scss";`,
      },
    },
  },
  plugins: [vuePlugin()],
})
