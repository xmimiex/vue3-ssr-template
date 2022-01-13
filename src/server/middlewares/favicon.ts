import { Next } from 'koa'
import path from 'path'
import { KoaContext } from '../typings/server'
import { readFileSync } from 'fs'
import { appConf } from '../utils/config'

const favicon = readFileSync(path.join(process.cwd(), '/dist/app', 'favicon.ico')).toString()

const cacheDuration = appConf.cacheControl.static.favicon || null

export default async (ctx: KoaContext, next: Next) => {
  if ('/favicon.ico' !== ctx.path) return next()

  if ('GET' !== ctx.method && 'HEAD' !== ctx.method) {
    ctx.status = 'OPTIONS' == ctx.method ? 200 : 405
    ctx.set('Allow', 'GET, HEAD, OPTIONS')
    return
  }

  if (cacheDuration) {
    ctx.set('Cache-Control', `max-age=${cacheDuration}, s-maxage=${cacheDuration}, public`)
  }
  ctx.type = 'image/x-icon'
  ctx.body = favicon
}
