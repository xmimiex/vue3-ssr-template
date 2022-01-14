import { RouteRecordRaw } from 'vue-router'
import { ROUTES } from '@app/router/constants'
import category from '@app/router/routes/category'
import home from '@app/router/routes/home'

export default (): RouteRecordRaw => ({
  path: '/:country/:language',
  name: ROUTES.COUNTRY_LANGUAGE,
  component: () => import(/* webpackChunkName: "empty" */ '../../pages/Empty.vue'),
  children: [
    home(),
    category(),
  ],
})
