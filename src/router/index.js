import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('@/views/About')
  },{
    path: '/movie',
    name: 'Movie',
    component: () => import('@/views/Movie/index.vue')
  },{
    path: '/movie/:id',
    name: 'Movie Id',
    component: () => import('@/views/Movie/_id/index.vue')
  },{
    path: '/tv-show',
    name: 'Tv Show',
    component: () => import('@/views/TvShow/index.vue')
  },{
    path: '/tv-show/:id',
    name: 'Tv Show Id',
    component: () => import('@/views/TvShow/_id/index.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
