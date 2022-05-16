import { ViteDevServer } from 'vite'
import { KoaContext } from '@server/typings/server'
import { appConf } from '@server/utils/config'
import { renderToString } from '@vue/server-renderer'
import { renderHeadToString } from '@vueuse/head'
import { collectCss } from '@server/utils/collectDevStyles'
import path from 'path'
import fs from 'fs'

export default async (ctx: KoaContext, vite: ViteDevServer) => {
  try {
    // always read fresh template in dev
    let template = fs.readFileSync(path.resolve(process.cwd(), 'public/index.html'), 'utf-8')
    template = await vite.transformIndexHtml(ctx.path, template)
    const createApp = (await vite.ssrLoadModule('src/app/entry-server.ts')).default
    const render = (await vite.ssrLoadModule('src/server/utils/render/index.ts')).default

    const { app, router, store, head } = await createApp(ctx, appConf)

    await router.push(ctx.request.url)
    await router.isReady()

    const html = await renderToString(app)
    const { headTags, htmlAttrs, bodyAttrs } = renderHeadToString(head)

    const modsList = vite.moduleGraph.idToModuleMap
    const devStyles = collectCss(new Set([...modsList.values()]))


    const bodyHtml = render(ctx,
      template,
      htmlAttrs,
      headTags,
      bodyAttrs,
      devStyles,
      store,
      html,
    )

    ctx.status = 200
    ctx.body = bodyHtml
  } catch (e: unknown) {
    if (e instanceof Error) {
      vite.ssrFixStacktrace(e)
      console.log(e.stack)
      ctx.status = 500
      ctx.body = e.stack
    }
  }
}
