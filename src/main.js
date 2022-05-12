import { createApp } from 'vue'
import { createStore } from 'vuex'
import App from './App.vue'
import './assets/css/style.css'

const store = createStore({
    state () {
      return {
        phoneNumber: '+7 (925) 439 10 11',
        email: 'video.inzhiniring@yandex.ru'
      }
    },
    getters: {
        phoneHref: function (state) {
          return 'tel:' + `${state.phoneNumber}`.replace(/\s|\)|\(|-/g, '');
        },
        mailTo: function (state) {
            return 'mailto:' + `${state.email}`
        }
      }
  })

createApp(App).use(store).mount('#app')
