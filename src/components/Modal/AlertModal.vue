<template>
  <div class="modal">
    <div class="modal__overlay" @click.self="$emit('close')">
      <div class="modal-body pa-5">
        <header class="modal-body__header row align-items-center justify-contents-between">
          <h2>
            {{title}}
          </h2>
          <CloseIcon @click="$emit('close')"/>
        </header>
        <div class="modal-body__content">
          <p>{{content}}</p>
        </div>
        <div class="modal-body__button">
          <BasicButton block small name="확인" @click="$emit('close')"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
    import {defineComponent} from 'vue';
    import CloseIcon from '@/components/Icons/CloseIcon.vue';
    import BasicButton from '@/components/Buttons/BasicButton.vue';

    const AlertModal = defineComponent({
        name: 'AlterModal',
        components: {
            BasicButton,
            CloseIcon,
        },
        props: {
            title: {type: String, default: '알림'},
            content: {type: String, default: ''},
        },
        emits: ['close'],
    });
    
    export default AlertModal
</script>

<style lang="scss" src="./Modal.scss"/>
<style lang="scss" scoped>

</style>
