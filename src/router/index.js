import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  { path: '/', name: 'Home', component: () => import('../pages/Home.vue') },
  { path: '/works', name: 'Works', component: () => import('../pages/Works.vue') },
  { path: '/myhistory', name: 'History', component: () => import('../pages/About.vue') }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router