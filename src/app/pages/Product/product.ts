import { RouteRecordRaw } from 'vue-router'
import { ROUTES } from '@app/contracts/types'

export default (): RouteRecordRaw => ({
  path: 'p/:productId',
  name: ROUTES.PRODUCT,
  component: () => import(/* webpackChunkName: "product" */ './Product.vue'),
})
