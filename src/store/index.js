import { createStore } from 'vuex'

export default createStore({
  state: {
    accounts: []
  },
  mutations: {
    addAccount (state, payload) {
      state.accounts.push(payload)
    }
  },
  actions: {
    addAccount ({ commit }, account) {
      return new Promise(resolve => {
        setTimeout(() => {
          account.id = Date.now()
          commit('addAccount', account)
          resolve(account)
        }, 1000)
      })
    }
  },
  modules: {
  }
})
