// 使用 Mock
const Mock = require('mockjs')
import RandomExtend from './apiRandom'

let Random = Mock.Random
Random.extend(RandomExtend)
Object.keys(RandomExtend).forEach(ele => {
    RandomExtend[ele]()
})

import getElements from './getElements'
Mock.mock(`/api/getElements`, getElements)

import getLayouts from './getLayouts'
Mock.mock(`/api/getlayouts`, getLayouts)
