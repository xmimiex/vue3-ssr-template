import { createServer } from 'vite'
import * as path from 'path'
import Koa from 'koa'
import Router from 'koa-router'
import c2k from 'koa-connect'
import countryLanguageMiddleware from './middlewares/country-language'
import renderAppDevServerController from './controllers/render-app-dev-server'

(async () => {
  const root = process.cwd()
  const devServer = new Koa()
  const router = new Router()

  const vite = await createServer({
    root,
    logLevel: 'info',
    configFile: path.resolve(root, 'build/vite.dev-server.js'),
    server: {
      middlewareMode: 'ssr',
    },
  })

  // use vite's connect instance as middleware
  devServer.use(c2k(vite.middlewares))
  devServer.use(countryLanguageMiddleware)
  devServer.use(router.middleware())

  router.get('/(.*)', (ctx) => renderAppDevServerController(ctx, vite))

  devServer.listen(3000, () =>
    console.log('You can navigate to http://localhost:3000'))
})()
