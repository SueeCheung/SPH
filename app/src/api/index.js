//所有的api接口统一的管理
import requests from './request'
import mockRequests from './mockAjax'

export const reqCategoryList = () => requests({ url: '/product/getBaseCategoryList', method: 'get' })

export const reqBannerList = () => mockRequests({ url: '/banner', method: 'get' })

export const reqFloorList = () => mockRequests({ url: '/floor', method: 'get' })

//传递的参数至少是个空对象
export const reqList = (params) => requests({ url: '/list', method: 'post',data:params })