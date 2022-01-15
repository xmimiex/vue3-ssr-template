import LocaleSwitcher from '.'
import { mount } from '@vue/test-utils'
import useConfig from '@/stores/config'
import useContext from '@/stores/context'
import { createTestingPinia } from '@pinia/testing'
import createI18n from '@/i18n'

describe('LocaleSwitcher', () => {

  it('should render component correctly', async () => {
    const pinia = createTestingPinia()

    const context = useContext()
    context.$patch({
      country: 'FR',
      language: 'fr',
    })

    const config = useConfig()
    config.$patch({
      internationalization: {
        defaultCountry: 'FR',
        defaultLanguage: 'fr',
        languagesForCountry: {
          UK: ['en'],
          FR: ['fr'],
          CH: ['fr', 'it', 'en'],
        },
      },
    })
    const i18n = await createI18n()

    const wrapper = mount(LocaleSwitcher, {
      global: {
        plugins: [pinia, i18n],
      },
    })
    expect(wrapper.element).toMatchSnapshot()
  })
})
