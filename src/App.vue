<template>
    <Header/>
        <router-view/>
    <Footer/>
</template>

<script lang="ts">
    import {defineComponent} from 'vue';
    import Header from '@/components/Header/Header.vue';
    import Footer from '@/components/Footer/Footer.vue';

    const App = defineComponent({
        name: 'App',
        components: {
            Header,
            Footer
        }
    });

    export default App
</script>
