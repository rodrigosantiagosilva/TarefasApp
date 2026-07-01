import { createRouter, createWebHistory } from "@ionic/vue-router";
import { RouteRecordRaw } from "vue-router";
import TabsPage from "../views/TabsPage.vue";
import { useLogin } from "@/composables/useLogin.js";
import LoginPage from "../views/LoginPage.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    // redirect: "/login",
    redirect:"/tap"
  },
  {
    path:"/die",
    component: () => import("@/views/DiePage.vue"),
    meta: { requerLogacao: true }
  },
  {
    path: "/login",
    component: LoginPage,
  },
  {
    path: "/tap",
    component: () => import("../views/Tap1Page.vue"),
  },
  {
    path: "/tab",
    component: () => import("../views/Tab2Page.vue"),
  },
  {
    path: "/cadastro",
    component: () => import("@/views/CadastroPage.vue"),
  },

  {
    path: "/tabs",
    component: TabsPage,
    meta: { requerLogacao: true },
    children: [
      {
        path: "/",
        redirect: "tabs/home",
      },
      {
        path: "home",
        component: () => import("@/views/AlbumPage.vue"),
      },
      {
        path: "conquista",
        component: () => import("@/views/ConquistaPage.vue"),
      },
      {
        path: "perfil",
        component: () => import("@/views/PerfilPage.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  const usuStorage = useLogin();
  const requer = to.meta.requerLogacao === true;
  const logado = usuStorage.Logado.value === true;

  if (requer && !logado) {
    next({
      path: "/login",
      query: { redirect: to.fullPath },
    });
  } else {
    next();
  }
});

export default router;
