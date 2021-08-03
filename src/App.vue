<template>
    <!--    <img alt="Vue logo" src="./assets/logo.png"/>-->
    <!--    <HelloWorld msg="Hello Vue 3.0 + Vite"/>-->
    <!--    <hr/>-->
    <!--    <router-link to="/test">Test 페이지 이동</router-link>-->
    <Header/>

    <div class="row-wrap align-items-center">
        <div class="col-6 col-sm-12">
            test 6
        </div>
        <div class="col-6 col-sm-12">
            test 6
        </div>
    </div>
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
