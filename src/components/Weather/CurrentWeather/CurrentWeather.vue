<template>
  <section class="current-weather">
    <header class="current-weather__header">
      <h2>
        Weather in {{ currentWeather.name }}, {{ currentWeather.sys.country }}
      </h2>
      <div class="weather">
        <figure>
          <img :src="getIconUrl()" width="100" height="100"/>
          <span class="weather-current-temperature">{{ getTemperature() }} °C</span>
        </figure>
        <p>{{ currentWeather.weather[0].main }}</p>
      </div>
    </header>
    <div class="current-weather__body pa-6">
      <div class="weather-item">
        <p class="weather-item__title">풍속(Wind)</p>
        <p class="weather-item__value">{{ currentWeather.wind.speed }} m/s | {{ currentWeather.wind.deg }} deg</p>
      </div>
      <div class="weather-item">
        <p class="weather-item__title">구름량(Cloudiness)</p>
        <p class="weather-item__value">{{ currentWeather.clouds.all }} %</p>
      </div>
      <div class="weather-item">
        <p class="weather-item__title">압력(Pressure)</p>
        <p class="weather-item__value">{{ currentWeather.main.pressure }} hpa</p>
      </div>
      <div class="weather-item">
        <p class="weather-item__title">습기(Humidity)</p>
        <p class="weather-item__value">{{ currentWeather.main.humidity }} %</p>
      </div>
      <div class="weather-item">
        <p class="weather-item__title">일출(Sunrise)</p>
        <p class="weather-item__value">{{ dateUtils.convertUnixTimestampIntoDateFormatting(currentWeather.sys.sunrise) }}</p>
      </div>
      <div class="weather-item">
        <p class="weather-item__title">일몰(Sunset)</p>
        <p class="weather-item__value">{{ dateUtils.convertUnixTimestampIntoDateFormatting(currentWeather.sys.sunset) }}</p>
      </div>
      <div class="weather-item">
        <p class="weather-item__title">지리 좌표(Geo coords)</p>
        <p class="weather-item__value">{{ `[${currentWeather.coord.lat}, ${currentWeather.coord.lon}]` }}</p>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import {dateUtils} from '@/utils/date-utils';
const OPEN_WEATHER_ICONS_BASE_URL = import.meta.env.VITE_OPEN_WEATHER_ICONS_BASE_URL;
interface CurrentWeatherInterface {
  currentWeather?: null | {
    coord: {
      lon: number,
      lat: number,
    };
    weather: [
      {
        id: number | string,
        main: string,
        description: string,
        icon: string
      }
    ];
    base: string;
    main: {
      temp: number,
      feels_like: number,
      temp_min: number,
      temp_max: number,
      pressure: number,
      humidity: number
    },
    visibility: number;
    wind: {
      speed: number,
      deg: number
    };
    clouds: {
      all: number
    };
    dt: number,
    sys: {
      type: number,
      id: number,
      message: number,
      country: string,
      sunrise: number,
      sunset: number
    };
    timezone: number;
    id: number | string;
    name: string;
    cod: number;
  }
}

const props = withDefaults(defineProps<CurrentWeatherInterface>(), {
  currentWeather: null
});

const getIconUrl = (): string => {
  const weatherIcon = props.currentWeather?.weather[0].icon;
  if (weatherIcon) return `${OPEN_WEATHER_ICONS_BASE_URL}/${weatherIcon}@2x.png`;
  return `${OPEN_WEATHER_ICONS_BASE_URL}/01d@2x.png`;
};

const getTemperature = (): number => {
  const temp = props.currentWeather?.main.temp;
  if (temp !== undefined) return parseFloat((props.currentWeather?.main.temp - 273.15).toFixed(1));
  return 0;
};

</script>

<style lang="scss" scoped>

.current-weather {

  width: 100%;
  max-width: 1024px;
  margin: 0 auto;
  padding-top: 18px;

  &__header {
    > h2 {
      color: var(--current-title-color);
    }

    .weather {
      text-align: center;
      color: var(--current-status-color);

      > figure {
        padding: 8px;
        margin: 0;
      }
    }
  }

  &__body {

    width: 100%;
    max-width: 600px;
    margin: 0 auto;
    background-color: var(--weather-background);
    border-radius: 20px;

    .weather-item {
      padding: 10px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-weight: 500;

      &__title {
        text-align: center;
        font-size: 14px;
        letter-spacing: -0.3px;
        color: var(--current-item-color);
      }

      &__value {
        font-size: 13px;
        text-align: center;
        color: var(--current-value-color);
      }
    }

    .weather-item:not(:last-child) {
      border-bottom: 1px solid var(--border-color);
    }

    table {

      thead {
        text-align: center;
        font-size: 14px;
        letter-spacing: -0.3px;

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
