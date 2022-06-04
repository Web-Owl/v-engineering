import Project from '../../api/Project'
// initial state
const state = {
  all: []
};

const getters = {
  getAll: (state) => state.all
};

// mutations
const mutations = {
  setProjects (state, projects) {
    state.all = projects
  }
}

// actions
const actions = {
  async getAllProjects({ commit }) {
    try{
      Project.all().then(response => {
        console.log(response)
        commit('setProjects', response.data)
      })  
    } catch(e) {
      console.log(e)
    }
  }
}

export default {
  namespaced: true,
  getters,
  state,
  actions,
  mutations
}