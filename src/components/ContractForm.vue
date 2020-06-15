<template>
  <div class="contract_form">
    <BaseInput
      type="number"
      :label="formOfferLabel"
      :value="contractOffer"
      :focusOut="true"
    />
    <BaseButton
      label="Submit"
      type="primary"
      size="small"
      @onClick="onContractFormUpdate"
      :disabled="false"
    />
  </div>  
</template>
<script>
import Vue from 'vue';
import {
  BaseInput,
  BaseButton,
} from '@/components/shared';

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

    }
  }
}
</script>
<style lang="scss">

</style>


