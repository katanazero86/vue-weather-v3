<template>
    <div class="test row-wrap align-items-center">
        <div class="col-6 col-sm-12">
            test 6
        </div>
        <div class="col-6 col-sm-12">
            test 6
        </div>
    </div>
</template>

<script lang="ts">
    import {defineComponent} from 'vue';

    const Test = defineComponent({
        name: 'Test',
        setup() {
            return {}
        },
    })
    export default Test
</script>

<style lang="scss" scoped>

    @import '../assets/scss/common/variables';

    .test {
        height: 100%;
        background-color: $dark-color;
    }
</style>
