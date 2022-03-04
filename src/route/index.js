import { createRouter, createWebHistory } from "vue-router";
import { useStore } from "vuex";
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

router.beforeEach(async (to, from, next) => {
  const token = window.localStorage.getItem("token") || false;
  if (
    to.meta.requiresAuth &&
    !token &&
    (to.name !== "login" || to.name !== "register")
  ) {
    next({ name: "login" });
  }
  next();
});

export default router;
