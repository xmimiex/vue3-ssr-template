import { RouteRecordRaw } from 'vue-router'
import { PAGE_CACHE_CONTROL, ROUTES } from '../constants'
import { AppKoaContext } from '@/typings/ssr'

export default (serverContext?: AppKoaContext): RouteRecordRaw => ({
  path: 'c/:params*',
  name: ROUTES.CATEGORY,
  beforeEnter: (to,from, next) => {
    if (serverContext)
      serverContext.set('Cache-Control', `max-age=0, s-maxage=${PAGE_CACHE_CONTROL.SIX_MONTHS_DURATION}, public`)
    next()
  },
  component: () => import(/* webpackChunkName: "notFound" */ '../../pages/NotFound.vue'),
})
