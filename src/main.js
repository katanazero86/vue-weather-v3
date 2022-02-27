import {createApp} from 'vue'
import App from './App.vue';
import './app.css'

import {createPinia} from 'pinia'
import router from './router';
import VueApexCharts from 'vue3-apexcharts';

createApp(App)
    .use(createPinia())
    .use(router)
    .use(VueApexCharts)
    .mount('#app');
