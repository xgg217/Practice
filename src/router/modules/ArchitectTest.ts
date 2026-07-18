import type { RouteRecordRaw } from "vue-router";

const ROW: RouteRecordRaw = {
  path: "ArchitectTest",
  name: "ArchitectTest",
  // component: () => import("@/views/TestView.vue"),
  meta: {
    title: "测试框架",
  },
  redirect: {
    name: "ArchitectTestIndex",
  },
  children: [
    {
      path: "index",
      name: "ArchitectTestIndex",
      component: () => import("@/views/ArchitectTest/IndexView.vue"),
      meta: {
        title: "测试框架 首页",
      },
    },
    {
      path: "jest",
      // name: "ArchitectTestJest",
      // component: () => import("@/views/ArchitectTest/IndexView.vue"),
      meta: {
        title: "Jest 测试框架",
      },
      // redirect: {
      //   name: "ArchitectTestJestIndex",
      // },
      children: [
        {
          path: "index",
          name: "ArchitectTestJestIndex",
          component: () => import("@/views/ArchitectTest/Jest/IndexView.vue"),
          meta: {
            title: "Jest 测试框架 首页",
          },
        },
        {
          path: "index2",
          name: "ArchitectTestJestIndex2",
          component: () => import("@/views/ArchitectTest/Jest/IndexView2/IndexView.vue"),
          meta: {
            title: "Jest 基本使用",
          },
        },
      ],
    },
  ],
};

export default ROW;
