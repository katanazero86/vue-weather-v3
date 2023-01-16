<template>
  <div class="drawer">
    <div class="drawer__overlay row justify-contents-end" @click.self="handleOverlayClick">
      <ul class="drawer__nav px-3">
        <li class="item row align-items-center justify-contents-between py-6 px-3"
            @click="handleNavItemClick(navItem.path)" v-for="navItem in navItems" :key="navItem">
          <span>{{ navItem.name }}</span>
          <img src="../../assets/icons/arrow_right_icon.png" alt="arrow-right-icon"/>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts" setup>

import {useRoute, useRouter} from "vue-router";

interface DrawerPropsInterface {
  isOpen: boolean;
}

const props = withDefaults(defineProps<DrawerPropsInterface>(), {
  isOpen: false,
});
const emit = defineEmits(['toggleIsOpen']);

const router = useRouter();
const route = useRoute();

const navItems = [
  {name: 'Home', path: '/'},
  // {name: 'About', path: '/about'}
];

const handleNavItemClick = path => {
  if (path === route.path) {
    window.location.reload();
  } else {
    router.push({
      path,
    });
    handleOverlayClick();
  }
};

const handleOverlayClick = () => {
  emit('toggleIsOpen');
};

</script>

<style lang="scss" scoped>

@import '../../assets/scss/common/mixins';
@import '../../assets/scss/common/variables';

.drawer {
  position: relative;
  z-index: 9999;

  &__overlay {
    @include overlay-background();
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    overflow: hidden;

    .drawer__nav {
      background-color: var(--drawer-background);
      width: 280px;
      height: 100%;
      overflow: auto;

      .item {
        border-bottom: 1px solid var(--border-color);
        cursor: pointer;

        > span {
          color: var(--default-color);
          font-size: 16px;
          font-weight: 400;
        }

        > img {
          width: 20px;
          height: 20px;
        }

      }

      @include pointer-fine() {
        .item:hover {
          > span {
            color: var(--drawer-item-hover);
            transform: translateX(6px);
            transition-duration: 0.3s;
          }

        }
      }

      @include pointer-coarse() {
        .item:active {
          > span {
            color: var(--drawer-item-hover);
            transform: translateX(6px);
            transition-duration: 0.3s;
          }
        }
      }

    }
  }
}
</style>
