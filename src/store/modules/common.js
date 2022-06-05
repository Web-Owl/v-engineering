const state = {
    thanks: false,
    isActive: false
};

const getters = {
    modalActive: (state) => (state.isActive)
};

const mutations = {
    showThanks: (state) => (state.thanks = true),
    toggleModal: (state) => (state.isActive =! state.isActive),
    closeModal: (state) => (state.isActive = state.thanks = false)
};

const actions = {
    toggleModal({commit}) {
        commit("toggleModal");
    },
    closeModal({commit}) {
        commit("closeModal");
    }
}

export default {
    namespaced: true,
    actions,
    getters,
    state,
    mutations
}
