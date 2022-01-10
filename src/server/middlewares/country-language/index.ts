import { KoaContext } from '../../typings/server'
import { Next } from 'koa'
import {
  countryDetection,
  detectLanguage,
  isCountryLanguageSupported,
  isCountrySupported,
} from './utils'
import { appConf } from '../../utils/config'
import { doRedirect301 } from '../../utils/redirect'

const {
  headers: {
    countryLanguage,
  },
  internationalization: {
    defaultCountry,
    defaultLanguage,
  },
} = appConf

const setContext = (ctx: KoaContext, country: string, language: string) => {
  ctx.set(countryLanguage, `${country}-${language}`)
}

const getAcceptLanguage = (ctx: KoaContext) => ctx.headers['accept-language']

const redirectToCountryLanguage = (ctx: KoaContext) => {
  const { detectedCountry, detectedCountrySupported } = countryDetection(ctx)
  const COUNTRY = detectedCountrySupported ? detectedCountry : defaultCountry
  const LANGUAGE = detectedCountrySupported ? detectLanguage(COUNTRY, getAcceptLanguage(ctx)) : defaultLanguage

  doRedirect301(ctx, `/${COUNTRY}/${LANGUAGE}`)
}

export default (ctx: KoaContext, next: Next) => {
  if (ctx.path === '/') {
    return redirectToCountryLanguage(ctx)
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
      const detectedLanguage = detectLanguage(country, getAcceptLanguage(ctx))
      doRedirect301(ctx, `/${country}/${detectedLanguage}`)
    }
  } else {
    if (!language) {
      setContext(ctx, defaultCountry, defaultLanguage)
      return next()
    }

    return redirectToCountryLanguage(ctx)
  }
}
