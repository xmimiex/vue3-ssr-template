import { Meta, Story } from '@storybook/vue3'
import HelloWorld from './HelloWorld.vue'

export default {
  title: 'Atoms/HelloWorld',
  argTypes: {
    msg: {
      control: { type: 'text', defaultValue: 'Hello World' },
    },
  },
} as Meta

const Template: Story = (args: any) => ({
  components: { HelloWorld },
  setup() {
    return { args }
  },
  template: `
    <HelloWorld v-bind="args" />`,
})


export const Default = Template.bind({})
Default.args = {
  msg: 'Hello world',
}