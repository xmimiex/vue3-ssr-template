import useConfig from '.'
import { setActivePinia, createPinia } from 'pinia'
describe('config store', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('should populate store with accepted keys', () => {
    // Given
    const config: any = useConfig()
    // When
    config.setConfig({
      toto: 'hello',
      context: {
        environment: 'test',
      },
      cacheControl: {
        pages: {
          home: 4000,
        },
        assets: {
          robot: 4000,
        },
      },
    })
    // Then
    expect(config.toto).not.toBeDefined()

    expect(config.context.environment).toBeDefined()

    expect(config.cacheControl.assets).not.toBeDefined()
    expect(config.cacheControl.pages.home).toBeDefined()
  })
})
