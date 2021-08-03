<template>
  <footer class="footer row-wrap align-items-center justify-contents-between pa-5">
    <section class="footer__description col-6 col-sm-12 my-5">
      <p>© 2021 vue-weather-v3 ® All rights reserved.</p>
      <p>Powered by katanazero86</p>
    </section>
    <section class="footer__link col-6 col-sm-12 my-5">
      <span>GitHub</span>
    </section>
  </footer>
</template>

<script lang="ts">
    import {defineComponent} from 'vue';

   const Footer = defineComponent({
        name: 'Footer',
        setup() {

        }
    });

   export default Footer
</script>

<style lang="scss" scoped>

  @import '../../assets/scss/common/mixins';
  @import '../../assets/scss/common/variables';

  .footer {
    font-size: 14px;
    letter-spacing: -0.5px;
    font-weight: 400;
    background-color: $background-color;
    color: $white-color;

    &__description {
    }

    &__link {
      span {
        cursor: pointer;
      }
    }


    @media (hover: hover) {
      &__link {
        span:hover {
          color: $primary-color;
        }
      }
    }

  }
</style>
