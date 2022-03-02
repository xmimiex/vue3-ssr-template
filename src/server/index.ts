import cluster from 'cluster'
import { cpus } from 'os'
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

if (appConf.context.cluster && cluster.isPrimary) {
  console.log(`Primary ${process.pid} is running`)
  const numCPUs = cpus().length

  // Fork workers.
  for (let i = 0; i < numCPUs; i += 1) {
    cluster.fork()
  }

  cluster.on('exit', (deadWorker, code, signal) => {
    console.warn(`worker ${deadWorker.process.pid} died with code: ${code} and signal ${signal}`)

    // Restart the worker
    const worker = cluster.fork()

    console.info(`Starting new worker: ${worker.process.pid}`)
  })
} else {
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
}





