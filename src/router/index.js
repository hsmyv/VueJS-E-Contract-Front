import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/register',
      name: 'Register',
      component: () => import('../views/contracts/Register.vue')
    },
       {
      path: '/login',
      name: 'Login',
      component: () => import('../views/contracts/Login.vue')
    },
    {
      path: '/contracts',
      name: 'ContractIndex',
      component: () => import('../views/contracts/ContractIndex.vue')
    },
     {
      path: '/contracts/create',
      name: 'ContractCreate',
      component: () => import('../views/contracts/ContractCreate.vue')
    },
     {
      path: '/contracts/:id/edit',
      name: 'ContractEdit',
      component: () => import('../views/contracts/ContractEdit.vue'),
      props:true
    }
  ]
})

export default router
