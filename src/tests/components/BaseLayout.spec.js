import { mount, shallowMount } from '@vue/test-utils'
import { mountComponentWithProps } from '../helpers'

import { BaseLayout } from '@/components/shared'

describe('BaseLayout.vue', () => {
  let BaseLayoutWrapper = mount(BaseLayout)
  let BaseLayoutShallowWrapper = shallowMount(BaseLayout)
  it('should render Vue instance', () => {
    expect(BaseLayoutWrapper.isVueInstance()).toBeTruthy()
  })

  it('should have layout container element', () => {
    expect(BaseLayoutShallowWrapper.find('base-header-stub').exists()).toBeTruthy()
    expect(BaseLayoutShallowWrapper.find('.layout_body').exists()).toBeTruthy()
  })

  it('should match passed props', () => {
    const BaseLayoutShallowWrapper = mountComponentWithProps(BaseLayout, {
      propsData: {
        headerTitle: 'negotiation',
      },
    }).props()
    expect(BaseLayoutShallowWrapper.headerTitle).toBeDefined()
    expect(BaseLayoutShallowWrapper.headerTitle).toEqual('negotiation')
  })
})
