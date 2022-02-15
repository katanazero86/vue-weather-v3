<template>
<!--  <div class="index">-->
<!--    <Dropdown class="py-3" :items="cityList" label="원하시는 도시를 선택해주세요 :)" :selectedItem="selectedItem"-->
<!--              @select="handleDropdownSelect"/>-->
<!--    <CurrentWeather :currentWeather="currentWeather" v-if="currentWeather"/>-->
<!--    <template v-if="forecast5Day">-->
<!--      <Forecast5DaySection :forecast5Day="forecast5Day"/>-->
<!--      <ForecastChart :forecast5Day="forecast5Day"/>-->
<!--    </template>-->
<!--  </div>-->
  <div class="index">
    <WeatherIndex />
  </div>
</template>

<script lang="ts">
import {defineComponent, ref, computed, onUnmounted} from 'vue';
import {Ref} from 'vue';
import {useStore} from 'vuex';
import MyLocationSection from '@/components/Index/MyLocationSection.vue';
import Dropdown from '@/components/Dropdown/Dropdown.vue';
import CurrentWeather from '@/components/Index/CurrentWeather.vue';
import Forecast5DaySection from '@/components/Index/Forecast5DaySection.vue';
import ForecastChart from '@/components/Index/ForecastChart/ForecastChart.vue';
import AlertModal from '@/components/Modal/AlertModal.vue';
import useApi from "@/hooks/useApi";
import cityList from '@/assets/js/city.list.kr';
import repositories from '@/apis/index';
import {NAMESPACE, actionTypes} from '@/store/modules/weatherModule/weatherModuleTypes';
import WeatherIndex from "@/components/Weather/WeatherIndex.vue";

const API_KEY = import.meta.env.VITE_API_KEY;

const Index = defineComponent({
  name: 'Index',
  components: {
    WeatherIndex,
    Dropdown,
    CurrentWeather,
    Forecast5DaySection,
    ForecastChart,
    AlertModal,
  },
  setup() {

    const store = useStore();
    const currentWeather = computed(() => store.state.weatherModule.currentWeather);
    const forecast5Day = computed(() => store.state.weatherModule.forecast5Day);
    const {runApi} = useApi();
    const selectedItem: Ref<object> = ref({});

    const findCurrentWeatherByCity = async q => {
      const actionName = `${NAMESPACE}/${actionTypes.CURRENT_WEATHER_ACTION}`;
      const result = await runApi(repositories.weatherRepository.findCurrentWeatherByCity, {
        q,
        appId: API_KEY
      }, actionName);
    };

    const findCurrentWeatherByGeographicCoordinates = async (lat, lon) => {
      const actionName = `${NAMESPACE}/${actionTypes.CURRENT_WEATHER_ACTION}`;
      const result = await runApi(repositories.weatherRepository.findCurrentWeatherByGeographicCoordinates, {
        lat,
        lon,
        appId: API_KEY
      }, actionName);
    };

    const findForecast5DayByCity = async q => {
      const actionName = `${NAMESPACE}/${actionTypes.FORECAST_5_DAY_ACTION}`;
      const result = await runApi(repositories.weatherRepository.findForecast5DayByCity, {
        q,
        appId: API_KEY
      }, actionName);
    };

    const findForecast5DayByGeographicCoordinates = async (lat, lon) => {
      const actionName = `${NAMESPACE}/${actionTypes.FORECAST_5_DAY_ACTION}`;
      const result = await runApi(repositories.weatherRepository.findForecast5DayByGeographicCoordinates, {
        lat,
        lon,
        appId: API_KEY
      }, actionName);

    }

    const handleDropdownSelect = targetItem => {
      selectedItem.value = targetItem;
      const q = `${selectedItem.value.name}, ${selectedItem.value.country}`
      findCurrentWeatherByCity(q);
      findForecast5DayByCity(q);
    };

    onUnmounted(() => {
      store.dispatch(`${NAMESPACE}/${actionTypes.INIT_STATES_ACTION}`);
    });

    return {
      cityList,
      selectedItem,
      handleDropdownSelect,
      currentWeather,
      forecast5Day
    }
  }
});

export default Index
</script>

<style lang="scss" scoped>

@import '../assets/scss/common/variables';

.index {
  min-height: 100%;
  padding: 24px 10px;
}

</style>
