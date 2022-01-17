import createI18n from '.'
import { setActivePinia, createPinia } from 'pinia'
import useContext from '@app/stores/context'

const defaultLanguage = {
  UK: 'en',
  CH: 'it',
  FR: 'fr',
} as any

const expectedValues = {
  FR: {
    date: '01/01/2020',
    number: '100,00 €',
  },
  UK: {
    date: 'January 1, 2020',
    number: '£100.00',
  },
  CH: {
    date: '1/1/2020',
    number: '100,00 CHF',
  },
} as any

describe('i18n', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  describe('should instantiate i18n with correct locale', () => {
    ['fr', 'en', 'it'].forEach(lang => {
      it(`should create i18n for ${lang}`, async () => {
        const context = useContext()
        context.$patch({
          country: 'FR',
          language: lang,
        })
        // Given
        const i18n: any = await createI18n()
        expect(i18n.global.locale.value).toBe(lang)
      })
    })
  })

  describe('should correctly format dates and numbers', () => {

    ['FR', 'CH', 'UK'].forEach(country => {
      it(`should create i18n for ${country}`, async () => {
        const context = useContext()
        context.$patch({
          country,
          language: defaultLanguage[country],
        })
        // Given
        const i18n: any = await createI18n()
        const { n, d } = i18n.global

        expect(n(100, 'currency')).toBe(expectedValues[country].number)
        expect(d(new Date('2020-01-01'), 'short')).toBe(expectedValues[country].date)
      })
    })
  })
})
