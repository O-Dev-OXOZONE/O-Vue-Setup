import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
const routes: RouteRecordRaw[] = [
  { path: '/', component: () => import('@/pages/LoginForm.vue') },
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})
