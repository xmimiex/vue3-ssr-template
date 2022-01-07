import { shallowMount } from '@vue/test-utils'
import HelloWorld from '.'

describe('HelloWorld', () => {

  it('should match snapshot', () => {
    const wrapper = shallowMount(HelloWorld, {
      propsData: {
        msg: 'World',
      },
    })
    expect(wrapper.element).toMatchSnapshot()
  })
})
