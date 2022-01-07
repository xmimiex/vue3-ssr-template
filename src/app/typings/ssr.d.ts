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
}

export interface ConfigThirdPartyScript {
  id?: string
  uri?: string
  body?: string
  node: 'head' | 'body'
  defer?: boolean
  async?: boolean
}

export interface Config {
  context: ConfigContext
  thirdPartyScripts?: ConfigThirdPartyScript[]
}
