import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const vuexStore = {
    namespaced: true,
    state: {
        navBodyBreadcrumbs: [
            // {name: '首页', path: '/'},
        ],
    },
    mutations: {
        setNavBodyBreadcrumbsByLength(state, newLength) {
            state.navBodyBreadcrumbs.splice(newLength)
        },
        setNavBodyBreadcrumbsByNew (state, item) {
            state.navBodyBreadcrumbs.push(item)
        },
        setNavBodyBreadcrumbsByArritem (state, arr) {
            state.navBodyBreadcrumbs.splice(0)
            state.navBodyBreadcrumbs.push(arr)
        }
    },
    actions: {}
}

export default vuexStore  
