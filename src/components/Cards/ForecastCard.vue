<template>
  <div class="col-6 col-xs-12 forecast-card">
    <div class="forecast-card__body">
      <div class="forecast-card-header">
        {{ props.forecastList[0].dt }}
      </div>
      <table>
        <tbody>
        <tr v-for="forecast in forecastList" :key="forecast">
          <td>
            <div class="flex-layout-nowrap align-item-center">
              <div class="col-6">
                <span>{{ forecast.dt_txt }}</span><br/>
                <span> {{forecast.weather[0].description}}</span>
              </div>
              <div class="flex-layout-nowrap align-item-center col-6">
                <img :src="`${props.openWeatherIconBaseUrlState}/${forecast.weather[0].icon}@2x.png`" width="50"
                     height="50"/>
                <span>{{(forecast.main.temp - 273.15).toFixed(1) }} °C</span>
              </div>
            </div>
          </td>
          <td>
            <p style="text-align: center">풍속 : {{forecast.wind.speed}} m/s </p>
          </td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script lang="ts">
    import {defineComponent} from 'vue';

    const ForecastCard = defineComponent({
        name: 'ForecastCard',
        forecastList: {type: Array, default: [],},
    });

    export default ForecastCard
</script>

<style lang="scss" scoped>

  .forecast-card {
    padding: 8px 0;
    width: 100%;
    max-width: 485px;
    @media all and (max-width: 1024px) {
      max-width: none;
    }

    &__body {
      .forecast-card-header {
        background-color: rgba(179, 209, 255, 0.45);
        border-top-left-radius: 8px;
        border-top-right-radius: 8px;
        font-size: 13px;
        font-weight: 600;
        padding: 4px;
        color: white;
      }

      .forecast-temp-badge {
        background-color: #4e4d4a;
        border-radius: 12px;
        color: white;
        padding: 2px 4px;
      }
    }

    table {
      background: rgba(242, 245, 255, 0.85);
      height: 100%;
      width: 100%;
      font-size: 13px;
      letter-spacing: -0.2px;
      border-collapse: collapse;
      border-bottom-left-radius: 8px;
      border-bottom-right-radius: 8px;
      color: #303030;
      padding: 4px;

      tr {
        width: 100%;
        border-bottom: 1px solid #c8d0de;
      }

      tr:last-child {
        border-bottom: none;
      }

      td {
        padding: 4px;
        border-right: 1px solid #c8d0de;
      }

      td:last-child {
        border-right: none;
      }
    }
  }
</style>
