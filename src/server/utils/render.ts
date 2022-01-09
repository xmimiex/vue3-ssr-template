import { Pinia } from 'pinia'
import { ConfigThirdPartyScript } from '../../app/typings/ssr'
import { ParsedUrlQuery } from 'querystring'
import { appConf } from '../utils/config'
import { KoaContext } from '../typings/server'

const renderState = (store: Pinia) => {
  if (!store) return ''
  return `<script>window.__INITIAL_STATE__=${JSON.stringify(store.state.value)}</script>`
}

const renderStyles = (styles: string) =>
  `<style>\
${styles}\
</style>`

const convertScriptConfigToHtml = (scriptConfig: ConfigThirdPartyScript) =>
  `<script \
${scriptConfig.uri ? `src="${scriptConfig.uri}"` : ''} \
${scriptConfig.id ? `id="${scriptConfig.id}"` : ''} \
${scriptConfig.defer ? 'defer' : ''} \
${scriptConfig.async ? 'async' : ''}> \
${scriptConfig.body || ''}\
</script>`

const renderThirdPartyScripts = (query: ParsedUrlQuery, headOrBody : 'head' | 'body') => {
  if (!appConf || !appConf.thirdPartyScripts || ('ignore-third-party' in query)) return ''

  return appConf.thirdPartyScripts
    .filter((entry) => entry.node === headOrBody)
    .map((scriptConfig) => convertScriptConfigToHtml(scriptConfig))
    .join('\n')
}

const renderDevServerScript = () => Boolean(process.env.VITE)
  ? '<script type="module" src="../src/app/entry-client.ts"></script>'
  : ''

export default (ctx: KoaContext,
  templateHtml: string,
  htmlAttrs: string,
  headTags: string,
  bodyAttrs: string,
  styles: string,
  store: Pinia,
  appHtml: string,
) => {
  return templateHtml
    .replace('{{ html_attrs }}', htmlAttrs)
    .replace('{{ head_tags }}', headTags)
    .replace('{{ body_attrs }}', bodyAttrs)
    .replace('{{ state }}', renderState(store))
    .replace('{{ styles }}', renderStyles(styles))
    .replace('{{ third_party_head }}', renderThirdPartyScripts(ctx.request.query, 'head'))
    .replace('{{ third_party_body }}', '')
    .replace('{{ dev_server_script }}', renderDevServerScript())
    .replace('{{ app_html }}', appHtml)
}
