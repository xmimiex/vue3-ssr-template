import { isCountrySupported } from './utils'

describe('i18n utils', () => {
  describe('isCountrySupported', () => {
    it('should return country not supported', () => {
      // GIVEN
      const country = 'ES'
      // WHEN
      const isSupported = isCountrySupported(country)
      // THEN
      expect(isSupported).toBeFalsy()
    })
  })
})
