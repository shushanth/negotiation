<template>
  <div class="headings">
    <h2
      v-if="this.level == 'h2'"
      :class="{
        'title_color--primary': this.theme === 'primary' || false,
      }"
    >
      {{ title }}
    </h2>
    <h4 v-if="this.level == 'h4'">
      {{ title }}
    </h4>
  </div>
</template>
<script>
import Vue from 'vue';
export default {
  name: 'BaseHeading',
  props: {
    level: String,
    theme: String,
    title: String,
  },
};
</script>
<style lang="scss">
@import 'styles/base.scss';
.headings {
  @include styles-flex();
  padding: 0.5rem 0;
  .title {
    &_color {
      &--primary {
        color: $styles-color-orange;
      }
    }
  }
}
</style>
