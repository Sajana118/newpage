import { createRouter, createWebHistory } from 'vue-router'
import HomePage from "@/components/homePage.vue";
import firstOne from "@/components/firstOne.vue";
import secondOne from "@/components/secondOne.vue";
import  thirdOne from "@/components/thirdOne.vue";
import fourthOne from "@/components/fourthOne.vue";



const routes = [
  {
    path: '/',
    name: 'homePage',
    component: HomePage
  },

  {
    path: '/firstOne',
    name: 'firstOne',
    component: firstOne
  },

  {
    path: '/secondOne',
    name: 'secondOne',
    component: secondOne
  },
  {
    path: '/thirdOne',
    name: 'thirdOne',
    component: thirdOne
  },

  {
    path: '/fourthOne',
    name: 'fourthOne',
    component: fourthOne
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
