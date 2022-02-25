<template>
  <header class="header row align-items-center justify-contents-between pa-5">
    <p class="header__title">vue-weather-v3</p>
    <div class="header__menu-icon">
      <button type="button" @click="toggleTheme">
        <div>
          <Transition name="toggle">
            <LightThemeIcon v-if="theme === 'light'"/>
            <DarkThemeIcon v-else/>
          </Transition>
          <!--          <div class="theme-icon theme-icon__enter theme-icon__active">-->
          <!--            <LightThemeIcon v-if="theme === 'light'"/>-->
          <!--            <DarkThemeIcon v-else />-->
          <!--          </div>-->
        </div>
      </button>
      <button type="button" @click="toggleIsOpen">
        <div>
          <MenuIcon/>
        </div>
      </button>
    </div>
  </header>
  <transition name="fade">
    <Drawer v-if="isOpen" :isOpen="isOpen" @toggleIsOpen="toggleIsOpen"/>
  </transition>
</template>

<script lang="ts" setup>
import {ref, Ref, onMounted} from "vue";
import Drawer from "@/components/Drawer/Drawer.vue";
import LightThemeIcon from "@/components/Icons/LightThemeIcon.vue";
import MenuIcon from "@/components/Icons/MenuIcon.vue";
import DarkThemeIcon from "@/components/Icons/DarkThemeIcon.vue";

const isOpen: Ref<boolean> = ref(false);
const toggleIsOpen = () => {
  isOpen.value = !isOpen.value;
};

onMounted(() => {
  if(localStorage.getItem('theme')) {
    const targetColorThemeValue = localStorage.getItem('theme');
    document.documentElement.setAttribute('color-theme', targetColorThemeValue);
    theme.value = targetColorThemeValue as 'light' | 'dark';
  } else {
    theme.value = document.documentElement.getAttribute('color-theme') as 'light' | 'dark';
    localStorage.setItem('theme', theme.value);
  }
});

const theme: Ref<'light' | 'dark'> = ref('light');
const toggleTheme = () => {

  // const themeIconEl = document.querySelector('.theme-icon');
  // themeIconEl.classList.toggle('theme-icon__active');
  //
  // setTimeout(() => {
  //   if (theme.value === 'light') {
  //     theme.value = 'dark';
  //   } else {
  //     theme.value = 'light';
  //   }
  //   themeIconEl.classList.toggle('theme-icon__active');
  // }, 200);

  if (theme.value === 'light') {
    theme.value = 'dark';
  } else {
    theme.value = 'light';
  }
  applyColorTheme(theme.value);
};

const applyColorTheme = (targetColorThemeValue: string) => {
  document.documentElement.setAttribute('color-theme', targetColorThemeValue);
  localStorage.setItem('theme', targetColorThemeValue);
};

</script>

<style lang="scss" scoped>
@import '../../assets/scss/common/mixins';
@import '../../assets/scss/common/variables';

.header {

  position: relative;
  background-color: var(--header-background);
  color: var(--default-color);
  height: 60px;

  &__title {
    font-size: 18px;
    letter-spacing: -0.5px;
    font-weight: 500;
    height: 28px;
  }

  &__menu-icon {
    margin: 0;
    padding: 0;
    display: flex;
    align-items: center;

    > button {
      cursor: pointer;
      border: none;
      border-radius: 50%;
      width: 24px;
      height: 24px;
      margin-right: 0.25rem;
      position: relative;
      background: none;
      color: var(--default-color);

      &:first-child {
        margin-right: 14px;
      }

      > div {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
    }

  }
}

//.theme-icon {
//  transition: all 0.2s ease-in-out;
//}
//
//.theme-icon__enter {
//  transform: scale(0) rotate(180deg);
//  opacity: 0;
//}
//
//.theme-icon__active {
//  transform: scale(1) rotate(0deg);
//  opacity: 1;
//}

.toggle-enter-active {
  transition: all 0.3s ease-in-out;
}

.toggle-enter-from, .toggle-leave-from {
  transform: scale(0) rotate(180deg);
  opacity: 0;
}

</style>
