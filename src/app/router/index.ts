import { createMemoryHistory, createRouter, createWebHistory } from 'vue-router'
import isServerSide from '@app/utils/context'
import { ROUTES } from './constants'

export default () => {
  const router = createRouter({
    history: isServerSide() ? createMemoryHistory() : createWebHistory(),
    routes: [
      {
        path: '/',
        name: ROUTES.HOME,
        component: () => import(/* webpackChunkName: "home" */ '../pages/Home.vue'),
      },
    ],
  })
  return router
}
