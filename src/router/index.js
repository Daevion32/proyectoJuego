import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CharacterView from '../views/CharacterView.vue'
import WorldMapView from '../views/WorldMapView.vue'
import LoginUserView from '../views/LoginUserView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/character',
      name: 'character',
      component: CharacterView
    },
    {
      path: '/worldMap',
      name: 'worldMap',
      component: WorldMapView
    },
    {
      path: '/userLogin',
      name: 'userLogin',
      component: LoginUserView
    }
  ]
})

export default router
