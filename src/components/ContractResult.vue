<template>
  <div class="contract_result">
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

import { BaseModal } from '@/components/shared';

export default {
  name: 'ContractResult',
  components: {
    BaseModal,
  },
  props: {
    contractStatus: String,
    minimumExpectedSalary: Number,
    maximumOffer: Number,
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
  position: absolute;
  top: 5rem;
  background: #fff;
}
</style>
