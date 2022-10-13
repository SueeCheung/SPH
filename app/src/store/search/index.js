import { reqSearchInfo } from '@/api'

const state = {
    searchList:{}
}
//唯一能修改state的手段
const mutations = {
    SEARCHLIST(state, searchList) {
        state.searchList = searchList
    }
}
//这里可以修改业务逻辑，可以异步处理，但不能修改state
const actions = {
    async getSearchInfo({ commit }, params = {}) {
        //params形参是当用户派发action的时候的第二个参数，至少是一个空对象
        let result = await reqSearchInfo(params)
        if (result.code == 200) {
            commit('SEARCHLIST', result.data)
        }
    }
}
//理解为计算属性,为了简化仓库中的数据
const getters = {
    attrsList(state){
        return state.searchList.attrsList
    },
    goodsList(state){
        //防止没网 所以加上 || []
        return state.searchList.goodsList || []
    },
    trademarkList(state){
        return state.searchList.trademarkList
    }
}

export default {
    state,
    mutations,
    actions,
    getters
}