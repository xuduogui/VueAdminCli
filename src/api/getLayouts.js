import axios from '../plugins/axios/axios'

const getLayouts = async (config = null) => {
    return await axios({
        method: 'post',
        url: '/api/getlayouts',
        data: { flag: '获取' + config }
    })
}

export default getLayouts

