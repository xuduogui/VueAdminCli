import Vue from 'vue'
import Vuex from 'vuex'
import modules from './storeModules.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {

  },
  mutations: {

  },
  actions: {

  },
  modules: {
    ...modules
  },
})