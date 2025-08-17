import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/features/auth/LoginView.vue'),
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('@/features/auth/RegisterView.vue'),
    },
    {
      path: '/my-tasks',
      name: 'my-tasks',
      component: () => import('@/features/tasks/MyTasksView.vue'),
      meta: { requiresAuth: true } // Indicates this route requires authentication
    },
  ],
});

export default router;