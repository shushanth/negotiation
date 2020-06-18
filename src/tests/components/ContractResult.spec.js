import { mount } from '@vue/test-utils'
import { mountComponentWithProps } from '../helpers'

import ContractResult from '@/components/ContractResult'

describe('ContractResult.vue', () => {
  let ContractResultWrapper = mount(ContractResult)
  it('should render Vue instance', () => {
    expect(ContractResultWrapper.isVueInstance()).toBeTruthy()
  })

  it('should have contract form container elements', () => {
    expect(ContractResultWrapper.find('.modal_container').exists()).toBe(true)
    expect(ContractResultWrapper.find('.temperature').exists()).toBe(true)
    expect(ContractResultWrapper.find('.modal_container--header').exists()).toBe(true)
    expect(ContractResultWrapper.find('.modal_container--content').exists()).toBe(true)
    expect(ContractResultWrapper.find('.result_content').exists()).toBe(true)
    expect(ContractResultWrapper.find('.modal_container--footer').exists()).toBe(true)
  })

  it('should match passed props', () => {
    const ContractResultProps = mountComponentWithProps(ContractResult, {
      propsData: {
        contractStatus: 'SUCCESS',
        minimumExpectedSalary: 1500,
        maximumOffer: 3000,
        temperatureInLondon: 280.1,
      },
    }).props()
    expect(ContractResultProps.contractStatus).toEqual('SUCCESS')
    expect(ContractResultProps.minimumExpectedSalary).toBe(1500)
    expect(ContractResultProps.maximumOffer).toBe(3000)
    expect(ContractResultProps.temperatureInLondon).toBe(280.1)
  })
})
