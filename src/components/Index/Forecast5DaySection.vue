<template>
  <section class="forecast">
    <div class="forecast__header">
      <h2>
        Hourly weather and <br/>forecasts in {{ forecast5Day.city.name }}, {{forecast5Day.city.country}}
      </h2>
    </div>
    <div class="forecast__cards row-wrap align-item-start justify-content-between">
      <template v-for='items in customForecastList' :key="items">
        <ForecastCard :items="items" class="col-12 col-sm-6"/>
      </template>
    </div>
  </section>
</template>

<script lang="ts">
    import {defineComponent, computed} from 'vue';
    import ForecastCard from '@/components/Cards/ForecastCard.vue';

    const Forecast5DaySection = defineComponent({
        name: 'Forecast5DaySection',
        components: {ForecastCard},
        props: {
            forecast5Day: {type: Object, default: {}},
        },
        setup({forecast5Day}) {
            const customForecastList = computed(() => {
                if (forecast5Day !== null && forecast5Day !== {}) {
                    const resultForecastList = [];
                    const targetForecast = {...forecast5Day};
                    const dtTxt = targetForecast.list.map(forecast => forecast.dt_txt.split(' ')[0]);
                    const dtTxtSet = new Set(dtTxt);
                    dtTxtSet.forEach(dtTxt => {
                        const resultForecastFilter = targetForecast.list.filter(forecast => forecast.dt_txt.split(' ')[0] === dtTxt);
                        resultForecastList.push(resultForecastFilter);
                    });
                    return resultForecastList;
                }
                return [];
            });

            return {
                customForecastList
            }
        },
    });

    export default Forecast5DaySection
</script>

<style lang="scss" scoped>
  @import '../../assets/scss/common/variables';
  @import '../../assets/scss/common/mixins';

  .forecast {

    width: 100%;
    max-width: 1024px;
    margin: 0 auto;
    padding-top: 18px;

    &__header {
      > h2 {
        color: $white-color;
      }
    }

    &__cards {

      .col-sm-6:nth-child(odd) {
        padding-right: 4px;
      }

      .col-sm-6:nth-child(even) {
        padding-left: 4px;
      }

      @include responsive(mobile) {
        .col-sm-6:nth-child(odd) {
          padding-right: 0;
        }

        .col-sm-6:nth-child(even) {
          padding-left: 0;
        }
      }

    }
  }
</style>
