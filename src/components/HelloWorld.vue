<template>
    <p>
        <span>scss test</span>
    </p>
    <h1>{{ msg }}</h1>
    <button @click="count++">count is: {{ count }}</button>
    <p>Edit <code>components/HelloWorld.vue</code> to test hot module replacement.</p>
</template>

<script lang="ts">
    import {defineComponent, ref} from 'vue';

    const HelloWorld = defineComponent({
        name: 'HelloWorld',
        props: {
            msg: {type: String, default: '', required: false}
        },
        setup() {
            const count = ref(0);
            return {
                count
            }
        },
    })

    export default HelloWorld
</script>

<style lang="scss" scoped>
    p {
        span {
            font-size: 48px;
        }
    }
</style>