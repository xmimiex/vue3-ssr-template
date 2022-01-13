import { ModuleNode, ViteDevServer } from 'vite'
import { KoaContext } from '@server/typings/server'
import { appConf } from '@server/utils/config'
import { renderToString } from '@vue/server-renderer'
import { renderHeadToString } from '@vueuse/head'
import path from 'path'
import fs from 'fs'

export default async (ctx: KoaContext, vite: ViteDevServer)=> {
  try {
    // always read fresh template in dev
    let template = fs.readFileSync(path.resolve(process.cwd(), 'public/index.html'), 'utf-8')
    template = await vite.transformIndexHtml(ctx.path, template)
    const createApp = (await vite.ssrLoadModule('src/app/entry-server.ts')).default
    const render = (await vite.ssrLoadModule('src/server/utils/render.ts')).default

    const styles = new Map()
    const collectCssUrls = (mods: Set<ModuleNode>, styles: Map<string, string>) => {
      for (const mod of mods) {
        if (mod.ssrModule && mod.file && mod.id) {
          if (mod.file.endsWith('.css') || /\?vue&type=style/.test(mod.id)) {
            styles.set(mod.url, mod.ssrModule.default)
          }
        }
        if (mod.importedModules && mod.importedModules.size > 0) {
          collectCssUrls(mod.importedModules, styles)
        }
      }
    }

    const { app, router, store, head } = await createApp(ctx, appConf)

    await router.push(ctx.request.url)
    await router.isReady()

    const html = await renderToString(app)
    const { headTags, htmlAttrs, bodyAttrs } = renderHeadToString(head)

    const mods = vite.moduleGraph.idToModuleMap
    collectCssUrls(new Set([...mods.values()]), styles)
    const devStyles = [...styles.values()].join('\n')

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
  } catch (e: any) {
    vite.ssrFixStacktrace(e)
    console.log(e.stack)
    ctx.status = 200
    ctx.body = e.stack
  }
}
