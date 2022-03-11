import { RouteRecordRaw } from 'vue-router'
import { ROUTES } from '@app/contracts/types'

export default (): RouteRecordRaw => ({
  path: 'c/:params*',
  name: ROUTES.CATEGORY,
  component: () => import(/* webpackChunkName: "category" */ './Category.vue'),
})
