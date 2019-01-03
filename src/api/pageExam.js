import axios from '../plugins/axios/axios'

const getTableData = async (config = null) => {
    return await axios({
        method: 'post',
        url: '/api/getTableData',
        data: { flag: '获取' + config }
    })
}

export default {
    getTableData
}

