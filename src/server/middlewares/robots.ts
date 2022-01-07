import { Next } from 'koa'
import path from 'path'
import { KoaContext } from '../typings/server'
import { readFileSync } from 'fs'

const HOURS_24 = 24 * 60 * 60

const robots = readFileSync(path.join(__dirname, '../../app', 'robots.txt')).toString()

export default async (ctx: KoaContext, next: Next) => {
  if ('/robots.txt' !== ctx.path) return next()

  if ('GET' !== ctx.method && 'HEAD' !== ctx.method) {
    ctx.status = 'OPTIONS' == ctx.method ? 200 : 405
    ctx.set('Allow', 'GET, HEAD, OPTIONS')
    return
  }

  ctx.set('Cache-Control', `max-age=${HOURS_24}, s-maxage=${HOURS_24}, public`)
  ctx.type = 'text/plain'
  ctx.body = robots
}
