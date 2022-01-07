import * as fs from 'fs'
import YAML from 'js-yaml'
import { Config } from '../../app/typings/ssr'
import dotenv from 'dotenv'

declare let process : {
  env: {
    VUE_APP_CONFIG_FILE: string
    NODE_ENV: string
  }
}

dotenv.config({
  path: process.env.NODE_ENV !== 'production' ? '.env' : '.env.production',
})

let config: Config
const readConfig = () => {
  if (config) return config

  config = YAML.load(
    fs.readFileSync(process.env.VUE_APP_CONFIG_FILE, 'utf8'),
  ) as Config
  return config
}

export const appConf = Object.freeze(readConfig())
export const assetsDir = 'assets'
