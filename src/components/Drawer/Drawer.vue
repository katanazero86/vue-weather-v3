<template>
    <div class="drawer">
        <div class="drawer__overlay row justify-contents-end" @click.self="handleOverlayClick">
            <ul class="drawer__nav px-2">
                <li class="item row align-items-center justify-contents-between py-6 px-3" @click="handleNavItemClick(navItem.path)" v-for="navItem in navItems" :key="navItem">
                    <span>{{navItem.name}}</span>
                    <img src="../../assets/icons/arrow_right_icon.png" alt="arrow-right-icon"/>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    import {defineComponent} from 'vue';

    const Drawer = defineComponent({
        name: 'Drawer',
        props: {
            isOpen: {type: Boolean, default: false, required: true}
        },
        emits: ['toggleIsOpen'],
        setup({isOpen: boolean}, context) {

            const navItems = [
                {name: 'Home', path: '/'},
                {name: 'About', path: '/about'}
            ]

            const handleNavItemClick = path => {
                console.log(path);
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
    .drawer {
        &__overlay {
            background-color: rgba(10, 10, 10, 0.3);
            position: fixed;
            top: 0;
            bottom: 0;
            right: 0;
            left: 0;
            overflow: hidden;

            .drawer__nav {
                background-color: #fcfcfc;
                width: 280px;
                height: 100%;
                overflow: auto;

                .item {
                    border-bottom: 1px solid #e7e7e7;
                    cursor: pointer;

                    > span {
                        color: #333333;
                        font-size: 16px;
                        font-weight: 400;
                    }

                    > img {
                        width: 18px;
                        height: 18px;
                    }

                }

                @media (hover: hover) {
                    .item:hover {
                        > span {
                            color: #666666;
                            text-decoration: underline;
                        }
                    }
                }
            }
        }
    }
</style>