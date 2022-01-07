import { createMemoryHistory, createRouter, createWebHistory } from 'vue-router'
import getRoutes from './routes'
import isServerSide from '../utils/context'
import { KoaContext } from '../../server/typings/server'

export default (serverContext?: KoaContext) => {
  return createRouter({
    history: isServerSide() ? createMemoryHistory() : createWebHistory(),
    routes: getRoutes(serverContext),
  })
}
