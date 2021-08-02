<template>
    <!--    <img alt="Vue logo" src="./assets/logo.png"/>-->
    <!--    <HelloWorld msg="Hello Vue 3.0 + Vite"/>-->
    <!--    <hr/>-->
    <!--    <router-link to="/test">Test 페이지 이동</router-link>-->
    <Header/>
</template>

<script lang="ts">
    import {defineComponent} from 'vue';
    // import HelloWorld from './components/HelloWorld.vue';
    import Header from './components/Header/Header.vue';

    const App = defineComponent({
        name: 'App',
        components: {
            // HelloWorld,
            Header,
        }
    });

    export default App
</script>
