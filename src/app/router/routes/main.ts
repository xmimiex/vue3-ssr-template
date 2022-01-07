import { RouteRecordRaw } from 'vue-router'
import { ROUTES } from '../constants'
import category from '@/router/routes/category'
import home from '@/router/routes/home'
import { AppKoaContext } from '@/typings/ssr'

export default (serverContext?: AppKoaContext): RouteRecordRaw => ({
  path: '/:country/:language',
  name: ROUTES.COUNTRY_LANGUAGE,
  component: () => import(/* webpackChunkName: "empty" */ '../../pages/Empty.vue'),
  children: [
    home(serverContext),
    category(serverContext),
  ],
})
