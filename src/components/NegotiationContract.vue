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
            v-if="!doesEmployeeOfferLogged"
            formOfferLabel="Employee minimum offer"
            :contractOffer="minimumEmployeeOffer"
            @contractFormUpdate="onMinimumEmployeeOffer"
          />
          <div class="offer_logged" v-if="doesEmployeeOfferLogged">
            <BaseHeading level="h4" title="Employee offer :" />
            <p>{{ minimumEmployeeOffer }}</p>
          </div>
        </div>
        <div class="employer" v-if="currentContractTab === 'employer'">
          <ContractForm
            formOfferLabel="Employer maximum offer"
            :contractOffer="maximumEmployerOffer"
            @contractFormUpdate="onMaximumEmployerOffer"
          />
        </div>
      </div>
    </div>
  </BaseLayout>
</template>

<script>
import Vue from 'vue';

import ContractForm from './ContractForm';
import { BaseLayout, BaseTabs, BaseHeading } from '@/components/shared';

export default {
  name: 'NegotiationContract',
  components: {
    BaseLayout,
    BaseTabs,
    BaseHeading,
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
      doesEmployeeOfferLogged: false,
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
    employeeOfferFormVisibility() {
      if (this.doesEmployeeOfferLogged) {
        return false;
      }
      return this.currentContractTab === 'employee';
    },
    onMinimumEmployeeOffer(updatedOffer) {
      this.minimumEmployeeOffer = updatedOffer;
      this.doesEmployeeOfferLogged = true;
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
    .employee {
      @include styles-flex();
      width: 100%;
      .offer_logged {
        @include styles-flex();
        @include styles-flex--align(center, center);
        padding: 0 1rem;
        &:first-child {
          flex: 1;
        }
        * {
          padding-right: 0.5rem;
        }
      }
    }

    &_employer {
    }
  }
}
</style>
