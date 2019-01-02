import axios from '../plugins/axios/axios'

const getElements = async (config = null) => {
    return await axios({
        method: 'post',
        url: '/api/getElements',
        data: { flag: '获取的模块id标识' + config }
    })
}

export default getElements
