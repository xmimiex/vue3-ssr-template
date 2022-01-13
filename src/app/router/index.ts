import { createMemoryHistory, createRouter, createWebHistory } from 'vue-router'
import getRoutes from '@app/router/routes'
import isServerSide from '@app/utils/context'
import { KoaContext } from '@server/typings/server'
import useConfig from '@app/stores/config'

export default (serverContext?: KoaContext) => {
  const config = useConfig()
  const router = createRouter({
    history: isServerSide() ? createMemoryHistory() : createWebHistory(),
    routes: getRoutes(serverContext),
  })

  router.beforeEach((to, _from, next) => {
    const cacheDuration = config.cacheControl.pages[to.name as string] || null
    if (serverContext && cacheDuration) {
      serverContext.set('Cache-Control', `max-age=0, s-maxage=${cacheDuration}, public`)
    }
    next()
  })

  return router
}
