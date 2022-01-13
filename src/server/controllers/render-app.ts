import fs from 'fs'
import { KoaContext } from '@server/typings/server'
import { renderToString } from '@vue/server-renderer'
import { renderHeadToString } from '@vueuse/head'
import { appConf } from '@server/utils/config'
import render from '@server/utils/render'
import resolve from '../utils/resolve'

const templateIndexHtml = fs.readFileSync(resolve('dist/app/client/index.html'), 'utf-8')
const manifest = require(resolve('dist/app/client/ssr-manifest.json'))
const createApp = require(resolve('dist/app/server/entry-server')).default

export default async (ctx: KoaContext) => {
  try {
    const { app, router, store, head } = await createApp(ctx, appConf)

    await router.push(ctx.request.url)
    await router.isReady()

    const renderContext: any = {}
    const html = await renderToString(app, renderContext)
    const { headTags, htmlAttrs, bodyAttrs } = renderHeadToString(head)

    const bodyHtml = render({
      ctx,
      templateHtml: templateIndexHtml,
      htmlAttrs,
      headTags,
      bodyAttrs,
      modules: renderContext.modules,
      manifest,
      store,
      appHtml: html,
    })

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
