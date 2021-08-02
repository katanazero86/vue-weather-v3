<template>
    <router-view/>
    <img alt="Vue logo" src="./assets/logo.png"/>
    <HelloWorld msg="Hello Vue 3.0 + Vite"/>
    <hr/>
    <router-link to="/test">Test 페이지 이동</router-link>
</template>

<script lang="ts">
    import {defineComponent} from 'vue';
    import HelloWorld from './components/HelloWorld.vue'

    const App = defineComponent({
        name: 'App',
        components: {
            HelloWorld
        }
    });

    export default App
</script>
