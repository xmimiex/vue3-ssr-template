import { RouteRecordRaw } from 'vue-router'
import { ROUTES } from '@app/contracts/types'

export default (): RouteRecordRaw => ({
  path: '',
  name: ROUTES.HOME,
  component: () => import(/* webpackChunkName: "home" */ './Home.vue'),
})
