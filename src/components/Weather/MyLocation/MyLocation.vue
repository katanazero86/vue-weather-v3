<template>
  <div class="my-location">
    <div class="my-location__body column align-items-center">
      <MyLocationIcon @click="handleMyLocationIconClick" :width="25" :height="25"/>
      <p class="pt-2">click here :) get current position weather!</p>
    </div>
  </div>
</template>

<script>
import {defineComponent} from 'vue';
import MyLocationIcon from '@/components/Icons/MyLocationIcon.vue';
import {checkGeolocationSupport, getCurrentPosition, handleGeolocationError} from '@/utils/geolocationUtils';

const MyLocation = defineComponent({
  name: 'MyLocation',
  components: {
    MyLocationIcon,
  },
  emits: ['handleError', 'geolocationPosition'],
  setup(props, {emit}) {
    const handleMyLocationIconClick = () => {
      if (checkGeolocationSupport()) {
        getCurrentPosition().then(position => {
          emit('geolocationPosition', position);
        }).catch(error => {
          emit('handleError', {title: '알림', content: handleGeolocationError(error)})
          alertModalTitle.value = '알림';
        });
      } else {
        emit('handleError', {title: '알림', content: '해당 기능을 지원하지 않아 사용하실 수 없습니다.'})
      }
    }

    return {
      handleMyLocationIconClick,
    }
  },
});
export default MyLocation
</script>

<style lang="scss" scoped>

.my-location {

  width: 100%;
  max-width: 1024px;
  margin: 0 auto;

  &__body {
    letter-spacing: -0.3px;
    color: var(--my-location-color);
    font-weight: 400;
    font-size: 14px;
  }
}
</style>
