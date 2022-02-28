<template>
  <div class="my-location">
    <div class="my-location__body column align-items-center">
      <MyLocationIcon @click="handleMyLocationIconClick" :width="25" :height="25"/>
      <p class="pt-2">click here :) get current position weather!</p>
    </div>
  </div>
</template>

<script lang="ts" setup>
import MyLocationIcon from '@/components/Icons/MyLocationIcon.vue';
import {geolocationUtils} from '@/utils/geolocation-utils';

const emit = defineEmits(['handleError', 'geolocationPosition']);

const handleMyLocationIconClick = async () => {
  if (geolocationUtils.checkGeolocationSupport()) {
    try {
      const resultPosition = await geolocationUtils.getCurrentPosition();
      emit('geolocationPosition', resultPosition);
    } catch (e) {
      console.error(e);
      emit('handleError', {title: '알림', content: geolocationUtils.handleGeolocationError(e)});
    }

  } else {
    emit('handleError', {title: '알림', content: '해당 기능을 지원하지 않아 사용하실 수 없습니다.'});
  }
}
</script>

<style lang="scss" scoped>

.my-location {

  width: 100%;
  max-width: 1024px;
  margin: 0 auto;

  &__body {
    letter-spacing: -0.3px;
    color: var(--default-color);
    font-weight: 400;
    font-size: 14px;
  }
}
</style>
