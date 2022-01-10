import { defineStore } from 'pinia'
import { Config } from '@/typings/ssr'

export type ConfigState = Config;

export default defineStore('config', {
  state: () => ({
    context: {
      environment: '',
      port: 0,
    },
    headers: {},
    internationalization: {
      defaultLanguage: '',
      defaultCountry: '',
      languagesForCountry: {},
    },
    thirdPartyScripts: [],
  } as ConfigState),
})
