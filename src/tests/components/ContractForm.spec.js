import { mount } from '@vue/test-utils'
import { mountComponentWithProps } from '../helpers'

import ContractForm from '@/components/ContractForm'

describe('ContractForm.vue', () => {
  let ContractFormWrapper = mount(ContractForm)
  it('should render Vue instance', () => {
    expect(ContractFormWrapper.isVueInstance()).toBeTruthy()
  })

  it('should have contract form container elements', () => {
    expect(ContractFormWrapper.find('input').exists()).toBe(true)
    expect(ContractFormWrapper.find('button').exists()).toBe(true)
  })

  it('should match passed props', () => {
    const ContractFormProps = mountComponentWithProps(ContractForm, {
      propsData: {
        formOfferLabel: 'Employee minimum expected salary',
        contractOffer: 5000,
      },
    }).props()
    expect(ContractFormProps.formOfferLabel).toEqual('Employee minimum expected salary')
    expect(ContractFormProps.contractOffer).toBe(5000)
  })
})
