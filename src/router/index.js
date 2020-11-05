import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

/* Layout */
import Layout from '@/layout'

const routes = [
  {
    path: '/',
    component: Layout,
    children: [
      {
        path: '/',
        name: '最近更新',
        component: () => import("../views/Main/Main.vue")
      },
      {
        path: '/archives',
        name: '档案',
        component: () => import("../views/Archives/Archives.vue")
      },
    ]
  },
  {
    path: '/notes',
    name: '手记',
    component: () => import("../views/Notes/Notes.vue")
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
