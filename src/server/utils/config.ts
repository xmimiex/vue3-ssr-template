import * as fs from 'fs'
import YAML from 'js-yaml'
import { Config } from '@app/typings/ssr'
import dotenv from 'dotenv'

dotenv.config()

let config: Config
const readConfig = () => {
  if (config) return config

  config = YAML.load(
    fs.readFileSync(process.env.VUE_APP_CONFIG_FILE as string, 'utf8'),
  ) as Config
  return config
}

export const appConf = Object.freeze(readConfig())
