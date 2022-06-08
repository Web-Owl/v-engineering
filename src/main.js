import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import './assets/index.css'
import './assets/css/style.css'
import './assets/css/slick.css'

createApp(App).use(store).mount('#app')
