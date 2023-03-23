import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "HomePage" */ '../views/HomePage.vue')
  },
  {
    path: '/full-quran',
    name: 'FullQuran',
    component: () => import(/* webpackChunkName: "FullQuran" */ '../views/FullQuran.vue')
  },
  {
    path: '/surah/:number',
    name: 'SingleSurah',
    component: () => import(/* webpackChunkName: "FullQuran" */ '../views/SingleSurah.vue')
  },
  {
    path: '/search',
    name: 'Search',
    component: () => import(/* webpackChunkName: "FullQuran" */ '../views/SearchPage.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
