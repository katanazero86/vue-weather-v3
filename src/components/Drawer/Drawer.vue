<template>
    <div class="drawer">
        <div class="drawer__overlay">
            <ul class="drawer__nav">
                <li class="item">
                    <span>Home</span>
                    <img src="../../assets/icons/arrow_right_icon.png" alt="arrow-right-icon"/>
                </li>
                <li class="item">
                    <span>About</span>
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
        setup() {
            return {}
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

            display: flex;
            justify-content: flex-end;

            .drawer__nav {
                background-color: #fcfcfc;
                width: 250px;
                height: 100%;
                overflow: auto;
                padding: 12px 8px;

                .item {
                    border-bottom: 1px solid #e7e7e7;
                    cursor: pointer;
                    padding: 10px 0;

                    display: flex;
                    align-items: center;
                    justify-content: space-between;

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