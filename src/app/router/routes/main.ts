import { RouteRecordRaw } from 'vue-router'
import { ROUTES } from '../constants'
import category from '@/router/routes/category'
import home from '@/router/routes/home'

export default (): RouteRecordRaw => ({
  path: '/:country/:language',
  name: ROUTES.COUNTRY_LANGUAGE,
  component: () => import(/* webpackChunkName: "empty" */ '../../pages/Empty.vue'),
  children: [
    home(),
    category(),
  ],
})
