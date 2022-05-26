import shop from '../../api/shop'

// initial state
const state = () => ({
  all: [],
})


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
  actions,
  mutations
}