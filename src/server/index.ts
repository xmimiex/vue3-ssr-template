import Koa from 'koa'
import Router from 'koa-router'
import compress from 'koa-compress'
import renderAppController from '@server/controllers/render-app'
import securityMiddleware from '@server/middlewares/security'
import assetMiddleware from '@server/middlewares/asset'
import robotsMiddleware from '@server/middlewares/robots'
import faviconMiddleware from '@server/middlewares/favicon'
import countryLanguageMiddleware from '@server/middlewares/country-language'
import { appConf } from '@server/utils/config'

const server = new Koa()
const router = new Router()

server.use(compress())
server.use(securityMiddleware)
server.use(assetMiddleware)
server.use(robotsMiddleware)
server.use(faviconMiddleware)
server.use(countryLanguageMiddleware)
server.use(router.middleware())

router.get('/(.*)', renderAppController)

server.listen(appConf.context.port, () =>
  console.log(`You can navigate to http://localhost:${appConf.context.port}`))
