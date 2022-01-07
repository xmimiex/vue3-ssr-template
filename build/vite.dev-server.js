import { defineConfig } from 'vite'
import vuePlugin from '@vitejs/plugin-vue'
import * as path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(process.cwd(), 'src/app'),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "./src/app/assets/scss/index.scss";`,
      },
    },
  },
  plugins: [vuePlugin()],
})
