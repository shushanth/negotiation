import { mount } from '@vue/test-utils'
import { mountComponentWithProps } from '../helpers'

import { BaseTabs } from '@/components/shared'

describe('BaseTabs.vue', () => {
  let BaseTabsWrapper = mount(BaseTabs)
  it('should render Vue instance', () => {
    expect(BaseTabsWrapper.isVueInstance()).toBeTruthy()
  })

  it('should match passed props', () => {
    const BaseTabsProps = mountComponentWithProps(BaseTabs, {
      propsData: {
        tabs: [
          { id: 'employee', title: 'Employee', active: true },
          { id: 'employer', title: 'Employer', active: false },
        ],
        activeTab: 'employee',
      },
    }).props()
    expect(BaseTabsProps.activeTab).toEqual('employee')
    expect(BaseTabsProps.tabs.length).toBe(2)
  })
})
