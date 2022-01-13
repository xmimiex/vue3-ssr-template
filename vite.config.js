import { defineConfig } from 'vite'
import vuePlugin from '@vitejs/plugin-vue'
import * as path from 'path'

const isSsr = !!process.env.SSR

export default defineConfig({
  resolve: {
    alias: {
      '@app': path.resolve(__dirname, 'src/app'),
      '@server': path.resolve(__dirname, 'src/server'),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "./src/app/assets/scss/tokens.scss";`,
      },
    },
  },
  plugins: [vuePlugin()],
  build: !isSsr ? {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            const [, module] = /node_modules\/(@?[a-z0-9-]+?[a-z0-9-]+)/.exec(
              id,
            )
            if (module) return `@vendor/${module}.js`
            return '@vendor.js'
          }
        },
      },
    },
  } : {},
  test: {
    all: true,
    global: true,
    src: './src',
    environment: 'happy-dom',
  },
})
