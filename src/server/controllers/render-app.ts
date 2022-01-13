import path from 'path'
import fs from 'fs'
import { CreateAppFunction } from '@app/typings/ssr'
import { KoaContext } from '@server/typings/server'
import { renderToString } from '@vue/server-renderer'
import { renderHeadToString } from '@vueuse/head'
import { appConf } from '@server/utils/config'
import render from '@server/utils/render'

const manifest = __non_webpack_require__('../app/ssr-manifest.json')

const templateIndexHtml = fs.readFileSync(path.join(process.cwd(), '/dist/app', 'index.html')).toString()
const externalStyles = fs.readFileSync(path.join(process.cwd(), '/dist/app', manifest['app.css'])).toString()

const appPath = path.join(process.cwd(), '/dist/app', manifest['app.js'])
const createApp: CreateAppFunction = __non_webpack_require__(appPath).default

export default async (ctx: KoaContext) => {
  try {
    const { app, router, store, head } = await createApp(ctx, appConf)

    await router.push(ctx.request.url)
    await router.isReady()

    const html = await renderToString(app)
    const { headTags, htmlAttrs, bodyAttrs } = renderHeadToString(head)

    const bodyHtml = render(ctx,
      templateIndexHtml,
      htmlAttrs,
      headTags,
      bodyAttrs,
      externalStyles,
      store,
      html,
    )

    ctx.body = bodyHtml
    ctx.status = ctx.status || 200
    ctx.set('Content-Type', 'text/html')
  } catch (error) {
    console.error('**** SERVER ERROR ****', error)
    const bodyHtml = 'Server Error'

    ctx.body = bodyHtml
    ctx.status = 500
    ctx.set('Content-Type', 'text/html')
  }
}
