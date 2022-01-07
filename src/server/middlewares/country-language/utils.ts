import { KoaContext } from '../../typings/server'

const requestIp = require('request-ip')
const geoip = require('geoip-country')

export const DEFAULT_COUNTRY = 'FR'
export const DEFAULT_LANGUAGE = 'fr'

interface CountryLanguages {
  [key: string]: string[];
}
const COUNTRY_LANGUAGES_TABLE: CountryLanguages = {
  FR: [ 'fr' ],
  UK: [ 'en' ],
  CH: [ 'fr', 'it', 'en' ],
}

export const isCountrySupported = (country: string) => Boolean(COUNTRY_LANGUAGES_TABLE[country]?.length ?? false)
export const isCountryLanguageSupported = (country: string, language: string) =>
  COUNTRY_LANGUAGES_TABLE[country]?.includes(language) ?? false

const getDefaultCountryLanguage = (country: string) => COUNTRY_LANGUAGES_TABLE[country]?.[0]
export const detectLanguage = (country: string, acceptLanguages: string | undefined) => {
  if (!acceptLanguages) return getDefaultCountryLanguage(country)

  const eligibleLanguages = (COUNTRY_LANGUAGES_TABLE[country] || [])
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
