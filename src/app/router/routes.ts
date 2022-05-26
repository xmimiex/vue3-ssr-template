import { RouteRecordRaw } from 'vue-router'
import { AppKoaContext } from '@app/typings/ssr'
import main from '@app/pages/Main'
import notFound from '@app/pages/NotFound'

export default (serverContext?: AppKoaContext): RouteRecordRaw[] => [
  main(),
  notFound(serverContext),
]
