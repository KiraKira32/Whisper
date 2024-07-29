// 創建一個路由器,傳遞路由配置
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      // whisper index
      path: "/login",
      name: "Login",
      component: () => import("../pages/PageLogin.vue"),
      children: [],
    },
    {
      path: "/register",
      component: () => import("../pages/PageRegister.vue"),
      children: [],
    },
    {
      path: "/",
      redirect: "/login",
    },
  ],
});

export default router;
