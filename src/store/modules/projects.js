import shop from '../../api/shop'

// initial state
const state = () => ({
  all: [],
 
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