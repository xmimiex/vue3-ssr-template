import { RouteRecordRaw } from 'vue-router'
import { ROUTES } from '../constants'

export default (): RouteRecordRaw => ({
  path: 'c/:params*',
  name: ROUTES.CATEGORY,
  component: () => import(/* webpackChunkName: "notFound" */ '../../pages/NotFound.vue'),
})
