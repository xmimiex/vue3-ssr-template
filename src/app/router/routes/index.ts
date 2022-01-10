import { RouteRecordRaw } from 'vue-router'
import notFound from './not-found'
import main from './main'
import { AppKoaContext } from '@/typings/ssr'

export default (serverContext?: AppKoaContext): RouteRecordRaw[] => [
  main(),
  notFound(serverContext),
]
