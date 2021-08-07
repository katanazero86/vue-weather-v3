<template>
    <div class="index pa-5">
      <MyLocationIcon @click="onClick"/>
      <BasicButton name="테스트" @click="openIsOpen"/>
      {{isOpen}}
    </div>
    <AlertModal v-if="isOpen" :title="alertModalTitle" :content="alertModalContent" @close="closeIsOpen"/>
</template>

<script lang="ts">
    import {defineComponent} from 'vue';
    import MyLocationIcon from '@/components/Icons/MyLocationIcon.vue';
    import BasicButton from '@/components/Buttons/BasicButton.vue';
    import AlertModal from '@/components/Modal/AlertModal.vue';
    import useAlertModal, {UseAlertModalInterface} from '@/customHooks/useAlertModal';
    import {checkGeolocationSupport, getCurrentPosition, handleGeolocationError} from '@/utils/geolocationUtils';

    const Index = defineComponent({
        name: 'Index',
        components: {
            MyLocationIcon,
            BasicButton,
            AlertModal
        },
        setup() {

            const {
                isOpen,
                openIsOpen,
                closeIsOpen,
                alertModalTitle,
                setAlertModalTitle,
                alertModalContent,
                setAlertModalContent,
                initTitleAndContent,
            }:UseAlertModalInterface = useAlertModal();

            const onClick = () => {
                if(checkGeolocationSupport()) {
                    getCurrentPosition().then(position => {
                        console.log(position);
                    }).catch(error => {
                       console.log(error);
                    });
                }
            }

            return {
                onClick,
                isOpen,
                openIsOpen,
                closeIsOpen,
                alertModalTitle,
                setAlertModalTitle,
                alertModalContent,
                setAlertModalContent,
                initTitleAndContent,
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
  }

</style>
