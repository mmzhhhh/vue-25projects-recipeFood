import DetailsView from '@/views/DetailsView.vue'
import FavoritesView from '@/views/FavoritesView.vue'
import HomeView from '@/views/HomeView.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
   {path:'/',
    name:'home',
    component:HomeView
   },
   {path:'/favorites',
    name:'favorites',
    component:FavoritesView
   },
   {path:'/recipe-item/:id',
    name:'recipe-item',
    component:DetailsView
   },
  ]
})

export default router
