import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return savedPosition
    const sectionByPath = {
      '/programs': '#programs',
      '/faculty': '#faculty',
      '/partnerships': '#partnerships',
    }
    if (sectionByPath[to.path]) {
      return { el: sectionByPath[to.path], behavior: 'smooth' }
    }
    return { top: 0 }
  },
  routes: [
    {
      path: '/',name: 'home',component: Home,
    },
    {
      path: '/programs',name: 'programs',component: Home,
    },
    {
      path: '/faculty',name: 'faculty',component: Home,
    },
    {
      path: '/partnerships',name: 'partnerships',component: Home,
    },
  ]
})

export default router
