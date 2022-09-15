import Vue from 'vue'
import VueRouter from 'vue-router'
import LoginView from '../views/LoginView.vue'
import InitialView from '../views/InitialView.vue'
import SadView from '../views/SadView.vue'
import PokerFaceView from '../views/PokerFaceView.vue'
import HappyView from '../views/HappyView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'login',
    component: LoginView
  },
  {
    path: '/inicial',
    name: 'inicial',
    component: InitialView
  },
  {
    path: '/triste',
    name: 'triste',
    component: SadView
  },
  {
    path: '/poker-face',
    name: 'poker-face',
    component: PokerFaceView
  },
  {
    path: '/feliz',
    name: 'feliz',
    component: HappyView
  },
]

const router = new VueRouter({
  routes
})

export default router
