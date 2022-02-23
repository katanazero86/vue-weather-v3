<template>
  <div class="index">
    <WeatherIndex/>
  </div>
</template>

<script lang="ts" setup>
import WeatherIndex from "@/components/Weather/WeatherIndex.vue";
</script>

<style lang="scss" scoped>

.index {
  min-height: 100%;
  padding: 24px 10px;
}

</style>
