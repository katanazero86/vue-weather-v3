<template>
  <div class="spinner row align-items-center justify-contents-center">
    <div class="spinner__circle" :class="[small && `spinner__circle--small`, large && `spinner__circle--large`]"></div>
  </div>
</template>

<script lang="ts">
    import {defineComponent} from 'vue'

    const Spinner = defineComponent({
        name: 'Spinner',
        props: {
            small: {type: Boolean, default: false},
            large: {type: Boolean, default: false},
        }
    })
    export default Spinner
</script>

<style lang="scss" scoped>

  @import "../../assets/scss/common/mixins";

  .spinner {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    @include overlay-background();

    &__circle {
      border: 5px solid #f3f3f3;
      animation: spin 1s linear infinite;
      border-top: 5px solid #555;
      border-radius: 50%;
      width: 50px;
      height: 50px;

      &--small {
        width: 35px;
        height: 35px;
      }

      &--large {
        width: 65px;
        height: 65px;
      }

    }
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

</style>
