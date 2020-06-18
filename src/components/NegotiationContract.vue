<template>
  <BaseLayout headerTitle="Negotiation">
    <div class="contract_tabs">
      <BaseTabs
        activeId="tab1"
        :tabs="contractTabs"
        @onTabSelect="onContractTabChange"
      />
      <div class="contract_panel">
        <div
          class="contract_panel--form"
          v-if="currentContractTab === 'employer'"
        >
          <ContractForm
            formOfferLabel="Employer maximum offer"
            :contractOffer="maximumEmployerOffer"
            @contractFormUpdate="onMaximumEmployerOffer"
          />
        </div>
        <div
          class="contract_panel--form"
          v-if="currentContractTab === 'employee'"
        >
          <ContractForm
            v-if="!doesEmployeeSalaryLogged"
            formOfferLabel="Employee minimum expected salary"
            :contractOffer="minimumExpectedSalary"
            @contractFormUpdate="onminimumExpectedSalary"
          />
        </div>
      </div>
      <ContractResult
        v-if="showContractResult"
        :contractStatus="getContractResult"
        :minimumExpectedSalary="minimumExpectedSalary"
        :maximumOffer="maximumEmployerOffer"
        :temperatureInLondon="temperatureInLondon"
        @onResultOkStatus="resetContractForm"
      />
    </div>
  </BaseLayout>
</template>

<script>
import Vue from 'vue';

import ContractForm from './ContractForm';
import ContractResult from './ContractResult';
import {
  BaseLayout,
  BaseTabs,
  BaseHeading,
  BaseModal,
} from '@/components/shared';

import { httpService } from '../api/httpService';

export default {
  name: 'NegotiationContract',
  components: {
    BaseLayout,
    BaseTabs,
    BaseHeading,
    BaseModal,
    ContractForm,
    ContractResult,
  },
  data() {
    return {
      currentContractTab: 'employee',
      minimumExpectedSalary: 0,
      maximumEmployerOffer: 0,
      doesEmployeeSalaryLogged: false,
      doesEmployerOfferLogged: false,
      contractTabs: [
        { id: 'employee', title: 'Employee', active: true },
        { id: 'employer', title: 'Employer', active: false },
      ],
      temperatureInLondon: null,
    };
  },
  methods: {
    onContractTabChange(activeTab) {
      const updatedContractedTabs = this.contractTabs.map((contractTab) => {
        return activeTab === contractTab.id
          ? { ...contractTab, active: true }
          : { ...contractTab, active: false };
      });
      this.currentContractTab = activeTab;
      this.contractTabs = updatedContractedTabs;
    },
    resetContractForm() {
      this.currentContractTab = 'employee';
      this.minimumExpectedSalary = 0;
      this.maximumEmployerOffer = 0;
      this.doesEmployeeSalaryLogged = false;
      this.doesEmployerOfferLogged = false;
            contractTabs: [
        { id: 'employee', title: 'Employee', active: true },
        { id: 'employer', title: 'Employer', active: false },
      ];
    },
    onminimumExpectedSalary(updatedSalary) {
      this.minimumExpectedSalary = updatedSalary;
      this.doesEmployeeSalaryLogged = true;
      this.currentContractTab = 'employer';
      this.onContractTabChange('employer');
    },
    onMaximumEmployerOffer(updatedOffer) {
      this.maximumEmployerOffer = updatedOffer;
      this.doesEmployerOfferLogged = true;
      this.currentContractTab = 'employee';
      this.onContractTabChange('employee');
    },
  },
  computed: {
    showContractResult() {
      if (!this.minimumExpectedSalary || !this.maximumEmployerOffer) {
        return false;
      }
      return this.doesEmployerOfferLogged && this.doesEmployeeSalaryLogged;
    },
    getContractResult() {
      return this.minimumExpectedSalary <= this.maximumEmployerOffer
        ? 'SUCCESS!!'
        : 'FAILURE!!';
    },
  },
  mounted() {
    httpService('GET', 'London', (temparature) => {
      this.temperatureInLondon = temparature
    }, (error) => {
      throw error;
    });
  }
};
</script>

<style lang="scss">
@import 'styles/base.scss';
.contract_tabs {
  @include styles-flex(column);
  height: 100%;
  .contract_panel {
    margin: 1rem;
    padding: 1rem;
    @include styles-flex(column);
    @include styles-flex--align(center, center);

    &--form {
      .employee_offer {
        @include styles-flex();
        @include styles-flex--align(center, center);
      }
    }
  }
}
</style>
