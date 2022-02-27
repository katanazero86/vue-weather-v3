<template>
  <div class="weather-index">
    <MyLocation class="py-3" @handleError="handleError" @geolocationPosition="getGeolocationPosition"/>
    <Dropdown class="py-3" :items="cityList" label="원하시는 도시를 선택해주세요 :)" :selectedItem="selectedCity"
              @select="handleDropdownSelect"/>
    <CurrentWeather :currentWeather="currentWeather" v-if="currentWeather"/>
    <Forecast5Days :forecast5Days="forecast5Days" v-if="forecast5Days"/>
    <ForecastChart :forecast5Days="forecast5Days" v-if="forecast5Days"/>
  </div>
  <AlterModal v-if="isOpen" :title="alertModalTitle" :content="alertModalContent" @close="closeAlertModal"/>
</template>

<script lang="ts" setup>
import {computed, ref, Ref} from "vue";
import MyLocation from "@/components/Weather/MyLocation/MyLocation.vue";
import CurrentWeather from "@/components/Weather/CurrentWeather/CurrentWeather.vue";
import Forecast5Days from "@/components/Weather/Forecast5Days/Forecast5Days.vue";
import ForecastChart from "@/components/Weather/Forecast5Days/ForecastChart/ForecastChart.vue";
import AlterModal from "@/components/Modal/AlertModal.vue";
import useAlertModal from '@/hooks/useAlertModal';
import Dropdown from "@/components/Dropdown/Dropdown.vue";
import cityList from '@/assets/js/city.list.kr';
import {useWeatherStore} from "@/stores/weather-store";
import useApi from "@/hooks/useApi";
import apis from "@/apis";

const API_KEY = import.meta.env.VITE_API_KEY;

const weatherStore = useWeatherStore();
const currentWeather = computed(() => weatherStore.getCurrentWeather);
const forecast5Days = computed(() => weatherStore.getForecast5Days);
const {runApi} = useApi();
const selectedCity: Ref<{ name?: string, country?: string }> = ref({});

const findCurrentWeatherByCity = async q => {
  const apiParams = {
    q,
    appId: API_KEY
  };
  const result = await runApi(apis.weatherApis.findCurrentWeatherByCity, apiParams);
  weatherStore.currentWeatherAction(result);
};

const findCurrentWeatherByGeographicCoordinates = async (lat, lon) => {
  const apiParams = {
    lat,
    lon,
    appId: API_KEY
  };
  const result = await runApi(apis.weatherApis.findCurrentWeatherByGeographicCoordinates, apiParams);
  weatherStore.currentWeatherAction(result);
};

const findForecast5DaysByCity = async q => {
  const apiParams = {
    q,
    appId: API_KEY
  };
  const result = await runApi(apis.weatherApis.findForecast5DaysByCity, apiParams);
  weatherStore.forecast5DaysAction(result);
};

const findForecast5DaysByGeographicCoordinates = async (lat, lon) => {
  const apiParams = {
    lat,
    lon,
    appId: API_KEY
  };
  const result = await runApi(apis.weatherApis.findForecast5DaysByGeographicCoordinates, apiParams);
  weatherStore.forecast5DaysAction(result);
};

const {
  isOpen,
  alertModalTitle,
  alertModalContent,
  openAlertModal,
  closeAlertModal,
} = useAlertModal();

const handleError = ({title, content}) => {
  alertModalTitle.value = title;
  alertModalContent.value = content;
  openAlertModal();
};

const getGeolocationPosition = targetGeolocationPosition => {
  const lat = targetGeolocationPosition?.coords?.latitude;
  const lon = targetGeolocationPosition?.coords?.longitude;
  selectedCity.value = {};
  findCurrentWeatherByGeographicCoordinates(lat, lon);
  findForecast5DaysByGeographicCoordinates(lat, lon);
};

const handleDropdownSelect = targetItem => {
  selectedCity.value = targetItem;
  const q = `${selectedCity.value.name}, ${selectedCity.value.country}`
  findCurrentWeatherByCity(q);
  findForecast5DaysByCity(q);
};

</script>

<style lang="scss" scoped>
.weather-index {
  min-height: 100%;
  padding: 24px 10px;
}

</style>