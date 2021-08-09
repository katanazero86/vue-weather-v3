<template>
  <router-view/>
  <transition name="fade">
    <Spinner v-if="isLoading"/>
  </transition>
</template>

<script lang="ts">
    import {defineComponent, computed} from 'vue';
    import {useStore} from 'vuex';
    import Spinner from '@/components/Spinner/Spinner.vue';

    const App = defineComponent({
        name: 'App',
        components: {
            Spinner,
        },
        setup() {
            const store = useStore();
            const isLoading = computed(() => store.state.isLoading);

            return {
                isLoading,
            }
        }
    });

    export default App
</script>

<style lang="scss" src="./assets/scss/global.scss"/>
