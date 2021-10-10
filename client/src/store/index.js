import { createStore } from 'vuex'

export default createStore({
  state: {
    userInfo: {}
  },
  mutations: {
    updateUser(state, value) {
      state.userInfo = value

    },
    userUpdate(state, value) {
      state.userInfo.user = value

    },
  },
  actions: {
  },
  modules: {

  }
})
