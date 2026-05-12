import type { RouteRecordRaw } from "vue-router";

const ROW: RouteRecordRaw = {
  path: "NpmUtils",
  name: "NpmUtils",
  // component: () => import("@/views/TestView.vue"),
  meta: {
    title: "npm 工具类",
  },
  redirect: {
    name: "NpmUtilsIndexView",
  },
  children: [
    {
      path: "NpmUtilsIndexView",
      name: "NpmUtilsIndexView",
      component: () => import("@/views/NpmUtils/IndexView.vue"),
      meta: {
        title: "npm 工具类",
      },
    },

    {
      path: "axios",
      name: "axios",
      component: () => import("@/views/NpmUtils/Axios/IndexView.vue"),
      meta: {
        title: "axios 批量 发送请求 暂停 取消",
      },
    },

    {
      path: "axios2",
      name: "axios2",
      component: () => import("@/views/NpmUtils/Axios/IndexView2.vue"),
      meta: {
        title: "axios 批量(class版) 发送请求 暂停 取消",
      },
    },

    {
      path: "PQueue",
      name: "PQueue",
      component: () => import("@/views/NpmUtils/PQueue/IndexView.vue"),
      meta: {
        title: "请求队列 PQueue",
      },
    },

    {
      path: "PQueue2",
      name: "PQueue2",
      component: () => import("@/views/NpmUtils/PQueue/IndexView2.vue"),
      meta: {
        title: "PQueue 与 下载+压缩",
      },
    },

    {
      path: "PQueue3",
      name: "PQueue3",
      component: () => import("@/views/NpmUtils/PQueue/IndexView3.vue"),
      meta: {
        title: "PQueue 任务队列模仿",
      },
    },

    {
      path: "PQueue4",
      name: "PQueue4",
      component: () => import("@/views/NpmUtils/PQueue/IndexView4.vue"),
      meta: {
        title: "PQueue 任务队列 自定义",
      },
    },

    {
      path: "PLimit",
      name: "PLimit",
      component: () => import("@/views/NpmUtils/PLimit/IndexView1.vue"),
      meta: {
        title: "并发任务控制 自己实现",
      },
    },

    {
      path: "PLimit2",
      name: "PLimit2",
      component: () => import("@/views/NpmUtils/PLimit/IndexView2.vue"),
      meta: {
        title: "并发任务控制 p-limit模拟",
      },
    },
  ],
};

export default ROW;
