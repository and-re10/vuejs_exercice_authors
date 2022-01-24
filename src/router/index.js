import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import FormInscription from '../views/FormInscription.vue'
import Accounts from '../views/Accounts.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/form-inscription',
    name: 'FormInscription',
    component: FormInscription
  },
  {
    path: '/accounts',
    name: 'Accounts',
    component: Accounts
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
