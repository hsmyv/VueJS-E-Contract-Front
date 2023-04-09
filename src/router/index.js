import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/register',
      name: 'Register',
          meta: {
        requiresAuth:false
      },
      component: () => import('../views/contracts/Register.vue')
    },
       {
      path: '/login',
      name: 'Login',
          meta: {
        requiresAuth:false
      },
      component: () => import('../views/contracts/Login.vue')
    },
    {
      path: '/contracts',
      name: 'ContractIndex',
      meta: {
        requiresAuth:false
      },
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
    },
    {
      path: '/contracts/:id/view',
      name: 'ContractView',
      component: () => import('../views/contracts/ContractView.vue'),
      props:true
    },
  ]

});

router.beforeEach((to,from) => {
    if(to.meta.requiresAuth && !localStorage.getItem('token')){
      return {name: 'Login'}
    }
    if(to.meta.requiresAuth == false && localStorage.getItem('token')){
      return {name: 'ContractIndex'}
    }
  });
export default router
