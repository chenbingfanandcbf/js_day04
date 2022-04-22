import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('./views/About.vue'),
      children:[
        {
          path: '/nv',
          name: 'nv',
          component: () => import('./views/nv.vue')
        },
        {
          path: '/sex',
          name: 'sex',
          component: () => import('./views/sex.vue')
        },
        {
          path: '/tirm',
          name: 'tirm',
          component: () => import('./views/tirm.vue')
        },
        {
          path: '/yd',
          name: 'yd',
          component: () => import('./views/yd.vue')
        },
        {
          path: '/yr',
          name: 'yr',
          component: () => import('./views/yr.vue')
        },
        {
          path: '/ertong',
          name: 'ertong',
          component: () => import('./views/ertong.vue')
        },
      ]
    }
  ]
})
