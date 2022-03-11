import { RouteRecordRaw } from 'vue-router'
import { ROUTES } from '@app/contracts/types'
import home from '@app/pages/Home'
import product from '@app/pages/Product'
import category from '@app/pages/Category'

export default (): RouteRecordRaw => ({
  path: '/:country/:language',
  name: ROUTES.COUNTRY_LANGUAGE,
  component: () => import(/* webpackChunkName: "main" */ './Main.vue'),
  children: [
    home(),
    product(),
    category(),
  ],
})
