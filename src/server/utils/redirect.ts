import { KoaContext } from '@server/typings/server'

export const doRedirect301 = (ctx: KoaContext, url: string) => {
  ctx.status = 301
  ctx.redirect(url)
}
