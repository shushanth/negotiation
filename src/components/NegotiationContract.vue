<template>
  <BaseLayout headerTitle="Negotiation">
    <div class="contract_tabs">
      <BaseTabs
        activeId="tab1"
        :tabs="contractTabs"
        @onTabSelect="onContractTabChange"
      />
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
        { id: 'Employee', title: 'Employee', active: true },
        { id: 'Employer', title: 'Employer', active: false },
      ],
    };
  },
  methods: {
    onContractTabChange(activeTab) {
      const updatedContractedTabs = this.contractTabs.map((contractTab) => {
        return activeTab === contractTab.id
          ? { ...contractTab, 'active': true }
          : { ...contractTab, 'active': false };
      });
      this.contractTabs = updatedContractedTabs; 
    },
  },
};
</script>

<style lang="scss">
@import 'styles/base.scss';
</style>
