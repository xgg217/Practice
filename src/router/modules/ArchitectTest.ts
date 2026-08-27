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
          name: "ArchitectTestIndex",
          component: () => import("@/views/ArchitectTest/Vitest/IndexView.vue"),
          meta: {
            title: "首页",
          },
        },
        {
          path: "index2",
          name: "ArchitectTestIndex2",
          component: () => import("@/views/ArchitectTest/Vitest/IndexView2/IndexView.vue"),
          meta: {
            title: "基本使用",
          },
        },
        {
          path: "index3",
          name: "ArchitectTestIndex3",
          component: () => import("@/views/ArchitectTest/Vitest/IndexView3/IndexView.vue"),
          meta: {
            title: "匹配器",
          },
        },
        {
          path: "index4",
          name: "ArchitectTestIndex4",
          component: () => import("@/views/ArchitectTest/Vitest/IndexView4/IndexView.vue"),
          meta: {
            title: "生命周期",
          },
        },
        {
          path: "index5",
          name: "ArchitectTestIndex5",
          component: () => import("@/views/ArchitectTest/Vitest/IndexView5/IndexView.vue"),
          meta: {
            title: "生命周期之分组",
          },
        },
        {
          path: "MockFunctions",
          name: "ArchitectTestMockFunctions",
          component: () => import("@/views/ArchitectTest/Vitest/MockFunctions/IndexView.vue"),
          meta: {
            title: "模拟函数",
          },
        },
        {
          path: "MockModule",
          name: "ArchitectTestMockModule",
          component: () => import("@/views/ArchitectTest/Vitest/MockModule/IndexView.vue"),
          meta: {
            title: "模拟模块",
          },
        },
        {
          path: "Browser1",
          name: "ArchitectTestBrowser1",
          component: () => import("@/views/ArchitectTest/Vitest/Browser1/IndexView.vue"),
          meta: {
            title: "浏览器模式",
          },
        },
      ],
    },
  ],
};

export default ROW;
