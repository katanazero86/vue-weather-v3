<template>
    <header class="header">
        <div class="header__title">
            <p>vue-weather-v3</p>
        </div>
        <figure class="header__menu-icon" @click="handleIsOpenClick">
            <img src="../../assets/icons/menu_icon.png" alt="menu-icon"/>
        </figure>
    </header>
    <Drawer v-if="isOpen" />
</template>

<script>
    import {defineComponent, ref} from 'vue';
    import Drawer from '../Drawer/Drawer.vue';

    const Header = defineComponent({
        name: 'Header',
        components: {Drawer},
        setup() {
            const isOpen = ref(false);
            const handleIsOpenClick = () => {
                isOpen.value = !isOpen.value;
            }

            return {
                isOpen,
                handleIsOpenClick,
            }
        }
    })
    export default Header
</script>

<style lang="scss" scoped>
.header {
    display: flex;
    flex-direction: row;
    border-bottom: 1px solid #f6f6f6;
    align-items: center;
    justify-content: space-between;

    padding: 8px;
    position: relative;

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

        width: 28px;
        height: 28px;

        > img {
            width: 100%;
            height: auto;
            object-fit: contain;
            cursor: pointer;
        }
    }
}
</style>