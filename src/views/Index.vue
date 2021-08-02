<template>
    <div class="index">
        <router-view/>
    </div>
</template>

<script lang="ts">
    import {defineComponent} from 'vue';

    const Index = defineComponent({
        name: 'Index',
    })
    export default Index
</script>

<style lang="scss" src="../assets/scss/global.scss"/>
<style lang="scss" scoped>

    .index {

    }

</style>