<template>
  <section class="current-weather">
    <header class="current-weather__header">
      <h2>
        Asia/Seoul <br/>
        Weather in {{currentWeather.name}}
      </h2>
      <div class="weather">
        <figure>
          <img :src="`${OPEN_WEATHER_ICONS_BASE_URL}/${currentWeather.weather[0].icon}@2x.png`" width="100"
               height="100"/>
          <span class="weather-current-temperature">{{(currentWeather.main.temp - 273.15).toFixed(1)}} °C</span>
        </figure>
        <p>{{currentWeather.weather[0].main}}</p>
      </div>
    </header>
    <div class="current-weather__body">

    </div>
  </section>
</template>

<script>
    import {defineComponent} from 'vue';
    const OPEN_WEATHER_ICONS_BASE_URL = import.meta.env.VITE_OPEN_WEATHER_ICONS_BASE_URL;

    const CurrentWeatherSection = defineComponent({
        name: 'CurrentWeatherSection',
        props: {
            currentWeather: {type: Object, default: {}},
        },
        setup() {

            return {
                OPEN_WEATHER_ICONS_BASE_URL,
            }
        }
    });
    export default CurrentWeatherSection
</script>

<style lang="scss" scoped>
  @import '../../assets/scss/common/variables';

  .current-weather {

    width: 100%;
    max-width: 1024px;
    margin: 0 auto;
    padding-top: 18px;

    &__header {
      > h2 {
        color: $white-color;
      }

      .weather {
        text-align: center;
        color: $white-color;

        > figure {
          padding: 8px;
          margin: 0;
        }
      }
    }



    &__body {

    }
  }

</style>
