import { Next } from 'koa'
import path from 'path'
import { KoaContext } from '../typings/server'
import { readFileSync } from 'fs'

const MONTHS_6 = 6 * 30 * 24 * 60 * 60

const favicon = readFileSync(path.join(__dirname, '../../app', 'favicon.ico')).toString()

export default async (ctx: KoaContext, next: Next) => {
  if ('/favicon.ico' !== ctx.path) return next()

  if ('GET' !== ctx.method && 'HEAD' !== ctx.method) {
    ctx.status = 'OPTIONS' == ctx.method ? 200 : 405
    ctx.set('Allow', 'GET, HEAD, OPTIONS')
    return
  }

  ctx.set('Cache-Control', `max-age=${MONTHS_6}, s-maxage=${MONTHS_6}, public`)
  ctx.type = 'image/x-icon'
  ctx.body = favicon
}
