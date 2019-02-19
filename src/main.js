import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './css/base.css';
import './css/iconfont.css';
Vue.use(ElementUI);
// import Vuex from 'vuex'
Vue.use(VueRouter)
// Vue.use(Vuex)
let rowmap=[
   {path:'/',redirect:'login'},
   {path:'/login',name:'login',component: resolve => require(['./vue/login.vue'], resolve)},
   {path:'/index',name:'index',component: resolve => require(['./vue/index.vue'], resolve)},
   {path:'/katong',name:'katong',component: resolve => require(['./vue/katong.vue'], resolve)},
   {path:'/music',name:'music',component: resolve => require(['./vue/music.vue'], resolve)},
   {path:'/musicParticulars/:id',name:'musicParticulars',component: resolve => require(['./vue/musicParticulars.vue'], resolve)},
   {path:'/book',name:'book',component: resolve => require(['./vue/book.vue'], resolve)},
   {path:'/bookparticulars/:id',name:'bookparticulars',component: resolve => require(['./vue/bookparticulars.vue'], resolve)},
   {path:'/VideoList',name:'VideoList',component: resolve => require(['./vue/VideoList.vue'], resolve)},
   {path:'/Email',name:'Email',component: resolve => require(['./vue/Email.vue'], resolve)},
   {path:'/chitchat',name:'chitchat',component: resolve => require(['./vue/chitchat.vue'], resolve)},
   {path:'/uploading',name:'uploading',component: resolve => require(['./vue/upload/uploading.vue'], resolve)},
 ]
const roo=new VueRouter({
  routes:rowmap
})
new Vue({
  router:roo,
  render: h => h(App),// router: router,
}).$mount('#app')
  
