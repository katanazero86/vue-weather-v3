<template>
  <section class="forecast">

  </section>
</template>

<script lang="ts">
    import {defineComponent} from 'vue';

    const Forecast5DaySection = defineComponent({
        name: 'Forecast5DaySection',
        props: {
            forecast5Day: {type: Object, default: {}},
        },
        setup(props) {
            console.log(props.forecast5Day);
        }
    });

    export default Forecast5DaySection
</script>

<style lang="scss" scoped>
  .forecast {

  }
</style>
