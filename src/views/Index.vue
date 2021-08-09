<template>
  <div class="index">
    <MyLocationSection class="py-3" @handleError="handleError" @geolocationPosition="getGeolocationPosition"/>
    <Dropdown class="py-3" :items="cityList" label="원하시는 도시를 선택해주세요 :)" :selectedItem="selectedItem"
              @select="handleDropdownSelect"/>
    <CurrentWeatherSection :currentWeather="currentWeather" v-if="currentWeather"/>
  </div>
  <AlertModal v-if="isOpen" :title="alertModalTitle" :content="alertModalContent" @close="closeIsOpen"/>
</template>

<script lang="ts">
    import {defineComponent, ref, computed} from 'vue';
    import {Ref} from 'vue';
    import {useStore} from 'vuex';
    import MyLocationSection from '@/components/Index/MyLocationSection.vue';
    import Dropdown from '@/components/Dropdown/Dropdown.vue';
    import CurrentWeatherSection from '@/components/Index/CurrentWeatherSection.vue';
    import AlertModal from '@/components/Modal/AlertModal.vue';
    import useAlertModal, {UseAlertModalInterface} from '@/customHooks/useAlertModal';
    import useApiIsLoading from "@/customHooks/useApiIsLoading";
    import cityList from '@/assets/js/city.list.kr';
    import repositories from '@/repositories/index';
    import {NAMESPACE, actionTypes} from '@/store/modules/weatherModule/weatherModuleTypes';

    const API_KEY = import.meta.env.VITE_API_KEY;

    const Index = defineComponent({
        name: 'Index',
        components: {
            MyLocationSection,
            Dropdown,
            CurrentWeatherSection,
            AlertModal,
        },
        setup() {

            const store = useStore();
            const currentWeather = computed(() => store.state.weatherModule.currentWeather);
            const forecast5Day = computed(() => store.state.weatherModule.forecast5Day);
            const {onIsLoading, offIsLoading} = useApiIsLoading();
            const selectedItem: Ref<object> = ref({});

            const {
                isOpen,
                openIsOpen,
                closeIsOpen,
                alertModalTitle,
                setAlertModalTitle,
                alertModalContent,
                setAlertModalContent,
                initTitleAndContent,
            }: UseAlertModalInterface = useAlertModal();

            const handleError = ({title, content}) => {
                alertModalTitle.value = title;
                alertModalContent.value = content;
                openIsOpen();
            };
            const getGeolocationPosition = targetGeolocationPosition => {
                const lat = targetGeolocationPosition?.coords?.latitude;
                const lon = targetGeolocationPosition?.coords?.longitude;
                findCurrentWeatherByGeographicCoordinates(lat, lon);
            }

            const findCurrentWeatherByGeographicCoordinates = async (lat, lon) => {
                onIsLoading();
                const result = await repositories.weatherRepository.findCurrentWeatherByGeographicCoordinates({
                    lat,
                    lon,
                    appId: API_KEY,
                }).catch(error => {
                    console.log(error.response.status, error.response.data?.message);
                    offIsLoading();
                });

                if (result.status === 200) {
                    const responseData = {...result.data};
                    store.dispatch(`${NAMESPACE}/${actionTypes.CURRENT_WEATHER_ACTION}`, responseData);
                    selectedItem.value = {};
                } else {

                }

                offIsLoading();
            };

            const findCurrentWeatherByCity = async (q) => {
                onIsLoading();
                const result = await repositories.weatherRepository.findCurrentWeatherByCity({
                    q,
                    appId: API_KEY,
                }).catch(error => {
                    console.log(error.response.status, error.response.data?.message);
                    offIsLoading();
                });

                if (result.status === 200) {
                    const responseData = {...result.data};
                    store.dispatch(`${NAMESPACE}/${actionTypes.CURRENT_WEATHER_ACTION}`, responseData);
                } else {

                }

                offIsLoading();
            }

            const handleDropdownSelect = targetItem => {
                selectedItem.value = targetItem;
                const q = `${selectedItem.value.name}, ${selectedItem.value.country}`
                findCurrentWeatherByCity(q);
            };

            return {
                handleError,
                getGeolocationPosition,
                isOpen,
                openIsOpen,
                closeIsOpen,
                alertModalTitle,
                setAlertModalTitle,
                alertModalContent,
                setAlertModalContent,
                initTitleAndContent,
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
    height: 100%;
    background-color: $dark-color;
    padding: 24px 10px;
  }

</style>
