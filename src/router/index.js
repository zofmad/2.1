import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/pages/HomePage.vue'
import About from '@/pages/AboutPage.vue'
import Mixin from '@/pages/MixinPage.vue'
import Error from '@/pages/ErrorPage.vue'
import Color from '@/pages/ColorPage.vue'
import MyColorsPage from '@/my-colors/MyColorsPage.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/mixin',
    name: 'Mixin',
    component: Mixin
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'Error',
    component: Error
  },
  {
    path: '/color/:red?/:green?/:blue?',
    name: 'Color',
    component: Color
  },
  {
    path: '/my-colors',
    name: 'My colors',
    component: MyColorsPage
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
