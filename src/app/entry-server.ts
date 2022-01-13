import createApp from './app'
import useContext from '@app/stores/context'
import useConfig from '@app/stores/config'
import { AppKoaContext, Config } from '@app/typings/ssr'

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
