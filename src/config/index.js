import Vue from 'vue';
import {
    APP_SERVER_HOST
} from './config.server.js/index.js'
import {
    APP_UPLOAD_HOST
} from './config.staticResourceOrientation.js/index.js'


// eslint-disable-next-line no-unused-vars
Plugin.install = function (Vue, options) {
    Object.defineProperties(Vue.prototype, {

        // 系统状态
        $SYSTEM_CONFIG: {
            get() {
                return {
                    // 服务器host
                    APP_SERVER_HOST,
                    // 上传host
                    APP_UPLOAD_HOST,
                }
            }
        }
    });
};

Vue.use(Plugin)

export default Plugin;