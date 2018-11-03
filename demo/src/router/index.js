import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import routerConfig from '../routerConfig'
Vue.use(Router)


// router={};
// router.routes=[];

console.log(routerConfig)

export default new Router({
  routes: routerConfig
})