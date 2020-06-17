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
            v-if="!doesEmployeeOfferLogged"
            formOfferLabel="Employee minimum offer"
            :contractOffer="minimumEmployeeOffer"
            @contractFormUpdate="onMinimumEmployeeOffer"
          />
        </div>
      </div>
      <ContractResult
        v-if="showContractResult"
        :contractStatus="getContractResult"
        :minimumOffer="minimumEmployeeOffer"
        :maximumOffer="maximumEmployerOffer"
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
      minimumEmployeeOffer: 0,
      maximumEmployerOffer: 0,
      doesEmployeeOfferLogged: false,
      doesEmployerOfferLogged: false,
      contractTabs: [
        { id: 'employee', title: 'Employee', active: true },
        { id: 'employer', title: 'Employer', active: false },
      ],
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
      this.minimumEmployeeOffer = 0;
      this.maximumEmployerOffer = 0;
      this.doesEmployeeOfferLogged = false;
      this.doesEmployerOfferLogged = false;
            contractTabs: [
        { id: 'employee', title: 'Employee', active: true },
        { id: 'employer', title: 'Employer', active: false },
      ];
    },
    onMinimumEmployeeOffer(updatedOffer) {
      this.minimumEmployeeOffer = updatedOffer;
      this.doesEmployeeOfferLogged = true;
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
      if (!this.minimumEmployeeOffer || !this.maximumEmployerOffer) {
        return false;
      }
      return this.doesEmployerOfferLogged && this.doesEmployeeOfferLogged;
    },
    getContractResult() {
      return this.minimumEmployeeOffer <= this.maximumEmployerOffer
        ? 'Success!!'
        : 'Failure!!';
    },
  },
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
