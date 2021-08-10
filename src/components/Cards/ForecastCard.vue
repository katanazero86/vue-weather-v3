<template>
  <div class="forecast-card">
    <div class="forecast-card__header">
      {{ items[0].dt }}
    </div>
    <div class="forecast-card__body">
      <table>
        <tbody>
        <tr v-for="item in items" :key="item">
          <td>
            <div class="row align-items-center">
              <div class="col-6">
                <span>{{ item.dt_txt }}</span><br/>
                <span> {{ item.weather[0].description }}</span>
              </div>
              <div class="row align-items-center col-6">
                <img :src="`${OPEN_WEATHER_ICONS_BASE_URL}/${item.weather[0].icon}@2x.png`" width="50"
                     height="50"/>
                <span>{{ Math.round((item.main.temp - 273.15).toFixed(1)) }} °C</span>
              </div>
            </div>
          </td>
          <td>
            <p style="text-align: center">풍속 : {{ item.wind.speed }} m/s </p>
          </td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script lang="ts">
    import {defineComponent} from 'vue';

    const OPEN_WEATHER_ICONS_BASE_URL = import.meta.env.VITE_OPEN_WEATHER_ICONS_BASE_URL;

    const ForecastCard = defineComponent({
        name: 'ForecastCard',
        props: {
            items: {type: Array, default: [],}
        },
        setup() {
            return {
                OPEN_WEATHER_ICONS_BASE_URL
            }
        }
    });

    export default ForecastCard
</script>

<style lang="scss" scoped>

  .forecast-card {
    padding: 8px 0;
    width: 100%;

    &__header {
      background-color: rgba(179, 209, 255, 0.45);
      border-top-left-radius: 8px;
      border-top-right-radius: 8px;
      font-size: 13px;
      font-weight: 600;
      padding: 4px;
      color: white;
    }


    &__body {

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
