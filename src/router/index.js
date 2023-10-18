import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CharacterView from '../views/CharacterView.vue'
import WorldMapView from '../views/WorldMapView.vue'
import LoginUserView from '../views/LoginUserView.vue'
import HomeAsideView from '../views/HomeAsideView.vue'
import AcademyView from '../views/AcademyView.vue'
import SocialView from '../views/SocialView.vue'
import AccountView from '../views/AccountView.vue'
import InventoryCharacterView from '../views/InventoryCharacterView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/home',
      name: 'init',
      component: HomeAsideView
    },
    {
      path: '/userLogin',
      name: 'userLogin',
      component: LoginUserView
    },
    {
      path: '/character',
      name: 'character',
      component: CharacterView
    },
    {
      path: '/inventory',
      name: 'inventory',
      component: InventoryCharacterView
    },
    {
      path: '/WorldMap',
      name: 'worldMap',
      component: WorldMapView
    },
    {
      path: '/academy',
      name: 'academy',
      component: AcademyView
    },
    {
      path: '/social',
      name: 'social',
      component: SocialView
    },
    {
      path: '/account',
      name: 'account',
      component: AccountView
    }
  ]
})

export default router
