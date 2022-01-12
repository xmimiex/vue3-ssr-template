// shared types between app and server
import { KoaContext } from '../../server/typings/server'
import { App } from 'vue'
import { Router } from 'vue-router'
import { Pinia } from 'pinia'
import { HeadClient } from '@vueuse/head'

export type AppKoaContext = KoaContext;

export interface CreateApp {
  app: App
  router: Router
  store: Pinia
  head: HeadClient
}
export type CreateAppFunction = (ctx: AppKoaContext, conf: Config) => Promise<CreateApp>;

export interface ConfigContext {
  environment: string
  port: number
}

export interface ConfigThirdPartyScript {
  id?: string
  uri?: string
  body?: string
  node: 'head' | 'body'
  defer?: boolean
  async?: boolean
}

interface LanguagesForCountry {
  [key: string]: string[];
}
export interface Internationalization {
  defaultCountry: string
  defaultLanguage: string
  languagesForCountry: LanguagesForCountry
}

export interface CacheControl {
  pages: Record<string, number>
  static: Record<string, number>
}

export interface Config {
  context: ConfigContext
  assetsDir: string
  headers: Record<string, string>
  internationalization: Internationalization
  cacheControl: CacheControl
  thirdPartyScripts?: ConfigThirdPartyScript[]
}
