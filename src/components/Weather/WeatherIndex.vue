<template>
  <div class="weather-index">
    <MyLocation class="py-3" @handleError="handleError" @geolocationPosition="getGeolocationPosition"/>
    <Dropdown class="py-3" :items="cityList" label="원하시는 도시를 선택해주세요 :)" :selectedItem="selectedCity"
              @select="handleDropdownSelect"/>
  </div>
  <AlertModal v-if="isOpen" :title="alertModalTitle" :content="alertModalContent" @close="closeAlertModal"/>
</template>

<script lang="ts">
import {defineComponent, ref, Ref} from "vue";
import MyLocation from "@/components/Weather/MyLocation/MyLocation.vue";
import AlterModal from "@/components/Modal/AlertModal.vue";
import useAlertModal, {UseAlertModalInterface} from '@/hooks/useAlertModal';
import Dropdown from "@/components/Dropdown/Dropdown.vue";
import cityList from '@/assets/js/city.list.kr';

const WeatherIndex = defineComponent({
  components: {Dropdown, AlterModal, MyLocation},
  setup() {

    const selectedCity: Ref<object> = ref({});

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
      // findCurrentWeatherByCity(q);
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
      handleDropdownSelect
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