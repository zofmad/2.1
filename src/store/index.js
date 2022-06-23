import { createStore } from 'vuex'

export default createStore({
  state: {
    colors: [
      { red: 10, green: 20, blue: 30 }
    ]
  },
  mutations: {
    ADD_COLOR (state, color) {
      state.colors.push(color)
    }
  }
})
