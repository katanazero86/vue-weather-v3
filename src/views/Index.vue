<template>
    <div class="index">
        <MyLocationSection class="py-3" @handleError="handleError" @geolocationPosition="getGeolocationPosition"/>
        <Dropdown class="index__dropdown py-3" :items="cityList" label="원하시는 도시를 선택해주세요 :)" :selectedItem="selectedItem"
                  @select="handleDropdownSelect"/>
    </div>
    <AlertModal v-if="isOpen" :title="alertModalTitle" :content="alertModalContent" @close="closeIsOpen"/>
</template>

<script lang="ts">
    import {defineComponent, reactive, onMounted} from 'vue';
    import MyLocationSection from '@/components/Index/MyLocationSection.vue';
    import Dropdown from '@/components/Dropdown/Dropdown.vue';
    import AlertModal from '@/components/Modal/AlertModal.vue';
    import useAlertModal, {UseAlertModalInterface} from '@/customHooks/useAlertModal';
    import cityList from '@/assets/js/city.list.kr';
    import repositories from '@/repositories/index';
    import {useStore} from "vuex";

    const API_KEY = import.meta.env.VITE_API_KEY;

    const Index = defineComponent({
        name: 'Index',
        components: {
            MyLocationSection,
            Dropdown,
            AlertModal
        },
        setup() {

            const store = useStore();
            const selectedItem = reactive<any>({});

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
                console.log(targetGeolocationPosition);
                const lat = targetGeolocationPosition?.coords?.latitude;
                const lon = targetGeolocationPosition?.coords?.longitude;
                findCurrentWeatherByGeographicCoordinates(lat, lon);
            }

            // api 관련하여 추상화 예정
            const findCurrentWeatherByGeographicCoordinates1 = (lat, lon) => {
                return async (lat, lon) => {
                    const result = await repositories.weatherRepository.findCurrentWeatherByGeographicCoordinates({
                        lat,
                        lon,
                        appId: API_KEY
                    })
                        .catch(error => {
                            console.log(error.response.status, error.response.data?.message);
                        });
                }
            }

            const findCurrentWeatherByGeographicCoordinates = async (lat, lon) => {
                const result = await repositories.weatherRepository.findCurrentWeatherByGeographicCoordinates({
                    lat,
                    lon,
                    appId: API_KEY
                })
                    .catch(error => {
                        console.log(error.response.status, error.response.data?.message);
                    });

                if (result.status === 200) {
                    console.log(result);
                }
            };

            const findCurrentWeatherByCity = async (q) => {
                const result = await repositories.weatherRepository.findCurrentWeatherByCity({q, appId: API_KEY})
                    .catch(error => {
                        console.log(error.response.status, error.response.data?.message);
                    });
                if (result.status === 200) {
                    console.log(result);
                }
            }

            const handleDropdownSelect = targetItem => {
                Object.assign(selectedItem, targetItem);
                const q = `${selectedItem.name}, ${selectedItem.country}`
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

        &__dropdown {

        }
    }

</style>
