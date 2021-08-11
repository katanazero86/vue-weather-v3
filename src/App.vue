<template>
  <router-view/>
  <router-view name='spinner'/>
</template>

<script lang="ts">
    import {defineComponent} from 'vue';

    const App = defineComponent({
        name: 'App',
    });

    export default App
</script>

<style lang="scss" src="./assets/scss/global.scss"/>
