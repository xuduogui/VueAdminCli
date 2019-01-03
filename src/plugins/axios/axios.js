import axios from 'axios'
import options from './axiosBase'

const Axios = axios.create(options)

// 请求时的拦截
Axios.interceptors.request.use(
    config => {
        return config;
    }, error => {
        // 当请求异常时做一些处理
        const errorInfo = error.data.error ? error.data.error.message : error.data
        return Promise.reject(errorInfo)
    }
)

// 响应时拦截
Axios.interceptors.response.use(
    response => {
        return response
    }
    , error => {
        return error
    }
)

export default Axios
