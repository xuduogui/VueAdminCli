import Cookies from 'js-cookie'

const cookies = {}

/**
 * @description 存储 cookie 值
 * @param {String} name cookie name
 * @param {String} value cookie value
 * @param {Object} setting cookie setting
 */
cookies.set = function (name = 'default', value = '', setting = {}) {
    Cookies.set(`${name}`, value, Object.assign({
        expires: 1
    }, setting))
}

/**
 * @description 拿到 cookie 值
 * @param {String} name cookie name
 */
cookies.get = function (name = 'default') {
    return Cookies.get(`${name}`)
}

/**
 * @description 拿到 cookie 全部的值
 */
cookies.getAll = function () {
    return Cookies.get()
}

/**
 * @description 删除 cookie
 * @param {String} name cookie name
 */
cookies.remove = function (name = 'default') {
    return Cookies.remove(`${name}`)
}

export default cookies