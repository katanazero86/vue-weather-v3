<template>
  <div class="forecast-card">
    <div class="forecast-card__header pa-6">
      {{ items[0].dt_txt.split(' ')[0] }}
    </div>
    <div class="forecast-card__body">
      <table>
        <tbody>
        <tr v-for="item in items" :key="item">
          <td class="pa-6">
            <div class="row align-items-center">
              <div class="col-6">
                <span>{{ item.dt_txt }}</span><br/>
                <span> {{ item.weather[0].description }}</span>
              </div>
              <div class="row align-items-center col-6">
                <img :src="`${OPEN_WEATHER_ICONS_BASE_URL}/${item.weather[0].icon}@2x.png`" width="50"
                     height="50"/>
                <span>{{ (item.main.temp - 273.15).toFixed(1) }} °C</span>
              </div>
            </div>
          </td>
          <td class="td-wind pa-6">
            <p>풍속 : {{ item.wind.speed }} m/s </p>
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
    background-color: var(--forecasts-header-background);
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    font-size: 13px;
    font-weight: 600;
    color: var(--forecasts-header-color);
  }

  &__body {

    .forecast-temp-badge {
      background-color: #4e4d4a;
      border-radius: 12px;
      color: white;
    }
  }

  table {
    background: var(--forecasts-background);
    height: 100%;
    width: 100%;
    font-size: 13.5px;
    letter-spacing: -0.5px;
    border-collapse: collapse;
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
    color: #303030;

    tr {
      width: 100%;
      border-bottom: 1px solid var(--border-color);
    }

    tr:last-child {
      border-bottom: none;
    }

    td {
      border-right: 1px solid var(--border-color);
    }

    td:last-child {
      border-right: none;
    }

    .td-wind {
      text-align: center;
    }

  }
}
</style>
