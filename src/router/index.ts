import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import Layout from "@/layout/IndexView.vue";
import HTML from "./modules/HTMLs";
import CSS from "./modules/CSSs";
import WebAPI from "./modules/WebAPI";
import NpmUtils from "./modules/NpmUtils";

export const routes = [
  {
    path: "/",
    // name: "Home",
    component: Layout,

    children: [
      {
        path: "hone",
        name: "Home",
        component: HomeView,
        meta: {
          title: "首页",
        },
      },
      {
        path: "test",
        name: "Test",
        component: () => import("@/views/TestView.vue"),
        meta: {
          title: "测试",
        },
      },
      {
        path: "test2",
        // component: () => import("@/views/TestView.vue"),
        meta: {
          title: "测试子菜单",
        },
        children: [
          {
            path: "TestView",
            name: "TestView",
            component: () => import("@/views/Test/TestView.vue"),
            meta: {
              title: "子菜单1-1",
            },
          },
          {
            path: "TestView2",
            name: "TestView2",
            component: () => import("@/views/Test/TestView2.vue"),
            meta: {
              title: "子菜单1-2",
            },
          },
        ],
      },

      // html
      HTML,

      // css
      CSS,

      // webapi
      WebAPI,

      // npm utils
      NpmUtils,
    ],
  },
  {
    path: "/404",
    component: () => import("@/views/404View.vue"),
    meta: {
      title: "404",
    },
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
