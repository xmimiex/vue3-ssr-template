import { collectCss, hashCode, componentsModules } from '.'


describe('hashCode', () => {

  it('should generate content based hash', () => {
    const content = 'content'
    const contentb = 'contentb'

    expect(hashCode(content)).not.toBe(hashCode(contentb))
  })
})


describe('collectCss', () => {

  it('should collect css', () => {
    const mods = new Set([{
      id: 'mod1.scss',
      ssrModule: {
        default: 'content1',
      },
      importedModules: new Set(),
    },
    {
      id: 'mod2.scss',
      ssrModule: {
        default: 'content2',
      },
      importedModules: new Set([{
        id: 'mod3.scss',
        ssrModule: {
          default: 'content3',
        },
        importedModules: new Set(),
      }]),
    },
    {
      id: 'mod4.js',
      ssrModule: {
        default: 'content4',
      },
      importedModules: new Set(),
    }]) as any

    expect(collectCss(mods)).toMatchSnapshot()
  })
})

describe('componentsModules', () => {

  it('should collect componentsModules', () => {
    const getModulesByFileMock = jest.fn(() => new Set(['mod4.scss', 'mod5.scss', 'mod6.scss']))
    const ViteDevServer = {
      moduleGraph: {
        getModulesByFile: getModulesByFileMock,
      },
    } as any
    const components = ['mod1.scss', 'mod2.scss', 'mod3.scss']
    const mods = componentsModules(components, ViteDevServer)
    expect(getModulesByFileMock).toHaveBeenCalled()
    expect(mods).toEqual(new Set(['mod4.scss', 'mod5.scss', 'mod6.scss']))
  })
})
