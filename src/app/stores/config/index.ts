import { defineStore } from 'pinia'
import { Config } from '@app/typings/ssr'

export type ConfigState = Config;

export default defineStore('config', {
  state: () => ({
    context: {
      environment: '',
      port: 0,
    },
    assetsDir: '',
    headers: {},
    cacheControl: {
      pages: {},
      static: {},
    },
    internationalization: {
      defaultLanguage: '',
      defaultCountry: '',
      languagesForCountry: {},
    },
    thirdPartyScripts: [],
  } as ConfigState),
})
