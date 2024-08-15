import '@/assets/main.scss'



import { createApp } from 'vue'
import App from './App.vue'
import router from '@/Router/Index'; 

createApp(App).use(router).mount('#app')
