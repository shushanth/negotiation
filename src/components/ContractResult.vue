<template>
  <div class="contract_result">
    <p class="temperature">London temperature: {{temperatureInLondon}} </p>
    <BaseModal :title="contractStatus" @onResultOk="onResultOkStatus">
      <div class="result_content">
        <p>Employee minimum expected salary: {{ minimumExpectedSalary }}</p>
        <p>Employer maximum offer: {{ maximumOffer }}</p>
      </div>
    </BaseModal>
  </div>
</template>
<script>
import Vue from 'vue';

import { BaseModal, BaseHeading } from '@/components/shared';

export default {
  name: 'ContractResult',
  components: {
    BaseModal,
    BaseHeading,
  },
  props: {
    contractStatus: String,
    minimumExpectedSalary: Number,
    maximumOffer: Number,
    temperatureInLondon: Number,
  },
  methods: {
    onResultOkStatus() {
      this.$emit('onResultOkStatus');
    },
  },
};
</script>
<style lang="scss">
@import 'styles/base.scss';
.contract_result {
  width: 100%;
  display: flex;
  background: #fff;

  .temperature {
    display: flex;
    padding: 1rem;
    justify-content: flex-end;
    width: 100%;
    z-index: 99999999;
  }
}
</style>
