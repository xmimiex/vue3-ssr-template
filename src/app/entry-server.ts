import createApp from './app'
import useContext from '@/stores/context'
import useConfig from '@/stores/config'
import { AppKoaContext, Config } from '@/typings/ssr'

export default async (ctx: AppKoaContext, conf: Config) => {
  const postCreateStore = async () => {

    const [ country, language ] = ctx.response.get(conf.headers.countryLanguage)?.split('-')
    const context = useContext()
    context.$patch({ country, language })

    const config = useConfig()
    config.$patch({ ...conf })
  }

  const { app, router, store, head } = await createApp({
    serverContext: ctx,
    postCreateStore,
  })

  return { app, router, store, head }
}
