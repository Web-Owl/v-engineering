const state = () => ({
    phoneNumber: '+7 (925) 439 10 11',
    email: 'video.inzhiniring@yandex.ru',
    address: 'Москва, Ул. Удальцова, д. 3к1',
    displayModal: false
  })
const getters = {
    phoneHref: function (state) {
                return 'tel:' + `${state.phoneNumber}`.replace(/\s|\)|\(|-/g, '');
                },
    mailTo: function (state) {
                return 'mailto:' + `${state.email}`
                }
}
const mutations = {
    displayModal(state) {
        console.log('mutations are started')
        state.displayModal = !state.displayModal
    }
}
  export default {
    namespaced: true,
    state,
    getters,
    mutations
  }
