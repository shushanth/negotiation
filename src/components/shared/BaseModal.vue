<template>
  <div
    :class="{
      modal_container: true,
    }"
  >
    <div class="modal_container--header">
      <BaseHeading level="h2" :title="title" />
    </div>
    <div class="modal_container--content">
      <slot />
    </div>
    <div class="modal_container--footer">
      <BaseButton
        label="OK"
        type="primary"
        size="small"
        @onClick="triggerModalClose"
      />
    </div>
  </div>
</template>
<script>
import Vue from 'vue';

import BaseHeading from './BaseHeading';
import BaseButton from './BaseButton';

export default {
  name: 'BaseModal',
  components: {
    BaseHeading,
    BaseButton,
  },
  props: {
    title: String,
  },
  methods: {
    triggerModalClose() {
      this.$emit('onResultOk');
    },
  },
};
</script>
<style lang="scss">
@import 'styles/base.scss';
.modal {
  &_container {
    padding: 2rem 1rem;
    width: 100%;
    border: 1px solid $styles-color-gray-light;
    position: absolute;
    z-index: 9999;
    background: #fff;
    @include styles-flex(column);
    @include styles-flex--align(center, center);
    @include styles-box-shadow();
  }

  &--header {
    border: 1px solid $styles-color-gray-light;
    margin: 1rem 3rem;
    height: 100vh;
  }

  &--content {
    margin: 0.5rem;
  }
}
</style>
