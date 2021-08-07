<template>
  <div class="icon" @click="$emit('click')">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" :width="width" :height="height" :fill="color">
      <path d="M0 0h24v24H0V0z" fill="none"/>
      <path d="M7 10l5 5 5-5H7z"/>
    </svg>
  </div>
</template>

<script>
    import {defineComponent} from 'vue';

    const DropdownArrowDown = defineComponent({
        name: 'DropdownArrowDown',
        props: {
            width: {type: Number, default: 24},
            height: {type: Number, default: 24},
            color: {type: String, default: '#000000'},
        },
        emits: ['click'],
    })
    export default DropdownArrowDown
</script>

<style lang="scss" src="./Icon.scss"/>
<style lang="scss" scoped>

</style>

