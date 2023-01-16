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
import {computed, reactive, ref, Ref, toRef, watch, watchEffect} from "vue";
import MyLocation from "@/components/Weather/MyLocation/MyLocation.vue";
import CurrentWeather from "@/components/Weather/CurrentWeather/CurrentWeather.vue";
import Forecast5Days from "@/components/Weather/Forecast5Days/Forecast5Days.vue";
import ForecastChart from "@/components/Weather/Forecast5Days/ForecastChart/ForecastChart.vue";
import AlterModal from "@/components/Modal/AlertModal.vue";
import useAlertModal from '@/hooks/useAlertModal';
import Dropdown from "@/components/Dropdown/Dropdown.vue";
import cityList from "@/assets/js/city-list-kr";
import {useWeatherStore} from "@/stores/weather.store";
import {
  useFindCurrentWeatherByCity,
  useFindCurrentWeatherByGeographicCoordinates,
  useFindForecast5DaysByCity,
  useFindForecast5DaysByGeographicCoordinates
} from "@/hooks/useWeatherRepository.hooks";
import {AxiosError, AxiosResponse} from "axios";
import {useRootStore} from "@/stores";

const API_KEY = import.meta.env.VITE_API_KEY;

const selectedCity: Ref<{ name?: string, country?: string }> = ref({});
const q = ref('');
const lat = ref('');
const lon = ref('');
const enableStates = reactive({
  isQuery: ref(false),
  isGeo: ref(false),
})

const findCurrentWeatherByCitySuccess = (result: AxiosResponse) => {
  if (result.status === 200) {
    weatherStore.currentWeatherAction({...result.data});
  }
};
const findCurrentWeatherByCityError = (err: AxiosError) => {
  console.error('findCurrentWeatherByCityError', err);
};
const findCurrentWeatherByCityQuery = useFindCurrentWeatherByCity(findCurrentWeatherByCitySuccess, findCurrentWeatherByCityError, {
  q,
  appId: API_KEY,
  isEnable: toRef(enableStates, "isQuery"),
});

const findForecast5DaysByCitySuccess = (result: AxiosResponse) => {
  if (result.status === 200) {
    weatherStore.forecast5DaysAction({...result.data});
  }
};
const findForecast5DaysByCityError = (err: AxiosError) => {
  console.error('findForecast5DaysByCityError', err);
}
const findForecast5DaysByCityQuery = useFindForecast5DaysByCity(findForecast5DaysByCitySuccess, findForecast5DaysByCityError, {
  q,
  appId: API_KEY,
  isEnable: toRef(enableStates, "isQuery"),
});

const findCurrentWeatherByGeographicCoordinatesSuccess = (result: AxiosResponse) => {
  if (result.status === 200) {
    weatherStore.currentWeatherAction({...result.data});
  }
};
const findCurrentWeatherByGeographicCoordinatesError = (err: AxiosError) => {
  console.error('findCurrentWeatherByGeographicCoordinatesError', err);
}
const findCurrentWeatherByGeographicCoordinatesQuery = useFindCurrentWeatherByGeographicCoordinates(findCurrentWeatherByGeographicCoordinatesSuccess, findCurrentWeatherByGeographicCoordinatesError, {
  lat,
  lon,
  appId: API_KEY,
  isEnable: toRef(enableStates, "isGeo"),
});

const findForecast5DaysByGeographicCoordinatesSuccess = (result: AxiosResponse) => {
  if (result.status === 200) {
    weatherStore.forecast5DaysAction({...result.data});
  }
};
const findForecast5DaysByGeographicCoordinatesError = (err: AxiosError) => {
  console.error('findForecast5DaysByGeographicCoordinatesError', err);
}
const findForecast5DaysByGeographicCoordinatesQuery = useFindForecast5DaysByGeographicCoordinates(findForecast5DaysByGeographicCoordinatesSuccess, findForecast5DaysByGeographicCoordinatesError, {
  lat,
  lon,
  appId: API_KEY,
  isEnable: toRef(enableStates, "isGeo"),
});

const rootStore = useRootStore();
watch(() => findCurrentWeatherByCityQuery.isFetching.value, (value, oldValue, onCleanup) => {
  if (value) {
    rootStore.onIsLoadingAction();
  } else {
    rootStore.offIsLoadingAction();
  }
});
watch(() => findForecast5DaysByCityQuery.isFetching.value, (value, oldValue, onCleanup) => {
  if (value) {
    rootStore.onIsLoadingAction();
  } else {
    rootStore.offIsLoadingAction();
  }
});
watch(() => findCurrentWeatherByGeographicCoordinatesQuery.isFetching.value, (value, oldValue, onCleanup) => {
  if (value) {
    rootStore.onIsLoadingAction();
  } else {
    rootStore.offIsLoadingAction();
  }
});
watch(() => findForecast5DaysByGeographicCoordinatesQuery.isFetching.value, (value, oldValue, onCleanup) => {
  if (value) {
    rootStore.onIsLoadingAction();
  } else {
    rootStore.offIsLoadingAction();
  }
});

const weatherStore = useWeatherStore();
const currentWeather = computed(() => weatherStore.getCurrentWeather);
const forecast5Days = computed(() => weatherStore.getForecast5Days);

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
  lat.value = targetGeolocationPosition?.coords?.latitude;
  lon.value = targetGeolocationPosition?.coords?.longitude;
  selectedCity.value = {};
  q.value = '';
  enableStates.isQuery = false;
  enableStates.isGeo = true;
};

const handleDropdownSelect = targetItem => {
  selectedCity.value = targetItem;
  q.value = `${selectedCity.value.name}, ${selectedCity.value.country}`;
  enableStates.isGeo = false;
  enableStates.isQuery = true;
};

</script>

<style lang="scss" scoped>
.weather-index {
  min-height: 100%;
  padding: 24px 10px;
}

</style>