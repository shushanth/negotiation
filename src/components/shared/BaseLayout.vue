<template>
  <base-header level="h2" theme="primary" :headerTitle="headerTitle" />
</template>
<script>
import Vue from 'vue';

import BaseHeader from './BaseHeader';
export default {
  name: 'BaseLayout',
  components: {
    'base-header': BaseHeader,
  },
  props: {
    headerTitle: String,
  },
};
</script>
<style lang="scss"></style>
