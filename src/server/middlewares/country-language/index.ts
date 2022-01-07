import { KoaContext } from '../../typings/server'
import { Next } from 'koa'
import {
  DEFAULT_COUNTRY,
  DEFAULT_LANGUAGE,
  countryDetection,
  detectLanguage,
  isCountryLanguageSupported,
  isCountrySupported,
} from './utils'
import { doRedirect301 } from '../../utils/redirect'

const setContext = (ctx: KoaContext, country: string, language: string) => {
  ctx.set('x-country-language', `${country}-${language}`)
}

export default (ctx: KoaContext, next: Next) => {
  if (ctx.path === '/') {
    const { detectedCountry, detectedCountrySupported } = countryDetection(ctx)
    if (detectedCountrySupported) {
      const detectedLanguage = detectLanguage(detectedCountry, ctx.headers['accept-language'])
      doRedirect301(ctx, `/${detectedCountry}/${detectedLanguage}`)
    } else {
      doRedirect301(ctx, `/${DEFAULT_COUNTRY}/${DEFAULT_LANGUAGE}`)
    }
    return
  }

  const pathSplit = ctx.path.split('/').splice(1)
  const country = pathSplit?.[0] ?? ''
  const language = pathSplit?.[1] ?? ''
  const countrySupported = isCountrySupported(country)
  const countryLanguageSupported = isCountryLanguageSupported(country, language)

  if (countrySupported) {
    if (countryLanguageSupported) {
      setContext(ctx, country, language)
      return next()
    } else {
      const detectedLanguage = detectLanguage(country, ctx.headers['accept-language'])
      doRedirect301(ctx, `/${country}/${detectedLanguage}`)
    }
  } else {
    if (!language) {
      setContext(ctx, DEFAULT_COUNTRY, DEFAULT_LANGUAGE)
      return next()
    }

    const { detectedCountry, detectedCountrySupported } = countryDetection(ctx)
    if (detectedCountrySupported) {
      const detectedLanguage = detectLanguage(detectedCountry, ctx.headers['accept-language'])
      doRedirect301(ctx, `/${detectedCountry}/${detectedLanguage}`)
    } else {
      doRedirect301(ctx, `/${DEFAULT_COUNTRY}/${DEFAULT_LANGUAGE}`)
    }
  }
}
