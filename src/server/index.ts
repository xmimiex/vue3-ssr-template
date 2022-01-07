import Koa from 'koa'
import Router from 'koa-router'
import compress from 'koa-compress'
import renderAppController from './controllers/render-app'
import securityMiddleware from './middlewares/security'
import assetMiddleware from './middlewares/asset'
import robotsMiddleware from './middlewares/robots'
import faviconMiddleware from './middlewares/favicon'
import countryLanguageMiddleware from './middlewares/country-language'

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

server.listen(3000, () =>
  console.log('You can navigate to http://localhost:3000'))
