<template>
  <Header v-once/>
  <router-view/>
  <Footer v-once/>
</template>

<script lang="ts">
    import {defineComponent} from 'vue';
    import Header from '@/components/Header/Header.vue';
    import Footer from '@/components/Footer/Footer.vue'

    const DefaultLayout = defineComponent({
        name: 'DefaultLayout',
        components: {
            Header,
            Footer,
        },
    });

    export default DefaultLayout
</script>

<style lang="scss" scoped>

</style>
