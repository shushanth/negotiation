import { mount, shallowMount } from '@vue/test-utils'
import { mountComponentWithProps } from '../helpers'

import { BaseHeading } from '@/components/shared'

describe('BaseHeading.vue', () => {
  let BaseHeadingWrapper = mount(BaseHeading)
  let BaseHeadingShallowWrapper = shallowMount(BaseHeading)
  it('should render Vue instance', () => {
    expect(BaseHeadingWrapper.isVueInstance()).toBeTruthy()
  })

  it('should have headings element', () => {
    expect(BaseHeadingShallowWrapper.find('.headings').exists()).toBe(true)
    expect(BaseHeadingShallowWrapper.find('.headings').exists()).toBe(true)
  })

  it('should match passed props for heading level h2', () => {
    const BaseHeadingProps = mountComponentWithProps(BaseHeading, {
      propsData: {
        level: 'h2',
        theme: 'primary',
        title: 'hello world',
      },
    }).props()
    expect(BaseHeadingShallowWrapper.find('h2')).toBeDefined()
    expect(BaseHeadingProps.level).toEqual('h2')
    expect(BaseHeadingProps.theme).toEqual('primary')
    expect(BaseHeadingProps.title).toEqual('hello world')
  })

  it('should match passed props for heading level h4', () => {
    const BaseHeadingProps = mountComponentWithProps(BaseHeading, {
      propsData: {
        level: 'h4',
        theme: 'primary',
        title: 'testing',
      },
    }).props()
    expect(BaseHeadingShallowWrapper.find('h4')).toBeDefined()
    expect(BaseHeadingProps.level).toEqual('h4')
    expect(BaseHeadingProps.theme).toEqual('primary')
    expect(BaseHeadingProps.title).toEqual('testing')
  })
})
