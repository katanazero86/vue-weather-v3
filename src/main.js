import {createApp} from 'vue'
import App from './App.vue';
import './App.css'

import {createPinia} from 'pinia'
import router from './router';
import VueApexCharts from 'vue3-apexcharts';
import { VueQueryPlugin } from "@tanstack/vue-query";

createApp(App)
    .use(createPinia())
    .use(router)
    .use(VueApexCharts)
    .use(VueQueryPlugin)
    .mount('#app');
