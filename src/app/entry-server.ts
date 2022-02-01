import createApp from './app'
import useContext from '@app/stores/context'
import useConfig from '@app/stores/config'
import { AppKoaContext, Config } from '@app/typings/ssr'

export default async (ctx: AppKoaContext, conf: Config) => {
  const postCreateStore = async () => {

    const context = useContext()
    context.$patch({ country: 'UK', language: 'en' })

    const config = useConfig()
    config.setConfig(conf)
  }

  const { app, router, store, head } = await createApp({
    serverContext: ctx,
    postCreateStore,
  })

  return { app, router, store, head }
}
