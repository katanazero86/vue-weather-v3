<template>
  <div class="weather-index">
    <MyLocation class="py-3" @handleError="handleError" @geolocationPosition="getGeolocationPosition"/>
    <Dropdown class="py-3" :items="cityList" label="원하시는 도시를 선택해주세요 :)" :selectedItem="selectedCity"
              @select="handleDropdownSelect"/>
    <CurrentWeather :currentWeather="currentWeather" v-if="currentWeather" />
  </div>
  <AlterModal v-if="isOpen" :title="alertModalTitle" :content="alertModalContent" @close="closeAlertModal"/>
</template>

<script lang="ts">
import {computed, defineComponent, ref, Ref} from "vue";
import MyLocation from "@/components/Weather/MyLocation/MyLocation.vue";
import CurrentWeather from "@/components/Weather/CurrentWeather/CurrentWeather.vue";
import AlterModal from "@/components/Modal/AlertModal.vue";
import useAlertModal, {UseAlertModalInterface} from '@/hooks/useAlertModal';
import Dropdown from "@/components/Dropdown/Dropdown.vue";
import cityList from '@/assets/js/city.list.kr';
import {useStore} from "vuex";
import useApi from "@/hooks/useApi";
import repositories from "@/apis";
import {NAMESPACE, actionTypes} from '@/store/modules/weatherModule/weatherModuleTypes';
const API_KEY = import.meta.env.VITE_API_KEY;

const WeatherIndex = defineComponent({
  components: {CurrentWeather, Dropdown, AlterModal, MyLocation},
  setup() {

    const store = useStore();
    const currentWeather = computed(() => store.state.weatherModule.currentWeather);
    const forecast5Day = computed(() => store.state.weatherModule.forecast5Day);
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
      // selectedCity.value = {};
      // findCurrentWeatherByGeographicCoordinates(lat, lon);
      // findForecast5DayByGeographicCoordinates(lat, lon);
    };

    const handleDropdownSelect = targetItem => {
      selectedCity.value = targetItem;
      const q = `${selectedCity.value.name}, ${selectedCity.value.country}`
      findCurrentWeatherByCity(q);
      // findForecast5DayByCity(q);
    };

    return {
      handleError,
      getGeolocationPosition,
      isOpen,
      alertModalTitle,
      alertModalContent,
      openAlertModal,
      closeAlertModal,
      cityList,
      selectedCity,
      handleDropdownSelect,
      currentWeather
    }
  }
});

export default WeatherIndex

</script>

<style lang="scss" scoped>
.weather-index {
  min-height: 100%;
  padding: 24px 10px;
}

</style>