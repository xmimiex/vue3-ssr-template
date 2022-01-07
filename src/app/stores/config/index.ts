import { defineStore } from 'pinia'
import { Config } from '@/typings/ssr'

export type ConfigState = Config;

export default defineStore('config', {
  state: () => ({
    context: {
      environment: '',
    },
    thirdPartyScripts: [],
  } as ConfigState),
})
