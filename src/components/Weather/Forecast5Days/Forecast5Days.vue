<template>
  <div class="forecast">
    <div class="forecast__header">
      <h2>
        Hourly weather and <br/>forecasts in {{ forecast5Days.city.name }}, {{ forecast5Days.city.country }}
      </h2>
    </div>
    <div class="forecast__cards row-wrap align-item-start justify-content-between">
      <template v-for='items in forecastList' :key="items">
        <ForecastCard :items="items" class="col-12 col-sm-6"/>
      </template>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {computed} from "vue";
import ForecastCard from "@/components/Weather/Forecast5Days/ForecastCard/ForecastCard.vue";

interface Forecast5DaysListInterface {
  dt: number;
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    sea_level: number;
    grnd_level: number;
    humidity: number;
    temp_kf: number;
  };
  weather: {
    id: number | string;
    main: string;
    description: string;
    icon: string;
  }[];
  clouds: {
    all: number;
  };
  wind: {
    speed: number;
    deg: number;
    gust: number;
  };
  visibility: number;
  pop: number;
  rain: {
    '3h'?: number;
  };
  snow: {
    '3h'?: number;
  }
  sys: {
    pod: string;
  };
  dt_txt: string;
}

interface Forecast5DaysPropsInterface {
  forecast5Days?: null | {
    cod: string,
    message: number | string,
    cnt: number,
    list: Forecast5DaysListInterface[],
    city: {
      id: number | string;
      name: string;
      coord: {
        lat: number;
        lon: number;
      };
      country: string;
    }
  }
}

const props = withDefaults(defineProps<Forecast5DaysPropsInterface>(), {
  forecast5Days: null
});

const forecastList = computed(() => {
  if (props.forecast5Days !== null && props.forecast5Days !== undefined) {
    const resultForecastList = [];
    const targetForecast = {...props.forecast5Days};
    const dtTxt = targetForecast?.list.map(forecast => forecast.dt_txt.split(' ')[0]);
    const dtTxtSet = dtTxt && new Set(dtTxt);
    dtTxtSet.forEach(dtTxt => {
      const resultForecastFilter = targetForecast.list.filter(forecast => forecast.dt_txt.split(' ')[0] === dtTxt);
      resultForecastList.push(resultForecastFilter);
    });
    return resultForecastList;
  }
  return [];
});


</script>

<style lang="scss" scoped>
@import '../../../assets/scss/common/mixins';

.forecast {

  width: 100%;
  max-width: 1024px;
  margin: 0 auto;
  padding-top: 18px;

  &__header {
    > h2 {
      color: var(--forecasts-title-color);
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
