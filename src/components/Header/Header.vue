<template>
  <header class="header row align-items-center justify-contents-between pa-5">
    <div class="header__title">
      <p>vue-weather-v3</p>
    </div>
    <figure class="header__menu-icon" @click="toggleIsOpen">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
        <path d="M0 0h24v24H0V0z" fill="none"/>
        <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/>
      </svg>
    </figure>
  </header>
  <transition name="fade">
    <Drawer v-if="isOpen" :isOpen="isOpen" @toggleIsOpen="toggleIsOpen"/>
  </transition>
</template>

<script lang="ts" setup>
import {ref, Ref} from "vue";
import Drawer from "@/components/Drawer/Drawer.vue";

const isOpen: Ref<boolean> = ref(false);
const toggleIsOpen = () => {
  isOpen.value = !isOpen.value;
}
</script>

<style lang="scss" scoped>
@import '../../assets/scss/common/mixins';
@import '../../assets/scss/common/variables';

.header {

  position: relative;
  background-color: var(--header-background);
  color: var(--header-color);
  height: 60px;

  &__title {
    > p {
      font-size: 18px;
      letter-spacing: -0.5px;
      font-weight: 500;
    }
  }

  &__menu-icon {
    margin: 0;
    padding: 0;
    color: var(--header-color);

    > svg {
      cursor: pointer;
      width: 28px;
      height: 28px;
    }
  }
}
</style>
