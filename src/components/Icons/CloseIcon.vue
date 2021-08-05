<template>
  <div class="icon" @click="$emit('click')">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17 17" :width="width" :height="height" :color="color">
      <g fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round">
        <g stroke="currentColor">
          <path d="M0 0l15 15L0 0zM15 0L0 15 15 0z" transform="translate(-1150 -347) translate(1151 348)"/>
        </g>
      </g>
    </svg>
  </div>
</template>

<script>

    import {defineComponent} from 'vue';

    const CloseIcon = defineComponent({
        name: 'CloseIcon',
        props: {
            width: {type: Number, default: 15},
            height: {type: Number, default: 15},
            color: {type: String, default: '#4A4A4A'},
        },
        emits: ['click'],
    });
    export default CloseIcon
</script>

<style lang="scss" src="./Icon.scss"/>
<style lang="scss" scoped>

</style>
