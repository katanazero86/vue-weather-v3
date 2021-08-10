<template>
  <section class="current-weather">
    <header class="current-weather__header">
      <h2>
        Weather in {{currentWeather.name}}, {{currentWeather.sys.country}}
      </h2>
      <div class="weather">
        <figure>
          <img :src="`${OPEN_WEATHER_ICONS_BASE_URL}/${currentWeather.weather[0].icon}@2x.png`" width="100"
               height="100"/>
          <span class="weather-current-temperature">{{Math.round((currentWeather.main.temp - 273.15).toFixed(1))}} °C</span>
        </figure>
        <p>{{currentWeather.weather[0].main}}</p>
      </div>
    </header>
    <div class="current-weather__body pa-3">
      <div class="weather-item">
        <p class="weather-item__title">풍향(Wind)</p>
        <p class="weather-item__value">{{currentWeather.wind.speed}} m/s | {{currentWeather.wind.deg}} deg</p>
      </div>
      <div class="weather-item">
        <p class="weather-item__title">구름량(Cloudiness)</p>
        <p class="weather-item__value">{{currentWeather.clouds.all}} %</p>
      </div>
      <div class="weather-item">
        <p class="weather-item__title">압력(Pressure)</p>
        <p class="weather-item__value">{{currentWeather.main.pressure}} hpa</p>
      </div>
      <div class="weather-item">
        <p class="weather-item__title">습기(Humidity)</p>
        <p class="weather-item__value">{{currentWeather.main.humidity}} %</p>
      </div>
      <div class="weather-item">
        <p class="weather-item__title">일출(Sunrise)</p>
        <p class="weather-item__value">{{convertUnixTimestampIntoDateFormatting(currentWeather.sys.sunrise) }}</p>
      </div>
      <div class="weather-item">
        <p class="weather-item__title">일몰(Sunset)</p>
        <p class="weather-item__value">{{convertUnixTimestampIntoDateFormatting(currentWeather.sys.sunset) }}</p>
      </div>
      <div class="weather-item">
        <p class="weather-item__title">지리 좌표(Geo coords)</p>
        <p class="weather-item__value">{{`[${currentWeather.coord.lat}, ${currentWeather.coord.lon}]`}}</p>
      </div>
    </div>
  </section>
</template>

<script>
    import {defineComponent} from 'vue';
    import {convertUnixTimestampIntoDateFormatting} from '@/utils/dateUtils';
    const OPEN_WEATHER_ICONS_BASE_URL = import.meta.env.VITE_OPEN_WEATHER_ICONS_BASE_URL;

    const CurrentWeatherSection = defineComponent({
        name: 'CurrentWeatherSection',
        props: {
            currentWeather: {type: Object, default: {}},
        },
        setup() {

            return {
                OPEN_WEATHER_ICONS_BASE_URL,
                convertUnixTimestampIntoDateFormatting,
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

      width: 100%;
      max-width: 550px;
      margin: 0 auto;
      background-color: rgba(179,209,255,.45);
      border-radius: 8px;

      .weather-item {
        padding: 10px;
        display: flex;
        align-items: center;
        justify-content: space-between;

        &__title {
          text-align: center;
          font-size: 14px;
          letter-spacing: -0.3px;
          color: $white-color;
        }

        &__value {
          font-size: 13px;
          font-weight: 500;
          text-align: center;
          color: $dark-color;
        }
      }

      .weather-item:not(:last-child) {
        border-bottom: 1px solid $border-color;
      }

      table {



        thead {
          text-align: center;
          font-size: 14px;
          letter-spacing: -0.3px;
          color: $white-color;
          tr {
            th {
              padding: 10px;
            }
          }
        }

        tbody {
          font-size: 13px;
          font-weight: 500;
          text-align: center;
          color: $dark-color;


          tr {
            td {
              padding: 10px;
            }
          }
        }
      }

    }
  }

</style>
