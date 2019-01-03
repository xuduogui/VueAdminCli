import Vue from 'vue'
import Vuex from 'vuex'
import publics from './public/public'

Vue.use(Vuex)

const modules = {
    ...publics
}

export default modules  
