<template>
  <BaseLayout headerTitle="Negotiation">
    <div class="contract_tabs">
      <BaseTabs
        activeId="tab1"
        :tabs="contractTabs"
        @onTabSelect="onContractTabChange"
      />
      <div class="contract_panel">
        <div class="employee" v-if="currentContractTab === 'employee'">
            <ContractForm 
              formOfferLabel="Employee minimum offer" 
              :contractOffer="minimumEmployeeOffer"
              @contractFormUpdate="onMinimumEmployeeOffer" 
            />
        </div>
        <div class="employer" v-if="currentContractTab === 'employer'"></div>
      </div>
    </div>
  </BaseLayout>
</template>

<script>
import Vue from 'vue';

import ContractForm from './ContractForm';
import {
  BaseLayout,
  BaseTabs,
} from '@/components/shared';

export default {
  name: 'NegotiationContract',
  components: {
    BaseLayout,
    BaseTabs,
    ContractForm,
  },
  data() {
    return {
      contractTabs: [
        { id: 'employee', title: 'Employee', active: true },
        { id: 'employer', title: 'Employer', active: false },
      ],
      currentContractTab: 'employee',
      minimumEmployeeOffer: 0,
      maximumEmployerOffer: 0,
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

    onMinimumEmployeeOffer(updatedOffer) {
      this.minimumEmployeeOffer = updatedOffer;
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
    &_employee {
    }

    &_employer {
    }
  }
}
</style>
