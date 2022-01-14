import { createI18n } from 'vue-i18n'
import useContext from '@app/stores/context'

export default async () => {
  const context = useContext()
  const countryToUpperCase = context.country.toUpperCase()
  const languageToLowerCase = context.language.toLowerCase()

  const countryFormats = await import(
    /* webpackChunkName: "[request]" */ `./formats/formats-${countryToUpperCase}.ts`)
  const languageMessages = await import(
    /* webpackChunkName: "[request]" */ `./messages/messages-${languageToLowerCase}.json`)

  return createI18n({
    legacy: false,
    globalInjection: true,
    locale: languageToLowerCase,
    messages: {
      [languageToLowerCase]: languageMessages,
    },
    numberFormats: {
      [languageToLowerCase]: countryFormats.default.numberFormats,
    },
    datetimeFormats: {
      [languageToLowerCase]: countryFormats.default.datetimeFormats,
    },
  })
}
