import serve from 'koa-static'
import path from 'path'
import { assetsDir } from '../utils/config'
import { KoaContext } from '../typings/server'
import mount from 'koa-mount'
import { Next } from 'koa'
import { appConf } from '../utils/config'

const cacheDuration = appConf.cacheControl?.static.asset ?? null

export default async (ctx: KoaContext, next: Next) => {
  return mount(`/${assetsDir}`, serve(path.join(__dirname, '../../app', assetsDir), cacheDuration ? {
    setHeaders: (res) => res.setHeader('cache-control', `max-age=${cacheDuration}, s-maxage=${cacheDuration}, public`),
  } : {}))(ctx, () => {
    return ctx.path.startsWith(`/${assetsDir}`) ? Promise.resolve() : next()
  })
}
