
import Dealer from '../../api/Dealer'

const state = {
    dealer: []
};

const getters = {
    getInfo: (state) => state.dealer,
};

const mutations = {
    setDealer: (state, dealers) => (state.dealer = dealers)
}

const actions = {
    async getDealerInfo({commit}) {
        try {
            Dealer.all().then(function (response) {
                console.log(response)
                commit('setDealer', response.data)
            })
        } catch (e) {
            console.log(e)
        }
    },

};

export default {
    namespaced: true,
    getters,
    state,
    actions,
    mutations
}
