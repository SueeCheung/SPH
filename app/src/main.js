import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
//引入路由
import router from '@/router'
import TypeNav from '@/components/TypeNav'
import Carousel from '@/components/Carousel'

import store from '@/store'

Vue.component(TypeNav.name,TypeNav)
Vue.component(Carousel.name,Carousel)

Vue.use(ElementUI);

Vue.config.productionTip = false

//引入MockServer.js --- mock数据
import '@/mock/mockServer'
import 'swiper/css/swiper.css'


new Vue({
  render: h => h(App),
  //注册路由
  router,
  store
}).$mount('#app')
