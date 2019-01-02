import Vue from 'vue'
import App from './App.vue'
import router from './plugins/vueRouter.js'
import './plugins/element.js'
import './plugins/Rxjs.js'
// 生产环境不可保留此插件
import './Mock/api.js'

Vue.config.productionTip = false

new Vue({
    router,
    render: h => h(App),
}).$mount('#app')
