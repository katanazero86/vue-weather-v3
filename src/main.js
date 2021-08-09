import {createApp} from 'vue'
import App from './App.vue';
import './app.css'

import store from './store/index';
import router from './router';

createApp(App)
    .use(store)
    .use(router)
    .mount('#app');
