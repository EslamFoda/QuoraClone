import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../components/Login.vue'
import Details from '../components/SpaceDetails.vue'
import PostDetails from '../components/PostDetails'
import Related from '../components/Related'
import {projectAuth} from '../firebase/config'

const requireAuth = (to,from,next) => {
  let user = projectAuth.currentUser
  if(!user){
    next({name:'Login'})
  } else {
    next()
  }
}
const requireNoAuth = (to,from ,next)=>{
let user = projectAuth.currentUser
if(user){
  next({name:'Home'})
}else {
  next()
}
}

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    beforeEnter: requireAuth
  },
  {
    path:'/login',
    name:'Login',
    component:Login,
    beforeEnter: requireNoAuth
  },
  {
    path:'/details/:id',
    name:'Details',
    component: Details,
    props: true,
    beforeEnter: requireAuth
  },
  {
   path:'/post/:id',
   name:'PostDetails',
   component: PostDetails,
   props:true,
   beforeEnter: requireAuth
  },
  {
    path:'/related/:id',
    name:'Related',
    component:Related,
    props:true,
    beforeEnter: requireAuth
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
