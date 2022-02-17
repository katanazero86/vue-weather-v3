<template>
  <Header v-once/>
  <router-view/>
  <Footer v-once/>
</template>

<script lang="ts" setup>
import Header from '@/components/Header/Header.vue';
import Footer from '@/components/Footer/Footer.vue'
</script>

<style lang="scss" scoped>

</style>
