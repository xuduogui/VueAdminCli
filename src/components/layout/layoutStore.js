import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const vuexStore = {
    namespaced: true,
    state: {
        // 默认选中
        navLeftSelected: '1-4-1',
        // 侧栏背景颜色
        navLeftBackgroundColor: '#545c64',
        // 侧栏文字颜色
        navLeftTextColor: '#fff',
        // 侧栏当前选中文字颜色
        navLeftActiveTextColor: '#ffd04b',
        // 侧栏是否展开
        navLeftIsCollapse: false,

        // 默认选中
        navHeadSelected: '1-4-1',
        // 侧栏背景颜色
        navHeadBackgroundColor: '#fff',
        // 侧栏文字颜色
        navHeadTextColor: '#303133',
        // 侧栏当前选中文字颜色
        navHeadActiveTextColor: '#409EFF',
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
