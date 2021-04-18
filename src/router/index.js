import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'Login',
    component: () =>import('../views/login')
  },
  {
    path:'/',
    component: () =>import('../views/home'),
    children:[
      {
        path:'/article',
        name:'article',
        component: () =>import('../views/article')
      },
      {
        path:'/image',
        name:'image',
        component: ()=>import('../views/image')
      }

    ]
  },
  

]

const router = new VueRouter({
  routes
})

export default router

