import { createStore, createLogger } from 'vuex'
import projects from './modules/projects'

const debug = process.env.NODE_ENV !== 'production'

export default createStore({
    modules: {
      projects
      },
    strict: debug,
    plugins: debug ? [createLogger()] : []
})
//     state () {
//       return {
//         phoneNumber: '+7 (925) 439 10 11',
//         email: 'video.inzhiniring@yandex.ru',
//         adress: 'Москва, Ул. Удальцова, д. 3к1',
//         projects: [
//           {
//             id: 'service_center',
//             object: 'Cеть сервисных центров по ремонту телефонов FastFix.',
//             result: '34700',
//             solution: '4 FullHD видеокамеры, видеоархив с возможностью хранения записей за 14 дней, просмотр с любого устройства - компьютер, телефон, планшет.',
//             our_price: '34700',
//             description: [
//               'Наблюдение за работой сотрудников, кассовой зоной и входом в сервис',
//               'Пресечение махинаций со стороны сотрудников и клиентов.'
//               ],
//             another_price: '36000',
//             tax: true
//           }
//         ]

//       }
//     },
//     getters: {
//         phoneHref: function (state) {
//           return 'tel:' + `${state.phoneNumber}`.replace(/\s|\)|\(|-/g, '');
//         },
//         mailTo: function (state) {
//             return 'mailto:' + `${state.email}`
//         }
//       }
//   })