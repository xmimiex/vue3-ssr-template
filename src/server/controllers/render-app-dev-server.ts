import { ModuleNode, ViteDevServer } from 'vite'
import { KoaContext } from '@server/typings/server'
import { appConf } from '@server/utils/config'
import { renderToString } from '@vue/server-renderer'
import { renderHeadToString } from '@vueuse/head'
import resolve from '../utils/resolve'

import fs from 'fs'

export default async (ctx: KoaContext, vite: ViteDevServer)=> {
  try {
    // always read fresh template in dev with absolute path
    const entryClient = './src/app/entry-client.ts'
    let templateHtml = fs.readFileSync(resolve('index.html'), 'utf-8')
      .replace(entryClient, resolve(entryClient))
    templateHtml = await vite.transformIndexHtml(ctx.path, templateHtml)
    const createApp = (await vite.ssrLoadModule('src/app/entry-server.ts')).default
    const render = (await vite.ssrLoadModule('src/server/utils/render.ts')).default

    const collectCssUrls = (mods: Set<ModuleNode>, styles: Map<string, string>) => {
      const isCss = (mod: ModuleNode) => mod.file?.endsWith('.css') || /\?vue&type=style/.test(mod.id || '')

      for (const mod of mods) {
        if (
          mod.ssrModule
          && mod.file
          && mod.id
          && isCss(mod)
        ) {
          styles.set(mod.url, mod.ssrModule.default)
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

    const modsList = vite.moduleGraph.idToModuleMap
    const stylesList = new Map()
    collectCssUrls(new Set([...modsList.values()]), stylesList)
    const devStyles = [...stylesList.values()].join('\n')

    const bodyHtml = render({
      ctx,
      templateHtml,
      htmlAttrs,
      headTags,
      bodyAttrs,
      styles: devStyles,
      store,
      appHtml: html,
    })

    ctx.status = 200
    ctx.body = bodyHtml
  } catch (e: any) {
    vite.ssrFixStacktrace(e)
    console.log(e.stack)
    ctx.status = 200
    ctx.body = e.stack
  }
}
