<template>
  <div class="contract_form">
    <BaseInput
      type="number"
      :label="formOfferLabel"
      :value="contractOffer"
      @onUpdate="onContractValueUpdate"
      :focusOut="true"
    />
    <BaseButton
      label="Submit"
      type="primary"
      size="small"
      @onClick="onContractFormUpdate"
      :disabled="isContractFormValid()"
    />
  </div>
</template>
<script>
import Vue from 'vue';

import { BaseInput, BaseButton } from '@/components/shared';

export default {
  name: 'ContractForm',
  components: {
    BaseInput,
    BaseButton,
  },
  props: {
    formOfferLabel: String,
    contractOffer: Number,
  },
  methods: {
    onContractFormUpdate() {
      this.$emit('contractFormUpdate', this.contractOfferValue);
    },
    onContractValueUpdate(updatedValue) {
      this.contractOfferValue = updatedValue;
    },
    isContractFormValid() {
      return !this.contractOfferValue;
    },
  },
  data() {
    return {
      contractOfferValue: this.contractOffer,
    };
  },
};
</script>
