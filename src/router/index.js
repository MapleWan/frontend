import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: '',
    },
    {
      path: '/about',
      name: 'about',
    },
  ],
})

export default router
