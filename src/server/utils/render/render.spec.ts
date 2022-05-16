import {
  renderStyles,
  renderState,
  renderThirdPartyScripts,
  convertScriptConfigToHtml,
} from '.'

describe('render', () => {

  describe('renderStyles', () => {

    it('should render inline styles', () => {
      // Given
      const styles = `
        body {
          color: red;
        }
      `
      // When
      const result = renderStyles(styles)
      // Then
      expect(result).toBe(`<style>${styles}</style>`)
    })

    it('should not render emprty style tag', () => {
      // Given
      const styles = ''
      // When
      const result = renderStyles(styles)
      // Then
      expect(result).toBeFalsy()
    })
  })

  describe('renderState', () => {

    it('should render state correctrly', () => {
      // Given
      const store: any = {
        state: { value: { module: { features: ['hello', 'world'] } } },
      }
      // When
      const result = renderState(store)
      // Then
      expect(result).toBe(`<script>window.__INITIAL_STATE__=${JSON.stringify(store.state.value)}</script>`)
    })

    it('should not return script if store is null', () => {
      // Given
      const store: any = null
      // When
      const result = renderState(store)
      // Then
      expect(result).toBeFalsy()
    })
  })
  describe('renderThirdPartyScripts', () => {

    it('should render script loaded from config file', () => {
      // When
      const result = renderThirdPartyScripts({}, 'head')

      // Then
      expect(result).toMatchSnapshot()
    })

    it('should not render script if param is passed', () => {
      // Given
      const query: any = {
        'ignore-third-party': true,
      }
      // When
      const result = renderThirdPartyScripts(query, 'head')

      // Then
      expect(result).toBeFalsy()
    })
  })

  describe('convertScriptConfigToHtml', () => {

    it('should return inline script with body', () => {
      // Given
      const scriptConfig: any = {
        id: 'body-script',
        body: 'console.log("hello")',
      }
      // When
      const result = convertScriptConfigToHtml(scriptConfig)
      // Then
      expect(result).toMatchSnapshot()
    })

    it('should return inline script with body', () => {
      // Given
      const scriptConfig: any = {
        id: 'with-url',
        uri: 'https://third-party-fake-domain/third-party-fake-path.js',
      }
      // When
      const result = convertScriptConfigToHtml(scriptConfig)
      // Then
      // eslint-disable-next-line max-len
      expect(result).toMatchSnapshot()
    })
  })
})
