import Vue from 'vue'
import Vuex from 'vuex'

// Make vue aware of Vuex
Vue.use(Vuex)

// Create an object to hold the initial state when
// the app starts up
const state = {
  count: 0
}

// Create an object storing various mutations. We will write the mutation
const mutations = {
  INCREMENT (state, amount) {
    state.count = state.count + amount
  },
  DECREMENT (state, amount) {
    state.count = state.count - amount
  }
}

// Combine the initial state and the mutations to create a Vuex store.
// This store can be linked to our app.
export default new Vuex.Store({
  state,
  mutations
})