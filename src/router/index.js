import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/cositas',
      name: 'cositas',
      component: () => import('../views/CositasView.vue')
    },
    {
      //ruta dinamica
      path: '/poke/view',
      name: 'poke',
      component: () => import('../views/PokeView.vue'),
      query: true
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: () => import('../views/NotFoundView.vue')
    }
    ]
})

export default router
