import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Faculty from '../views/Faculty.vue'
import Announcements from '../views/Announcements.vue'
import Contact from '../views/Contact.vue'
import ProgramBSIT from '../views/programs/Program_BSIT.vue'
import ProgramBSCS from '../views/programs/Program_BSCS.vue'
import ProgramBSDMIA from '../views/programs/Program_BSDMIA.vue'
import ProgramBLIS from '../views/programs/Program_BLIS.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return savedPosition
    if (to.hash) return { el: to.hash, behavior: 'smooth' }
    const sectionByPath = {
      '/programs': '#programs',
      '/faculty': '#faculty',
      '/about': '#about',
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
      path: '/faculty',name: 'faculty',component: Faculty,
    },
    {
      path: '/about',name: 'about',component: Home,
    },
    {
      path: '/announcements',name: 'announcements',component: Announcements,
    },
    {
      path: '/contact',name: 'contact',component: Contact,
    },
    {
      path: '/programs/bsit',name: 'program-bsit',component: ProgramBSIT,
    },
    {
      path: '/programs/bscs',name: 'program-bscs',component: ProgramBSCS,
    },
    {
      path: '/programs/bsdmia',name: 'program-bsdmia',component: ProgramBSDMIA,
    },
    {
      path: '/programs/blis',name: 'program-blis',component: ProgramBLIS,
    },
    {
      path: '/partnerships',redirect: '/about',
    },
  ]
})

export default router
