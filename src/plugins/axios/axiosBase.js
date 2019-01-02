const setConfig = {
    isDev: process.env.NODE_ENV === 'development',
    // appCodeDev: 'http://localhost:8080',
    appCodeDev: '',
    // appCodeProd: 'http://localhost:8080'
    appCodeProd: ''
}
const _appCode = setConfig.isDev ? setConfig.appCodeDev : setConfig.appCodeProd

let options = {
    baseURL: _appCode,
    timeout: 50000,
    responseType: 'json',
    withCredentials: true, // 是否允许带cookie这些
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
    }
}
export default options
