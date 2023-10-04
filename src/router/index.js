import { createRouter, createWebHistory } from 'vue-router'
import HomePage from "@/components/homePage.vue";
import reservation from "@/components/reservationPage.vue";

const routes = [
  {
    path: '/',
    name: 'homePage',
    component: HomePage
  },
  {
    path: '/reservationPage',
    name: 'reservation',
    component: reservation
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
