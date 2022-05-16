import { ViteDevServer, ModuleNode } from 'vite'


export const componentsModules = (components: string[], vite: ViteDevServer) => {
  const matchedModules = new Set<ModuleNode>()
  components.forEach((component) => {
    const modules = vite.moduleGraph.getModulesByFile(component)
    modules?.forEach((mod) => matchedModules.add(mod))
  })
  return matchedModules
}

export const collectCss = (
  mods: Set<ModuleNode>,
  styles = new Map<string, string>(),
  checkedComponents = new Set(),
) => {
  for (const mod of mods) {
    if (
      (
        mod.file?.endsWith('.scss')
        || mod.file?.endsWith('.css')
        || mod.id?.includes('vue&type=style'))
      && mod.ssrModule
    ) {
      styles.set(mod.url, mod.ssrModule.default)
    }
    if (mod.importedModules.size > 0 && !checkedComponents.has(mod.id)) {
      checkedComponents.add(mod.id)
      collectCss(mod.importedModules, styles, checkedComponents)
    }
  }
  let result = ''
  styles.forEach((content, id) => {
    result += `<style type="text/css" vite-module-id="${hashCode(process.cwd() + id)}">${content}</style>`
  })
  return result
}


export const hashCode = (moduleId: string) => {
  let hash = 0,
    i,
    chr
  if (moduleId.length === 0) return hash
  for (i = 0; i < moduleId.length; i++) {
    chr = moduleId.charCodeAt(i)
    hash = (hash << 5) - hash + chr
    hash |= 0
  }
  return hash
}
