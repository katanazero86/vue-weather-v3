<template>
  <button type="button"
          class="basic-button"
          :class="[
              block ? 'basic-button--block' : null,
              disabled ? `basic-button--disabled` : null,
              outline ? 'basic-button--outline' : null,
              small ? 'basic-button--small' : null,
              large ? 'basic-button--large' : null,
          ]"
          @click="$emit('click')">
    {{name}}
  </button>
</template>

<script>
    import {defineComponent} from 'vue';

    const BasicButton = defineComponent({
        name: 'BasicButton',
        props: {
            name: {type: String, default: ''},
            disabled: {type: Boolean, default: false},
            block: {type: Boolean, default: false},
            small: {type: Boolean, default: false},
            large: {type: Boolean, default: false},
            outline: {type: Boolean, default: false},
        },
        emits: ['click'],
    });
    export default BasicButton
</script>

<style lang="scss" scoped>
  @import "../../assets/scss/common/variables";

  .basic-button {

    display: inline-block;
    outline: none;
    padding: 12px 16px;
    cursor: pointer;
    font-weight: 600;
    font-size: 14px;
    border: 1px solid $primary-color;
    background-color: $primary-color;
    color: #ffffff;


    &--block {
      display: block;
      width: 100%;
    }

    &--outline {
      border-color: $primary-color;
      background-color: #ffffff;
      color: $primary-color;
    }

    &--small {
      padding: 8px 12px;
      font-size: 12px;
    }

    &--large {
      padding: 16px 20px;
      font-size: 18px;
    }

    &--disabled {
      border-color: #a6a6a6;
      background-color: #a6a6a6;
      color: #ffffff;
      pointer-events: none;
    }

  }

  .basic-button--disabled.basic-button--outline {
    background-color: #ffffff;
    color: #a6a6a6;
    border-color: #a6a6a6;
  }


</style>
