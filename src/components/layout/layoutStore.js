import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const vuexStore = {
    namespaced: true,
    state: {
        navLeftSelected: '1-4-1',
        navLeftBackgroundColor: '#545c64',
        navLeftTextColor: '#fff',
        navLeftActiveTextColor: '#ffd04b',
        navLeftIsCollapse: false,
    },
    mutations: {
        setNavLeftSelected(state, index) {
            state.navLeftSelected = index;
        },
        setNavLeftIsCollapse(state, boolean) {
            state.navLeftIsCollapse = boolean;
        },
        switchNavLeftIsCollapse(state) {
            state.navLeftIsCollapse = !state.navLeftIsCollapse;
        },
    },
    actions: {}
}

export default vuexStore  
