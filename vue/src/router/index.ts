import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePage from '../components/pages/Home.vue'
import BlogPohomovaKapustinHome from '../components/pages/blogPohomovaKapustin/BlogPohomovaKapustinHome.vue'
import DetailMusicianPK from '../components/pages/blogPohomovaKapustin/DetailMusicianPK.vue'
import { RouteNames } from './routes'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: RouteNames.HOME,
    component: HomePage
  },
  {
    path: '/blog_Pohomova_Kapustin_home',
    name: RouteNames.BLOG_POHOMOVA_KAPUSTIN_HOME,
    component: BlogPohomovaKapustinHome
   },
   {
    path: '/blog_detail_musician_pk',
    name: RouteNames.DETAIL_MUSICIAN_PK,
    component: DetailMusicianPK
   }
]

const router = new VueRouter({
  mode: 'history',
  base: '/',
  routes
})

export default router
