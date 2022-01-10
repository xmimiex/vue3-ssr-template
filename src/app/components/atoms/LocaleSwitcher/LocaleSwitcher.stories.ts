import { Meta, Story } from '@storybook/vue3'
import LocaleSwitcher from './LocaleSwitcher.vue'
import useConfig from '@/stores/config'
import useContext from '@/stores/context'

export default {
  title: 'Atoms/LocaleSwitcher',
} as Meta

const Template: Story = () => ({
  components: { LocaleSwitcher },
  setup() {
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
          UK: [ 'en' ],
          FR: [ 'fr' ],
          CH: [ 'fr', 'it', 'en' ],
        },
      },
    })
  },
  template: `
    <LocaleSwitcher />`,
})

export const Default = Template.bind({})
