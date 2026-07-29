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
      path: "Vitest",
      // name: "ArchitectTestJest",
      // component: () => import("@/views/ArchitectTest/IndexView.vue"),
      meta: {
        title: "Vitest 测试框架",
      },
      // redirect: {
      //   name: "ArchitectTestJestIndex",
      // },
      children: [
        {
          path: "index",
          name: "ArchitectTestJestIndex",
          component: () => import("@/views/ArchitectTest/Vitest/IndexView.vue"),
          meta: {
            title: "首页",
          },
        },
        {
          path: "index2",
          name: "ArchitectTestJestIndex2",
          component: () => import("@/views/ArchitectTest/Vitest/IndexView2/IndexView.vue"),
          meta: {
            title: "基本使用",
          },
        },
        {
          path: "index3",
          name: "ArchitectTestJestIndex3",
          component: () => import("@/views/ArchitectTest/Vitest/IndexView3/IndexView.vue"),
          meta: {
            title: "匹配器",
          },
        },
        {
          path: "index4",
          name: "ArchitectTestJestIndex4",
          component: () => import("@/views/ArchitectTest/Vitest/IndexView4/IndexView.vue"),
          meta: {
            title: "生命周期",
          },
        },
        {
          path: "index5",
          name: "ArchitectTestJestIndex5",
          component: () => import("@/views/ArchitectTest/Vitest/IndexView5/IndexView.vue"),
          meta: {
            title: "生命周期之分组",
          },
        },
        {
          path: "MockFun",
          name: "ArchitectTestJestMockFun",
          component: () => import("@/views/ArchitectTest/Vitest/MockFun/IndexView.vue"),
          meta: {
            title: "模拟函数",
          },
        },
        {
          path: "MockModule",
          name: "ArchitectTestJestMockModule",
          component: () => import("@/views/ArchitectTest/Vitest/MockModule/IndexView.vue"),
          meta: {
            title: "模拟模块",
          },
        },
      ],
    },
  ],
};

export default ROW;
