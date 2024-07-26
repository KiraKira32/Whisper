// 創建一個路由器,傳遞路由配置
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      // whisper index
      path: "/",
      component: () => import("../pages/index.vue"),
      children: [],
    },
    {
      path: "/login",
      component: () => import("../pages/login.vue"),
      children: [],
    },
    {
      path: "/register",
      component: () => import("../pages/register.vue"),
      children: [],
    },
  ],
});

export default router;
