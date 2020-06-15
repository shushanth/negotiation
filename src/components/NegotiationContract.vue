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
          I'm employee contract tab
        </div>
        <div class="employer" v-if="currentContractTab === 'employer'">
          I'm employer contract tab
        </div>
      </div>
    </div>
  </BaseLayout>
</template>

<script>
import Vue from 'vue';

import { BaseLayout, BaseTabs } from '@/components/shared';
export default {
  name: 'NegotiationContract',
  components: {
    BaseLayout,
    BaseTabs,
  },
  data() {
    return {
      contractTabs: [
        { id: 'employee', title: 'Employee', active: true },
        { id: 'employer', title: 'Employer', active: false },
      ],
      currentContractTab: 'employee',
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
