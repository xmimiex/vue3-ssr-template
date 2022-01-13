import serve from 'koa-static'
import path from 'path'
import { appConf } from '@server/utils/config'
import { KoaContext } from '@server/typings/server'
import mount from 'koa-mount'
import { Next } from 'koa'

const cacheDuration = appConf.cacheControl.static.asset || null
const { assetsDir } = appConf

export default async (ctx: KoaContext, next: Next) => {
  return mount(`/${assetsDir}`, serve(path.join(process.cwd(), '/dist/app/client', assetsDir), cacheDuration ? {
    setHeaders: (res) => res.setHeader('cache-control', `max-age=${cacheDuration}, s-maxage=${cacheDuration}, public`),
  } : {}))(ctx, () => {
    return ctx.path.startsWith(`/${assetsDir}`) ? Promise.resolve() : next()
  })
}
