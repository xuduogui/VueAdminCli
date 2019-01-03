import Vue from 'vue'
import Vuex from 'vuex'
import modules from './modules/modules'

Vue.use(Vuex)

const store = new Vuex.Store({
    modules: {
        ...modules
    },
    state: {},
    mutations: {},
    getters: {}
})

export default store  
