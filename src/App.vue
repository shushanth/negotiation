<template>
  <div>
    <negotiation-contract />
  </div>
</template>
<script>
import Vue from 'vue';

import NegotiationContract from '@/components/NegotiationContract';
export default {
  components: {
    NegotiationContract,
  },
};
</script>
<style lang="scss">
@import 'styles/base.scss';
@import 'styles/init.scss';
</style>
