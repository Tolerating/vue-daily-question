import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'index',
      component: ()=>import("../views/IndexView.vue")
    },
    {
      path: '/t1',
      name: 'kuanxuan',
      component: () => import('../views/KuangXuan.vue')
    },
    {
      path: '/t2',
      name: 'virtualList',
      component: () => import('../views/virtualList.vue')
    }
  ]
})

export default router
