// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  { path: '/', name: 'Home', component: () => import('../pages/Home.vue') },
  { path: '/works', name: 'Works', component: () => import('../pages/Works.vue') },

  // route dynamique pour le détail d'un projet
  // exemple d'URL : /works/alpha
  { 
    path: '/works/:id', 
    name: 'Project', 
    component: () => import('../pages/Project.vue'),
    props: true
  },

  { path: '/myhistory', name: 'History', component: () => import('../pages/About.vue') },

  // fallback optionnel : redirige vers /works si route inconnue
  { path: '/:catchAll(.*)', redirect: '/works' }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router