import { Next } from 'koa'
import path from 'path'
import { KoaContext } from '@server/typings/server'
import { readFileSync } from 'fs'
import { appConf } from '@server/utils/config'

const robots = readFileSync(path.join(process.cwd(), '/dist/app', 'robots.txt')).toString()

const cacheDuration = appConf.cacheControl.static.robots || null

export default async (ctx: KoaContext, next: Next) => {
  if ('/robots.txt' !== ctx.path) return next()

  if ('GET' !== ctx.method && 'HEAD' !== ctx.method) {
    ctx.status = 'OPTIONS' == ctx.method ? 200 : 405
    ctx.set('Allow', 'GET, HEAD, OPTIONS')
    return
  }

  if (cacheDuration) {
    ctx.set('Cache-Control', `max-age=${cacheDuration}, s-maxage=${cacheDuration}, public`)
  }
  ctx.type = 'text/plain'
  ctx.body = robots
}
