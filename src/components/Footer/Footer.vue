<template>
  <footer class="footer row-wrap align-items-center justify-contents-between pa-5">
    <section class="footer__description col-12 col-md-6 my-5">
      <p>© 2021 vue-weather-v3 ® All rights reserved.</p>
      <p>Powered by katanazero86</p>
    </section>
    <section class="footer__link col-12 col-md-6 my-5">
      <span @click="handleLinkClick(link.url)" v-for="link in links" :key="link">{{ link.name }}</span>
    </section>
  </footer>
</template>

<script lang="ts" setup>
const links = [
  {name: 'GitHub', url: 'https://github.com/katanazero86/vue-weather-v3'}
];

const handleLinkClick = (targetUrl: string) => {
  if (!targetUrl) return false;
  window.open(targetUrl, '_blank');
};
</script>

<style lang="scss" scoped>
@import '../../assets/scss/common/mixins';
@import '../../assets/scss/common/variables';

.footer {
  font-size: 14px;
  letter-spacing: -0.5px;
  font-weight: 500;
  background-color: var(--footer-background);
  color: var(--default-color);

  &__description {
  }

  &__link {
    span {
      cursor: pointer;
    }

    @include pointer-fine() {
      span:hover {
        text-decoration: underline;
      }
    }

    @include pointer-coarse() {
      span:active {
        text-decoration: underline;
      }
    }

  }

}
</style>
