import { createRouter, createWebHistory } from '@ionic/vue-router'
import { RouteRecordRaw } from 'vue-router'
import TabsPage from '../views/TabsPage.vue'
import { useLogin } from '@/composables/useLogin.js'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    component: () => import('@/views/LoginPage.vue')
  },
  {
    path: '/cadastro',
    component: () => import('@/views/CadastroPage.vue')
  },
  {
    path: '/tabs',
    component: TabsPage,
    meta:{requerLogacao:true},
    children: [
      {
        path: '/',
        redirect: 'tabs/home'
      },
      {
        path: 'home',
        component: () => import('@/views/Tab1Page.vue')
      },
      {
        path: 'tab2',
        component: () => import('@/views/Tab2Page.vue')
      },
      {
        path: 'tab3',
        component: () => import('@/views/Tab3Page.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  const usuStorage = useLogin()
  const requer = to.meta.requerLogacao === true
  const logado = usuStorage.Logado.value === true

  if (requer && !logado) {
    next({
      path: '/login',
      query: { redirect: to.fullPath }
    })
  } else {
    next()
  }
})

export default router