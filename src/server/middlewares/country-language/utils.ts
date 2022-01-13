import { KoaContext } from '@server/typings/server'
import { appConf } from '@server/utils/config'

const requestIp = require('request-ip')
const geoip = require('geoip-country')

const {
  internationalization: {
    languagesForCountry,
  },
} = appConf

export const isCountrySupported = (country: string) => Boolean(languagesForCountry[country]?.length ?? false)
export const isCountryLanguageSupported = (country: string, language: string) => languagesForCountry[country]
  ?.includes(language) ?? false

const getDefaultCountryLanguage = (country: string) => languagesForCountry[country]?.[0]
export const detectLanguage = (country: string, acceptLanguages: string | undefined) => {
  if (!acceptLanguages) return getDefaultCountryLanguage(country)

  const eligibleLanguages = (languagesForCountry[country] || [])
    .filter(language => acceptLanguages.includes(language))

  return eligibleLanguages ? eligibleLanguages[0] : getDefaultCountryLanguage(country)
}

export const countryDetection = (ctx: KoaContext) => {
  const clientIp = requestIp.getClientIp(ctx.req)
  const lookup = geoip.lookup(clientIp)
  const detectedCountry = (lookup?.country ?? '') as string
  const detectedCountrySupported = isCountrySupported(detectedCountry)

  return { detectedCountry, detectedCountrySupported }
}
