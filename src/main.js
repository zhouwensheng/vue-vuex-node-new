import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import tt from './vue/1.vue';
import index from './vue/index.vue';
import katong from './vue/katong.vue';
import login from './vue/login.vue';
import music from './vue/music.vue';
import musicParticulars from './vue/musicParticulars.vue';
import book from './vue/book.vue';
import bookparticulars from './vue/bookparticulars.vue';
import VideoList from './vue/VideoList.vue';
import Email from './vue/Email.vue';
import uploading from './vue/upload/uploading.vue';
import pictureing from './vue/upload/pictureing.vue';
import musicing from './vue/upload/musicing.vue';
import texting from './vue/upload/texting.vue';
import videoing from './vue/upload/videoing.vue';
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
   {path:'/login',name:'login',component:login},
   {path:'/index',name:'index',component:index},
   {path:'/katong',name:'katong',component:katong},
   {path:'/music',name:'music',component:music},
   {path:'/musicParticulars/:id',name:'musicParticulars',component:musicParticulars},
   {path:'/login',name:'login',component:login},
   {path:'/book',name:'book',component:book},
   {path:'/bookparticulars/:id',name:'bookparticulars',component:bookparticulars},
   {path:'/VideoList',name:'VideoList',component:VideoList},
   {path:'/Email',name:'Email',component:Email},
   {
     path:'/uploading',
     name:'uploading',
     component:uploading,
     children:[
       {
         path:'/pictureing',
         component:pictureing
       },
       {
         path:'/musicing',
         component:musicing
       },
       {
         path:'/texting',
         component:texting
       },
       {
         path:'/videoing',
         component:videoing
       }
     ]
   }
 ]
const roo=new VueRouter({
  routes:rowmap
})
new Vue({
  router:roo,
  render: h => h(App),// router: router,
}).$mount('#app')
  
