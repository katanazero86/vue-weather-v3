<template>
  <div class="icon" @click="$emit('click')">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" :width="width" :height="height" :fill="color">
      <path d="M0 0h24v24H0V0z" fill="none"/>
      <path d="M7 14l5-5 5 5H7z"/>
    </svg>
  </div>
</template>

<script lang="ts" setup>
interface DropdownArrowUpPropsInterface {
  width?: number | string;
  height?: number | string;
  color?: string;
}

const props = withDefaults(defineProps<DropdownArrowUpPropsInterface>(), {
  width: 24,
  height: 24,
  color: '#000000'
});

const emit = defineEmits(['click']);
</script>

<style lang="scss" src="./Icon.scss"/>
<style lang="scss" scoped>

</style>

