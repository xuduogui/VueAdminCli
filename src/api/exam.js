import Vue from 'vue';
const axios = Vue.axios

// 测试数据接口
const examTest = async (config = {}) => await axios.post('/exam/test', config)

export default {
  examTest,
}

