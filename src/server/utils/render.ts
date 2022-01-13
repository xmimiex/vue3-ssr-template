import { Pinia } from 'pinia'
import { ConfigThirdPartyScript, RenderArgs } from '@app/typings/ssr'
import { ParsedUrlQuery } from 'querystring'
import { appConf } from '@server/utils/config'

const renderState = (store: Pinia) => {
  if (!store) return ''
  return `<script>window.__INITIAL_STATE__=${JSON.stringify(store.state.value)}</script>`
}

const renderStyles = (styles = '') => styles ?
  `<style>\
${styles}\
</style>` : ''

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

const renderPreloadLinks = (modules: string[] = [], manifest: Record<string, any> = {}) => {
  let links = ''
  const seen = new Set()
  modules?.forEach((id: string) => {
    const files = manifest[id]
    if (files) {
      files.forEach((file: string) => {
        if (!seen.has(file)) {
          seen.add(file)
          links += renderPreloadLink(file)
        }
      })
    }
  })
  return links
}

const renderPreloadLink = (file: string) =>{
  if (file.endsWith('.js')) {
    return `<link rel="modulepreload" crossorigin href="${file}">`
  } else if (file.endsWith('.css')) {
    return `<link rel="stylesheet" href="${file}">`
  } else if (file.endsWith('.woff')) {
    return ` <link rel="preload" href="${file}" as="font" type="font/woff" crossorigin>`
  } else if (file.endsWith('.woff2')) {
    return ` <link rel="preload" href="${file}" as="font" type="font/woff2" crossorigin>`
  } else if (file.endsWith('.gif')) {
    return ` <link rel="preload" href="${file}" as="image" type="image/gif">`
  } else if (file.endsWith('.jpg') || file.endsWith('.jpeg')) {
    return ` <link rel="preload" href="${file}" as="image" type="image/jpeg">`
  } else if (file.endsWith('.png')) {
    return ` <link rel="preload" href="${file}" as="image" type="image/png">`
  } else {
    return ''
  }
}

export default (renderArgs: RenderArgs) => {
  return renderArgs.templateHtml
    .replace('{{ html_attrs }}', renderArgs.htmlAttrs)
    .replace('{{ head_tags }}', renderArgs.headTags)
    .replace('{{ body_attrs }}', renderArgs.bodyAttrs)
    .replace('{{ state }}', renderState(renderArgs.store))
    .replace('{{ styles }}', renderStyles(renderArgs.styles))
    .replace('{{ preload_links }}', renderPreloadLinks(renderArgs.modules, renderArgs.manifest))
    .replace('{{ third_party_head }}', renderThirdPartyScripts(renderArgs.ctx.request.query, 'head'))
    .replace('{{ third_party_body }}', '')
    .replace('{{ app_html }}', renderArgs.appHtml)
}
