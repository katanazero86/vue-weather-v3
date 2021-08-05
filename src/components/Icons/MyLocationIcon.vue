<template>
  <div class="icon pa-3" @click="$emit('click')">
    <img src="../../assets/icons/my_location_icon.png" alt="my-location" :width="width" :height="height"/>
  </div>
</template>

<script lang="ts">
    import {defineComponent} from 'vue';

    const MyLocationIcon = defineComponent({
        name: 'MyLocationIcon',
        props: {
            width: {type: Number, default: 20,},
            height: {type: Number, default: 20,},
        },
        emits: ['click'],
    })

    export default MyLocationIcon
</script>

<style lang="scss" src="./Icon.scss"/>
<style lang="scss" scoped>

</style>
