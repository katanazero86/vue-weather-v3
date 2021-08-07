<template>
  <div class="index">
    <MyLocationSection class="py-3" @handleError="handleError"/>
    <Dropdown class="index__dropdown py-3" :items="cityList" label="원하시는 도시를 선택해주세요 :)" :selectedItem="selectedItem"
              @select="handleDropdownSelect"/>
  </div>
  <AlertModal v-if="isOpen" :title="alertModalTitle" :content="alertModalContent" @close="closeIsOpen"/>
</template>

<script lang="ts">
    import {defineComponent, reactive} from 'vue';
    import MyLocationSection from '@/components/Index/MyLocationSection.vue';
    import Dropdown from '@/components/Dropdown/Dropdown.vue';
    import AlertModal from '@/components/Modal/AlertModal.vue';
    import useAlertModal, {UseAlertModalInterface} from '@/customHooks/useAlertModal';
    import cityList from '@/assets/js/city.list.kr';

    const Index = defineComponent({
        name: 'Index',
        components: {
            MyLocationSection,
            Dropdown,
            AlertModal
        },
        setup() {

            const selectedItem = reactive<object>({});

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

            const handleDropdownSelect = targetItem => {
                Object.assign(selectedItem, targetItem);
            }

            return {
                handleError,
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
