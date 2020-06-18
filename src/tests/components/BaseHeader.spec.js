import { mount, shallowMount } from '@vue/test-utils'
import { mountComponentWithProps } from '../helpers'

import { BaseHeader } from '@/components/shared'

describe('BaseHeader.vue', () => {
  let BaseHeaderWrapper = mount(BaseHeader)
  let BaseHeaderShallowWrapper = shallowMount(BaseHeader)
  it('should render Vue instance', () => {
    expect(BaseHeaderWrapper.isVueInstance()).toBeTruthy()
  })

  it('should have header container element', () => {
    expect(BaseHeaderShallowWrapper.find('base-heading-stub').exists()).toBe(true)
  })

  it('should match passed props', () => {
    const baseHeaderProps = mountComponentWithProps(BaseHeader, {
      propsData: {
        headerTitle: 'negotiation',
      },
    }).props()
    expect(baseHeaderProps.headerTitle).toBeDefined()
    expect(baseHeaderProps.headerTitle).toEqual('negotiation')
  })
})
