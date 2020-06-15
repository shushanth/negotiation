<template>
  <div class="layout_container">
    <base-header level="h2" theme="primary" :headerTitle="headerTitle" />
    <div class="layout_body">
      <slot />
    </div>
  </div>
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
<style lang="scss">
@import 'styles/base.scss';
.layout {
  &_container {
    @include styles-flex(column);
  }

  &_body {
    border: 1px solid $styles-color-gray-light;
    margin: 1rem 3rem;
    height: 100vh;
  }
}
</style>
