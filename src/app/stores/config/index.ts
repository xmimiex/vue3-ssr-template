import { defineStore } from 'pinia'
import { Config } from '@app/typings/ssr'

interface Context {
  environment: string
}
interface CacheControl {
  pages: Record<string, number>
}

export interface ConfigState extends Omit<Config, 'context' | 'assetsDir' | 'unleash' | 'cacheControl'> {
  context: Context
  cacheControl: CacheControl
}

export default defineStore('config', {
  state: () => ({
    context: {
      environment: '',
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
  actions: {
    setConfig(config: Config) {
      const { context, headers, cacheControl, internationalization, thirdPartyScripts } = config

      this.context = context
      this.headers = headers
      this.cacheControl = { pages: cacheControl.pages }
      this.internationalization = internationalization
      this.thirdPartyScripts = thirdPartyScripts
    },
  },
})
