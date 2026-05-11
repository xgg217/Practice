import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import Layout from "@/layout/index.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      // name: "Home",
      component: Layout,
      meta: {
        title: "首页",
      },
      redirect: {
        name: "home",
      },
      children: [
        {
          path: "/",
          name: "home",
          component: HomeView,
          meta: {
            title: "首页",
          },
        },
      ],
    },
  ],
});

export default router;
