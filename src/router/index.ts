import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/todo",
      name: "todo app",
      component: () => import("../views/TodoApp.vue"),
    },
  ],
});

export default router;
