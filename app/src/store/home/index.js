import {reqCategoryList,reqBannerList} from '@/api';

const state = {
    categoryList:[],
    bannerList:[]
}
//唯一能修改state的手段
const mutations = {
    CATEGORYLIST(state,categoryList){
        state.categoryList = categoryList
    },
    BANNERLIST(state,bannerList){
        state.bannerList = bannerList
    }
}
//这里可以修改业务逻辑，可以异步处理，但不能修改state
const actions = {
    async getCategoryList({commit}){
        let result = await reqCategoryList()
        if(result.code == 200){
            commit("CATEGORYLIST",result.data)
        }
    },
    async getBannerList({commit}){
        let result = await reqBannerList()
        console.log(result);
        if(result.code == 200){
            commit("BANNERLIST",result.data)
        }
    }
}
//理解为计算属性
const getters = {}

export default {
    state,
    mutations,
    actions,
    getters
}