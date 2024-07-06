import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    // firstPage
    {
      path: '/',
      component: () => import('../components/login/firstPage.vue')
    },
    // register
    {
      path: '/register',
      component: () => import('../components/login/register.vue')
    },
    // otp
    {
      path: '/otp',
      component: () => import('../components/login/otp.vue')
    },
    // loginForm
    {
      path: '/loginForm',
      component: () => import('../components/login/loginForm.vue')
    },
    // LoginCode
    {
      path: '/LoginCode',
      component: () => import('../components/login/LoginCode.vue')
    },
    // Dashboard
    {
      path: '/Dashboard',
      component: () => import('../components/MainPageDashboard.vue')
    },


  ]
})

export default router