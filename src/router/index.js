import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)
const routes = [
  {
    path: '/',
    name: 'HelloWorld',
    component: HelloWorld
  }
]

export default new Router({
  routes,
  mode:'history'
})
