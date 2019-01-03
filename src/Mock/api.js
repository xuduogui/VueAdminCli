// 使用 Mock
const Mock = require('mockjs')
import RandomExtend from './apiRandom'

let Random = Mock.Random
Random.extend(RandomExtend)
Object.keys(RandomExtend).forEach(ele => {
    RandomExtend[ele]()
})

import pageExam from './pageExam'
Mock.mock(`/api/getTableData`, pageExam.getTableData)

