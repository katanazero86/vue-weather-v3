<template>
  <div class="drawer">
    <div class="drawer__overlay row justify-contents-end" @click.self="handleOverlayClick">
      <ul class="drawer__nav px-3">
        <li class="item row align-items-center justify-contents-between py-6 px-3"
            @click="handleNavItemClick(navItem.path)" v-for="navItem in navItems" :key="navItem">
          <span>{{navItem.name}}</span>
          <img src="../../assets/icons/arrow_right_icon.png" alt="arrow-right-icon"/>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
    import {defineComponent} from 'vue';
    import {useRouter, useRoute} from 'vue-router'

    const Drawer = defineComponent({
        name: 'Drawer',
        props: {
            isOpen: {type: Boolean, default: false, required: true}
        },
        emits: ['toggleIsOpen'],
        setup({isOpen: boolean}, context) {

            const router = useRouter();
            const route = useRoute();

            const navItems = [
                {name: 'Home', path: '/'},
                {name: 'About', path: '/about'}
            ]

            const handleNavItemClick = path => {
                if (path === route.path) {
                    window.location.reload();
                } else {
                    router.push({
                        path: '/about',
                    });
                }
            }

            const handleOverlayClick = () => {
                context.emit('toggleIsOpen');
            }

            return {
                navItems,
                handleNavItemClick,
                handleOverlayClick
            }
        }
    })
    export default Drawer
</script>

<style lang="scss" scoped>

  @import '../../assets/scss/common/mixins';
  @import '../../assets/scss/common/variables';

  .drawer {
    &__overlay {
      @include overlay-background();
      position: fixed;
      top: 0;
      bottom: 0;
      right: 0;
      left: 0;
      overflow: hidden;

      .drawer__nav {
        background-color: $dark-color;
        width: 280px;
        height: 100%;
        overflow: auto;

        .item {
          border-bottom: 1px solid $white-color;
          cursor: pointer;

          > span {
            color: $white-color;
            font-size: 16px;
            font-weight: 400;
          }

          > img {
            width: 20px;
            height: 20px;
          }

        }

        @media (hover: hover) {
          .item:hover {
            > span {
              color: $primary-color;
              transform: translateX(6px);
              transition-duration: 0.3s;
            }
          }
        }
      }
    }
  }
</style>
