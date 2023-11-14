import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CharacterView from '../views/CharacterView.vue'
import NewCharacterView from '../views/NewCharacterView.vue'
import WorldMapView from '../views/WorldMapView.vue'
import AcademyView from '../views/AcademyView.vue'
import SocialView from '../views/SocialView.vue'
import AccountView from '../views/AccountView.vue'
import InventoryCharacterView from '../views/InventoryCharacterView.vue'
import NewAccountView from '../views/NewAccountView.vue'
import SkillCharacterView from '../views/SkillCharacterView.vue'
import HistoryCharacterView from '../views/HistoryCharacterView.vue'

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
      path: '/newCharacter',
      name: 'newCharacter',
      component: NewCharacterView
    },
    {
      path: '/inventory',
      name: 'inventory',
      component: InventoryCharacterView
    },
    {
      path: '/skills',
      name: 'skills',
      component: SkillCharacterView
    },
    {
      path: '/history',
      name: 'history',
      component: HistoryCharacterView
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
    },
    {
      path: '/NewAccount',
      name: 'newAccount',
      component: NewAccountView
    }
  ]
})

export default router
