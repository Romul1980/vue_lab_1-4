import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import servicePlugin from '@/plugins/services';

createApp(App)
    .use(servicePlugin)
    .mount('#app')
