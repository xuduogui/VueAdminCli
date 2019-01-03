import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const vuexStore = {
    namespaced: true,
    state: {
        navBreadcrumbs: [
            {name: '首页', path: '/'},
            {name: '活动管理', path: '/'},
            {name: '活动列表', path: '/'},
        ],
    },
    mutations: {
        setNavBodyBreadcrumbs(state, config) {
            state.navBreadcrumbs = config.data;
        }
    },
    actions: {}
}

export default vuexStore  
