<template>
  <div class="input">
    <base-label :label="label" :subLabel="subLabel" />
    <input
      :class="{
        input_element: true,
        'input_element--error': (this.errors && this.errors.value) || false,
      }"
      @input="onInputChange"
      @change="onInputChange"
      @blur="onInputBlur"
      :type="type"
      :value="value || ''"
    />
  </div>
</template>
<script>
import BaseLabel from './BaseLabel';

export default {
  name: 'BaseInput',
  props: {
    type: String,
    label: String,
    subLabel: String,
    value: String | Number,
    onUpdate: Function,
    errors: Object,
    focusOut: Boolean,
  },
  components: {
    'base-label': BaseLabel,
  },
  methods: {
    onInputChange(event) {
      const {
        target: { value },
      } = event;
      let inputValue = value;
      if (this.type === 'number') {
        inputValue = parseInt(value, 10);
      }
      this.$emit('onUpdate', inputValue);
    },
    onInputBlur() {
      this.$props.focusOut && this.$emit('blur');
    },
  },
};
</script>
<style lang="scss">
@import 'styles/base.scss';

.input {
  @include styles-flex(column);
  width: 100%;
  margin: 0.5rem 0;

  &_element {
    padding: 0.5rem;
    margin: 0.5rem 0;
    outline: 0;

    &--error {
      border: 1px solid $styles-color-red-safron;
    }
  }
}
</style>
