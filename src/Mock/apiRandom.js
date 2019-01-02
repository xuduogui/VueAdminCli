
const arrPick = arr => {
    return arr[Math.floor(Math.random() * arr.length)]
}

export default {
    constellation () {
        let constellations = ['白羊座', '金牛座', '双子座', '巨蟹座', '狮子座', '处女座', '天秤座', '天蝎座', '射手座', '摩羯座', '水瓶座', '双鱼座']
        return arrPick(constellations)
    },
    randomABC () {
        let list = ['A', 'B', 'C']
        return arrPick(list)
    }
}
