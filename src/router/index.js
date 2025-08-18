import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import { authService } from "@/services/authService";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: "/", name: "home", component: HomeView },
    {
      path: "/login",
      name: "login",
      component: () => import("@/features/auth/LoginView.vue"),
    },
    {
      path: "/register",
      name: "register",
      component: () => import("@/features/auth/RegisterView.vue"),
    },
    {
      path: "/my-tasks",
      name: "my-tasks",
      component: () => import("@/features/tasks/MyTasksView.vue"),
      meta: { requiresAuth: true },
    },
  ],
});

// ✅ Navigation Guard
router.beforeEach((to, from, next) => {
  const isAuth = authService.isAuthenticated();

  if (to.meta.requiresAuth && !isAuth) {
    // Si no está logueado, redirigir a login
    next("/login");
  } else if ((to.name === "login" || to.name === "register") && isAuth) {
    // Si ya está logueado, no permitir login/register
    next("/my-tasks");
  } else {
    next();
  }
});

export default router;
