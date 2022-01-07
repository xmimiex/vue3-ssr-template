import serve from 'koa-static'
import path from 'path'
import { assetsDir } from '../utils/config'
import { KoaContext } from '../typings/server'
import mount from 'koa-mount'
import { Next } from 'koa'

const MONTHS_6 = 6 * 30 * 24 * 60 * 60

export default async (ctx: KoaContext, next: Next) => {
  return mount(`/${assetsDir}`, serve(path.join(__dirname, '../../app', assetsDir), {
    setHeaders: (res) => res.setHeader('cache-control', `max-age=${MONTHS_6}, s-maxage=${MONTHS_6}, public`),
  }))(ctx, () => {
    return ctx.path.startsWith(`/${assetsDir}`) ? Promise.resolve() : next()
  })
}
