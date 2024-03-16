export default {
    namespaced: true,
    state: {
      btn8thCounts: {
        btn1: 0,
        btn2: 0,
        btn3: 0,
        btn4: 0
      }
    },
    getters: {
      getCount: (state) => state.btn8thCounts
    },
    mutations: {
      incrementButtonCount: (state, btnIndex) => {
        state.btn8thCounts[btnIndex] += 1
      }
    },
    actions: {
      incrementButtonCount: ({commit}, btnIndex) => {
        commit('incrementButtonCount', btnIndex)
      }
    }
  }
  