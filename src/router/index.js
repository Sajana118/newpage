import { createRouter, createWebHistory } from 'vue-router'
import HomePage from "@/components/homePage.vue";
import firstOne from "@/components/firstOne.vue";
import secondOne from "@/components/secondOne.vue";
import  thirdOne from "@/components/thirdOne.vue";
import fourthOne from "@/components/fourthOne.vue";
import fifthOne from "@/components/fifthOne.vue";
import sixthOne from "@/components/sixthOne.vue";
import seventhOne from "@/components/seventhOne.vue";



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
  {
    path: '/fifthOne',
    name: 'fifthOne',
    component: fifthOne
  },
  {
    path: '/sixthOne',
    name: 'sixthOne',
    component: sixthOne
  },
  {
    path: '/seventhOne',
    name: 'seventhOne',
    component: seventhOne
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
