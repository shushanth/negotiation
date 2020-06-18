import { mount, shallowMount } from '@vue/test-utils'
import { mountComponentWithProps } from '../helpers'

import { BaseModal } from '@/components/shared'

describe('BaseModal.vue', () => {
  let BaseModalWrapper = mount(BaseModal)
  let BaseModalShallowWrapper = shallowMount(BaseModal)
  it('should render Vue instance', () => {
    expect(BaseModalWrapper.isVueInstance()).toBeTruthy()
  })

  it('should have modal container element', () => {
    expect(BaseModalShallowWrapper.find('.modal_container--header').exists()).toBe(true)
    expect(BaseModalShallowWrapper.find('.modal_container--content').exists()).toBe(true)
    expect(BaseModalShallowWrapper.find('.modal_container--footer').exists()).toBe(true)
  })

  it('should match passed props', () => {
    const BaseModalProps = mountComponentWithProps(BaseModal, {
      propsData: {
        title: 'success',
      },
    }).props()
    expect(BaseModalProps.title).toEqual('success')
  })
})
