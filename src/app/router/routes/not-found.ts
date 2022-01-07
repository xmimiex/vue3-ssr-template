import { RouteRecordRaw } from 'vue-router'
import { ROUTES } from '../constants'
import { AppKoaContext } from '@/typings/ssr'

export default (serverContext?: AppKoaContext): RouteRecordRaw => ({
  path: '/:pathMatch(.*)*',
  name: ROUTES.NOTFOUND,
  beforeEnter: (to,from, next) => {
    if (serverContext) serverContext.status = 404
    next()
  },
  component: () => import(/* webpackChunkName: "notFound" */ '../../pages/NotFound.vue'),
})
