import { KoaContext } from '../typings/server'
import { Next } from 'koa'
import helmet from 'koa-helmet'

export default async (ctx: KoaContext, next: Next) => {
  return helmet({
    contentSecurityPolicy: false,
  })(ctx, next)
}
