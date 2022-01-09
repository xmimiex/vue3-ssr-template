import { RouteRecordRaw } from 'vue-router'
import { ROUTES } from '../constants'

export default (): RouteRecordRaw => ({
  path: '',
  name: ROUTES.HOME,
  component: () => import(/* webpackChunkName: "home" */ '../../pages/Home.vue'),
})
