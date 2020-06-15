<template>
  <div class="tabs_container">
    <button
      :class="{
        tab: true,
        'tab--active': tab.active,
      }"
      v-for="tab in tabs"
      :key="tab.id"
      @click="onTabChange(tab.id)"
    >
      {{ tab.title }}
    </button>
  </div>
</template>
<script>
import Vue from 'vue';

export default {
  name: 'BaseTabs',
  props: {
    tabs: {
      required: true,
      type: Array,
    },
    activeTab: String,
  },
  methods: {
    onTabChange(activeTab) {
      this.$emit('onTabSelect', activeTab);
    },
  },
};
</script>
<style lang="scss">
@import 'styles/base.scss';
.tabs_container {
  @include styles-flex();

  .tab {
    flex: 1;
    padding: 0.85rem;
    border: 0;
    letter-spacing: 0.12rem;
    border-right: 1px solid $styles-color-gray-light;
    @include styles-flex--align(center, center);
    &--active {
      background: $styles-color-orange-light;
      border-bottom: 1px solid $styles-color-orange;
      color: #fff;
      font-weight: bold;
    }
  }
}
</style>
