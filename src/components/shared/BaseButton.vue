<template>
  <div class="button_wrapper">
    <button
      :class="{
        button: true,
        'button--disabled': this.disabled,
        'button_color--primary': this.type === 'primary' || false,
        'button_size--small': this.size === 'small' || false,
      }"
      @click="btnClick()"
    >
      {{ this.label || 'button' }}
    </button>
  </div>
</template>
<script>
export default {
  name: 'BaseButton',
  props: {
    label: String,
    type: String,
    size: String,
    onClick: Function,
    disabled: Boolean,
  },
  methods: {
    btnClick() {
      this.$emit('onClick');
    },
  },
};
</script>
<style lang="scss">
@import 'styles/base.scss';
.button_wrapper {
  @include styles-flex(column);
  margin: 5px 0;
  .button {
    outline: 0;
    padding: 1rem;
    cursor: pointer;
    letter-spacing: 0.1rem;
    &_color {
      &--primary {
        background: $styles-color-orange;
      }
    }
    &--disabled {
      pointer-events: none !important;
      background-color: $styles-color-orange-light;
    }
    &_size {
      &--small {
        font-size: 0.8rem;
        font-weight: 500;
        padding: 0.5rem;
        color: #fff;
      }
    }
  }
}
</style>
