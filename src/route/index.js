import { createRouter, createWebHistory } from "vue-router";
import Home from "@/pages/Home.vue";
import Login from "@/components/Login.vue";
import Register from "@/components/Register.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
    meta: {
      name: "home",
      layout: "Default",
      requiresAuth: true,
    },
  },
  {
    path: "/home",
    redirect: {
      name: "home",
    },
  },
  {
    path: "/register",
    name: "register",
    component: Register,
    meta: {
      layout: "Auth",
      title: "Đăng ký tải khoản",
    },
  },
  {
    path: "/login",
    name: "login",
    component: Login,
    meta: {
      layout: "Auth",
      title: "Đăng nhập tài khoản",
    },
  },
];

const router = createRouter({
  routes,
  history: createWebHistory(),
});

router.beforeEach((to, from) => {
  if (to.meta.requiresAuth) {
    return {
      name: "login",
      query: "",
    };
  }
});

export default router;
