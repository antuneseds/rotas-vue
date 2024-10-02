import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProductDetailView from '@/views/ProductDetailView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/produto/:id',
      name: 'ProductDetailView',
      component: ProductDetailView,
      props: true
    },
    {
      path: '/about',
      name: 'AboutView',
      component: () => import('../views/AboutView.vue')
    },
  ]
})

export default router
