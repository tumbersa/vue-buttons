import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePage from '../components/pages/Home.vue'
import Button9thPage from '@/components/pages/Button9thPage.vue'
import { RouteNames } from './routes'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: RouteNames.HOME,
    component: HomePage
  },
  {
    path: '/',
    name: RouteNames.BUTTONS,
    component: Button9thPage
  }
]

const router = new VueRouter({
  mode: 'history',
  base: '/',
  routes
})

export default router
