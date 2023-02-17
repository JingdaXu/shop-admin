import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: async () => await import('../views/home/pageIndex.vue')
    },
    {
      path: '/',
      name: 'login',
      component: async () => await import('../views/login/index.vue')
    }
  ]
})
export default router
