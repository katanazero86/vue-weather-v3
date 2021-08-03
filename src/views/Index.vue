<template>
    <Header />
    <div class="index">
        <router-view/>
    </div>
    <Footer />
</template>

<script lang="ts">
    import {defineComponent} from 'vue';
    import Header from '@/components/Header/Header.vue';
    import Footer from '@/components/Footer/Footer.vue';

    const Index = defineComponent({
        name: 'Index',
        components: {
            Header,
            Footer
        }
    })
    export default Index
</script>

<style lang="scss" src="../assets/scss/global.scss"/>
<style lang="scss" scoped>

    @import '../assets/scss/common/variables';

    .index {
        height: 100%;
        background-color: $dark-color;
    }

</style>
