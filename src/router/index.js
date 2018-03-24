import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import RoomDetail from '@/components/RoomDetail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    { path: '/RoomDetail', component: RoomDetail, name: 'RoomDetail' }
  ]
})
