import User from '../../api/Users'

const state = {
  users: {},
  userinfo: {}
};

const getters = {
  allUsers: (state) => state.users,
  getUserInfo: (state) => state.userinfo
};

const mutations = {
  setUsers: (state, users) => (state.users = users),
  addUser: (state, userinfo) => (state.users = userinfo),
  clearForm: (state) => (state.userinfo = {}),
  updateUser: (state, {getUserInfo, payload}) => (getUserInfo[payload.field] = payload.value)
};

const actions = {
  async getUsers({ commit }) {
    try {
      const res = await User.all();
      commit("setUsers", res.data);
    } catch (e) {
      console.log(e);
    }
  },
  async addUser({ commit }, getUserInfo) {
    try { 
      const res = await User.post({
        phone: getUserInfo.phone.match(/\+?\d+/g).join("")
      }).then(function (response) {
          console.log(response);
          setTimeout(() => {
            commit("clearForm");
          }, 1000);

          commit('moduleCommon/closeModal', [], { root: true});
          commit("moduleCommon/showThanks", [], { root: true});
        });
      commit("addUser", res);
    } catch (e) {
      console.log(e);
    }
  },
  updateLocalUser({commit, getters},  payload) {
    commit('updateUser', {
      getUserInfo: getters.getUserInfo,
      payload 
    })
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
