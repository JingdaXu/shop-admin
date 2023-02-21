import { createRouter, createWebHashHistory, type RouteRecordRaw } from 'vue-router'
const routes: RouteRecordRaw[] = [
  {
    path: '/home',
    name: 'home',
    component: async () => await import('@/views/home/index.vue')
  },
  {
    path: '/',
    name: 'login',
    component: async () => await import('@/views/login/index.vue')
  }
]
const router = createRouter({
  history: createWebHashHistory(),
  routes
})
export default router
