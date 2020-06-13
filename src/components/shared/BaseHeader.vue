<template>
  <div class="header_container">
    <base-heading :title="headerTitle" level="h2" theme="primary" />
  </div>
</template>
<script>
import Vue from 'vue';

import BaseHeading from './BaseHeading';
export default {
  name: 'BaseHeader',
  components: {
    'base-heading': BaseHeading,
  },
  props: {
    headerTitle: String,
  },
};
</script>
<style lang="scss" scoped>
@import 'styles/base.scss';
.header_container {
  padding: 1rem 0.5rem;
  background-color: #fff;
  @include styles-flex();
  @include styles-flex--align(center, center);
  @include styles-box-shadow();
}
</style>
