import { createStore } from 'vuex'

export default createStore({
  state: {
    colors: [
      { red: 10, green: 20, blue: 30 },
      { red: 20, green: 120, blue: 90 }
    ],
    mixtures: [
      {
        variant: 'red',
        amount: 20
      },
      {
        variant: 'green',
        amount: 70
      },
      {
        variant: 'blue',
        amount: 40
      }]
  },
  mutations: {
    ADD_COLOR (state, color) {
      state.colors.push(color)
    },
    DELETE_COLOR (state, colorIndex) {
      state.colors.splice(colorIndex, 1)
    },
    INCREMENT_COLOR (state, index) {
      const mixture = state.mixtures[index]
      if (mixture.amount === 100) return false
      console.log('dd', mixture)
      state.mixtures[index].amount++
    },
    DECREMENT_COLOR (state, index) {
      const mixture = state.mixtures[index]
      if (mixture.amount === 0) return false
      state.mixtures[index].amount--
    },
    REFRESH_MIXTURE (state) {
      state.mixtures = state.mixtures.map(item => ({ ...item, amount: 50 }))
    }
  },
  getters: {
    RGBColors (state) {
      return state.colors.map(color => `rgb(${color.red}, ${color.green}, ${color.blue})`)
    },
    numberOfColors (state) {
      return state.colors.length
    },
    mixtureEffectFill (state) {
      const [redCol, greenCol, blueCol] = state.mixtures.map((item) =>
        Math.floor(item.amount * 2.5)
      )
      return `rgb(${redCol}, ${greenCol}, ${blueCol})`
    },
    rgbLink (state) {
      const [redCol, greenCol, blueCol] = state.mixtures.map((item) =>
        Math.floor(item.amount * 2.5)
      )
      return `/color/${redCol}/${greenCol}/${blueCol}`
    }
  },
  actions: {
    addColor ({ commit }, colors) {
      if (colors.length === 3) {
        const [red, green, blue] = colors.map(item => Math.floor(item.amount * 2.5))
        commit('ADD_COLOR', { red, green, blue })
      }
    }
  }
})
