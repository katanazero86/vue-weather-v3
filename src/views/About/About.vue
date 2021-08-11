<template>
  <div class="about">
    about 작업예정..
  </div>
</template>

<script lang="ts">
    import {defineComponent} from 'vue';

    const About = defineComponent({
        name: 'About',
    });

    export default About
</script>

<style lang="scss" scoped>
  @import '../../assets/scss/common/variables';

  .about {
    min-height: 100%;
    background-color: $dark-color;
    padding: 24px 10px;
  }
</style>
