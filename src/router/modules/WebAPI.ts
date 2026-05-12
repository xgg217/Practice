import type { RouteRecordRaw } from "vue-router";

const ROW: RouteRecordRaw = {
  path: "webapi",
  name: "WebAPI",
  // component: () => import("@/views/TestView.vue"),
  meta: {
    title: "Web API",
  },
  redirect: {
    name: "WebAPIView",
  },
  children: [
    {
      path: "WebAPIView",
      name: "WebAPIView",
      component: () => import("@/views/WebAPI/IndexView.vue"),
      meta: {
        title: "Web API 首页",
      },
    },
    {
      path: "WebWorker1",
      name: "WebWorker1",
      component: () => import("@/views/WebAPI/WebWorker/IndexView.vue"),
      meta: {
        title: "Web Worker",
      },
    },
    {
      path: "WebWorker2",
      name: "WebWorker2",
      component: () => import("@/views/WebAPI/WebWorker/FileView.vue"),
      meta: {
        title: "Web Worker之文件分片",
      },
    },

    {
      path: "WebAnimations1",
      name: "WebAnimations1",
      component: () => import("@/views/WebAPI/WebAnimations/IndexView.vue"),
      meta: {
        title: "Web Animations API",
        imgSrc: "",
      },
    },

    {
      path: "WebAnimations2",
      name: "WebAnimations2",
      component: () => import("@/views/WebAPI/WebAnimations/IndexView2.vue"),
      meta: {
        title: "Web Animations API 操控",
        imgSrc: "",
      },
    },

    {
      path: "WebAnimations3",
      name: "WebAnimations3",
      component: () => import("@/views/WebAPI/WebAnimations/IndexView3.vue"),
      meta: {
        title: "动画之文字雨动画",
        imgSrc: "",
      },
    },

    {
      path: "IntersectionObserver1",
      name: "IntersectionObserver1",
      component: () => import("@/views/WebAPI/IntersectionObserver/IndexView.vue"),
      meta: {
        title: "IntersectionObserver 元素可见性",
        imgSrc: "",
      },
    },

    {
      path: "IntersectionObserver2",
      name: "IntersectionObserver2",
      component: () => import("@/views/WebAPI/IntersectionObserver/index2/IndexView.vue"),
      meta: {
        title: "IntersectionObserver 图片懒加载",
        imgSrc: "",
      },
    },

    {
      path: "fetch",
      name: "fetch",
      component: () => import("@/views/WebAPI/Fetch/IndexView.vue"),
      meta: {
        title: "fetch",
      },
    },

    {
      path: "fetch2",
      name: "fetch2",
      component: () => import("@/views/WebAPI/Fetch/IndexView2.vue"),
      meta: {
        title: "fetch 基本使用",
      },
    },

    {
      path: "RunTask",
      name: "RunTask",
      component: () => import("@/views/WebAPI/RunTask.vue"),
      meta: {
        title: "RunTask 耗时任务，页面不卡顿",
      },
    },

    {
      path: "IndexedDB",
      name: "IndexedDB",
      component: () => import("@/views/WebAPI/IndexedDB/IndexView.vue"),
      meta: {
        title: "IndexedDB",
      },
    },

    // {
    //   path: "fetch5",
    //   name: "WebApiCollectionFetch5",
    //   component: () => import("@/views/WebApi/Collection/AJAX/index5.vue"),
    //   meta: {
    //     title: "fetch",
    //   },
    // },
    // {
    //   path: "fetch3",
    //   name: "WebApiCollectionFetch3",
    //   component: () => import("@/views/WebApi/Collection/AJAX/index3.vue"),
    //   meta: {
    //     title: "请求队列 PQueue",
    //   },
    // },
    // {
    //   path: "fetch6",
    //   name: "WebApiCollectionFetch6",
    //   component: () => import("@/views/WebApi/Collection/AJAX/index6.vue"),
    //   meta: {
    //     title: "PQueue 与 下载+压缩",
    //   },
    // },
  ],
};

export default ROW;
