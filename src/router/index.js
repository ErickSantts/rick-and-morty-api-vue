import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Detalhes from '../views/Detalhes.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/detalhes',
    name: 'detalhes',
    component: Detalhes
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
