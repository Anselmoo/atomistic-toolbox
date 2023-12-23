import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import TanabeSuganoView from '../views/TanabeSuganoView.vue'
import EnergyLevelsView from '../views/EnergyLevelsView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/tanabe-sugano',
      name: 'ts',
      component: TanabeSuganoView
    },
    {
      path: '/energy-levels',
      name: 'el',
      component: EnergyLevelsView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router
