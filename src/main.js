import { createApp } from 'vue'
import Index from './views/Index.vue';
import './index.css'

import router from './router';

createApp(Index).use(router).mount('#app');
