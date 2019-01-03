import Vue from 'vue'
import App from './App.vue'
import router from './plugins/vueRouter.js'
import store from './vuex/store'
import './plugins/element.js'
import './plugins/Rxjs.js'
// 生产环境不可保留此插件
import './Mock/api.js'

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app')
