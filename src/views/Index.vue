<template>
  <DefaultLayout>
    <div class="index">
      <MyLocationIcon @click="onClick"/>
    </div>
  </DefaultLayout>
</template>

<script lang="ts">
    import {defineComponent} from 'vue';
    import DefaultLayout from '@/components/Layout/DefaultLayout.vue';
    import MyLocationIcon from '@/components/Icons/MyLocationIcon.vue';

    const Index = defineComponent({
        name: 'Index',
        components: {
            DefaultLayout,
            MyLocationIcon
        },
        setup() {
            const onClick = () => {
                if ('geolocation' in navigator) {
                    alert('zz');
                } else {
                    alert('해당 기능은 사용이 불가능합니다. 관리자에게 문의해주세요.');
                    console.error('not supported geolocation');
                    return false;
                }

            }

            return {
                onClick,
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
