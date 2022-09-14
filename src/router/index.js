import Vue from 'vue'
import VueRouter from 'vue-router'
import LoginView from '../views/LoginView.vue'
import InitialView from '../views/InitialView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'login',
    component: LoginView
  },
  {
    path: '/inicial',
    name: 'initial',
    component: InitialView
  },
]

const router = new VueRouter({
  routes
})

export default router
