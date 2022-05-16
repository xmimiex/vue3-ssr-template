import { createServer } from 'vite'
import * as path from 'path'
import Koa from 'koa'
import Router from 'koa-router'
import c2k from 'koa-connect'
import countryLanguageMiddleware from '@server/middlewares/country-language'
import renderAppDevServerController from '@server/controllers/render-app-dev-server'

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
      watch: {
        // During tests we edit the files too fast and sometimes chokidar
        // misses change events, so enforce polling for consistency
        usePolling: true,
        interval: 100,
      },
    },
  })

  // use vite's connect instance as middleware
  devServer.use(c2k(vite.middlewares))
  devServer.use(countryLanguageMiddleware)
  devServer.use(router.middleware())

  router.get('/(.*)', (ctx) => renderAppDevServerController(ctx, vite))

  devServer.listen(3000, () =>
    console.log(
      '\x1b[32m\x1b[1m\n\n',
      '-------------------------------------------------------\n\n',
      '  You can navigate to :\n\n',
      '\x1b[37m\n',
      `  🔥  Local           : http://localhost:${process.env.PORT || 3000}\n\n`,
      '\x1b[32m\x1b[1m\n\n',
      '-------------------------------------------------------\n\n',
      '\x1b[0m',
    ))
})()
