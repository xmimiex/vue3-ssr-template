import { defineConfig } from 'vite'
import vuePlugin from '@vitejs/plugin-vue'
import * as path from 'path'
import { hashCode } from '../src/server/utils/collectDevStyles'

const cssCsrPlugin = () => ({
  enforce: 'post',
  resolveId (id) {
    return id
  },
  transform(code, id, { ssr }) {
    if (id.match(/s?css|style/) && code.includes('import.meta.hot') && !ssr) {
      const hashedId = hashCode(id)
      return code + `
        document.querySelectorAll(
          "[vite-module-id='${hashedId}']"
        ).forEach(el => el.remove())`
    }
  },
})

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
        additionalData: `@import "@app/assets/scss/dna.scss";`,
      },
    },
  },
  plugins: [vuePlugin(), cssCsrPlugin()],
})
