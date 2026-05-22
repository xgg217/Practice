import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import Layout from "@/layout/IndexView.vue";
import HTML from "./modules/HTMLCmp";
import CSS from "./modules/CSSCmp";
import DesignPatternsAndAlgorithms from "./modules/DesignPatternsAndAlgorithms";
import custom from "./modules/custom";
import WebAPI from "./modules/WebAPI";
import NpmUtils from "./modules/NpmUtils";
import emitter from "@/mitt";

export const routes = [
  {
    path: "/",
    // name: "Home",
    component: Layout,
    redirect: {
      name: "Home",
    },

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
          title: "测试菜单",
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

      // 设计模式、算法、数据结构
      DesignPatternsAndAlgorithms,

      // 第三方库使用
      NpmUtils,

      // 自定义项目
      custom,
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

router.beforeEach((to, from, next) => {
  // 设置标题
  document.title = to.meta.title as string;

  console.log(to);
  {
    // 只有问卷调查-组件市场才需要
    // 根据路由切换组件
    if (to.path.includes("/Custom/WenjuanMaterials") && to.name) {
      // 在仓库中处理
      emitter.emit("VIEW:custom_WenjuanMaterials", to.name as string);
    }
  }

  next();
});

export default router;
