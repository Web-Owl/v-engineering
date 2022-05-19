import shop from '../../api/shop'

// initial state
const state = () => ({
  all: [],
  phoneNumber: '+7 (925) 439 10 11',
  email: 'video.inzhiniring@yandex.ru',
  address: 'Москва, Ул. Удальцова, д. 3к1',
})

// getters
const getters = {
  phoneHref: function (state) {
              return 'tel:' + `${state.phoneNumber}`.replace(/\s|\)|\(|-/g, '');
            },
  mailTo: function (state) {
              return 'mailto:' + `${state.email}`
            }
}

// actions
const actions = {
  async getAllProjects ({ commit }) {
    const projects = await shop.getProjects()
    commit('setProjects', projects)
  }
}

// mutations
const mutations = {
  setProjects (state, projects) {
    state.all = projects
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}