import Vue from 'vue'
import Router from 'vue-router'
import HelloContainer from "./components/HelloWorld.vue"
import product from "./components/xz/product.vue"
import header from "./components/xz/header.vue"
import body1 from "./components/xz/body1.vue"
import body2 from "./components/xz/body2.vue"
Vue.use(Router)
export default new Router({
  //http://127.0.0.1:3001/#/Exam02
  //path:组件路径 components组件名
  routes: [
    {path:'/header',component:header},
    {path:'/body2',component:body2},
    {path:'/body',component:body1},
    {path:'/product',component:product},
    {path:'/',component:HelloContainer},
  ]
})
