const state = {
    displayModal: false,
}

const mutations = {
    displayModal: (state) => (state.displayModal =! state.displayModal),
}

const actions = {
    displayModal: ({commit}) => (commit('displayModal')),
};

export default {
    namespaced: true,
    actions,
    state,
    mutations
}
