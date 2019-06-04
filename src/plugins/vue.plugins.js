import Vue from 'vue';
import cookies from './cookie';

// eslint-disable-next-line no-unused-vars
Plugin.install = function(Vue, options) {
  Object.defineProperties(Vue.prototype, {

    // cookie插件
    $cookie: {
      get() {
        return cookies
      }
    },

  });
};

Vue.use(Plugin)

export default Plugin;