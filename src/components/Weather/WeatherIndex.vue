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
// TODO: 리팩토링 예정
import {computed, ref, Ref} from "vue";
import MyLocation from "@/components/Weather/MyLocation/MyLocation.vue";
import CurrentWeather from "@/components/Weather/CurrentWeather/CurrentWeather.vue";
import Forecast5Days from "@/components/Weather/Forecast5Days/Forecast5Days.vue";
import ForecastChart from "@/components/Weather/Forecast5Days/ForecastChart/ForecastChart.vue";
import AlterModal from "@/components/Modal/AlertModal.vue";
import useAlertModal, {UseAlertModalInterface} from '@/hooks/useAlertModal';
import Dropdown from "@/components/Dropdown/Dropdown.vue";
import cityList from '@/assets/js/city.list.kr';
import {useStore} from "vuex";
import useApi from "@/hooks/useApi";
import repositories from "@/apis";
import {NAMESPACE, actionTypes} from '@/store/modules/weatherModule/weatherModuleTypes';

const API_KEY = import.meta.env.VITE_API_KEY;

const store = useStore();
const currentWeather = computed(() => store.state.weatherModule.currentWeather);
const forecast5Days = computed(() => store.state.weatherModule.forecast5Days);
const {runApi} = useApi();
const selectedCity: Ref<object> = ref({});

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

const findForecast5DaysByCity = async q => {
  const actionName = `${NAMESPACE}/${actionTypes.FORECAST_5_DAYS_ACTION}`;
  const result = await runApi(repositories.weatherRepository.findForecast5DaysByCity, {
    q,
    appId: API_KEY
  }, actionName);
};

const findForecast5DaysByGeographicCoordinates = async (lat, lon) => {
  const actionName = `${NAMESPACE}/${actionTypes.FORECAST_5_DAYS_ACTION}`;
  const result = await runApi(repositories.weatherRepository.findForecast5DaysByGeographicCoordinates, {
    lat,
    lon,
    appId: API_KEY
  }, actionName);
};

const {
  isOpen,
  alertModalTitle,
  alertModalContent,
  openAlertModal,
  closeAlertModal,
}: UseAlertModalInterface = useAlertModal();

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