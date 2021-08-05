<template>
  <DefaultLayout>
    <div class="index">
      <MyLocationIcon @click="onClick"/>
      <BasicButton name="테스트" @click="openIsOpen"/>
      {{isOpen}}
    </div>
    <AlertModal v-if="isOpen" :title="alertModalTitle" :content="alertModalContent" @close="closeIsOpen"/>
  </DefaultLayout>

</template>

<script lang="ts">
    import {defineComponent} from 'vue';
    import DefaultLayout from '@/components/Layout/DefaultLayout.vue';
    import MyLocationIcon from '@/components/Icons/MyLocationIcon.vue';
    import BasicButton from '@/components/Buttons/BasicButton.vue';
    import AlertModal from '@/components/Modal/AlertModal.vue';
    import useAlertModal from '@/customHooks/useAlertModal.ts';

    const Index = defineComponent({
        name: 'Index',
        components: {
            DefaultLayout,
            MyLocationIcon,
            BasicButton,
            AlertModal
        },
        setup(): Object {

            const {
                isOpen,
                openIsOpen,
                closeIsOpen,
                alertModalTitle,
                setAlertModalTitle,
                alertModalContent,
                setAlertModalContent,
                initTitleAndContent,
            } = useAlertModal();

            const onClick = () => {
                if ('geolocation' in navigator) {
                    setAlertModalTitle('알림');
                    setAlertModalContent('준비중..');
                    openIsOpen();
                } else {
                    alert('해당 기능은 사용이 불가능합니다. 관리자에게 문의해주세요.');
                    console.error('not supported geolocation');
                    return false;
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
    })
    export default Index
</script>

<style lang="scss" scoped>

  @import '../assets/scss/common/variables';

  .index {
    height: 100%;
    background-color: $dark-color;
  }

</style>
