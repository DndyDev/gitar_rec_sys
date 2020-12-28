import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import GuitarEdit from "../components/GuitarEdit";


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },

  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  },
  {path: '/reg', component:() => import('../components/CardRegistration.vue') },
  {path: '/questions', component:() => import('../views/RecommendedSystem.vue') },
  {path:'/guitar', component:() => import('../components/GuitarList.vue')},
  {path:'/guitar/:id', name:'edit',component: () => import('../components/GuitarEdit')},
  {path:'/guitar/map', name:'map',component: () => import('../../public/guitarMap.html')},

]

const router = new VueRouter({
  routes
})

export default router
