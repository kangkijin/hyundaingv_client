import { createRouter, createWebHistory } from 'vue-router'
import { routes } from './routes'
import middlewareAuth from '@/middleware/auth'
import { userInfoStore } from '../stores/userInfo'
import { getUserInfo, getAccessToken } from '@/utils/cookie'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior() {
    return { top: 0 }
  }
})

export default router
