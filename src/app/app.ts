import { createSSRApp } from 'vue'
import { createHead } from '@vueuse/head'
import App from './App.vue'
import createRouter from './router'
import createStore from './stores'
import { Pinia } from 'pinia'
import createI18n from './i18n'
import { AppKoaContext } from '@/typings/ssr'

import './assets/scss/index.scss'

interface CreateAppArgs {
  serverContext?: AppKoaContext
  postCreateStore: (_store?: Pinia) => Promise<void>
}

export default async ({ serverContext, postCreateStore }: CreateAppArgs) => {
  const app = createSSRApp(App)

  const store = createStore()
  app.use(store)
  await postCreateStore(store)

  const router = createRouter(serverContext)
  app.use(router)

  const head = createHead()
  app.use(head)

  const i18n = await createI18n()
  app.use(i18n)

  app.config.globalProperties = {
    ...app.config.globalProperties,
  }

  return { app, router, store, head }
}
