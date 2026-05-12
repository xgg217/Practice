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
      component: () => import("@/views/WebApi/WebAnimations/IndexView.vue"),
      meta: {
        title: "Web Animations API",
        imgSrc: "",
      },
    },

    {
      path: "WebAnimations2",
      name: "WebAnimations2",
      component: () => import("@/views/WebApi/WebAnimations/IndexView2.vue"),
      meta: {
        title: "Web Animations API 操控",
        imgSrc: "",
      },
    },

    {
      path: "WebAnimations3",
      name: "WebAnimations3",
      component: () => import("@/views/WebApi/WebAnimations/IndexView3.vue"),
      meta: {
        title: "动画之文字雨动画",
        imgSrc: "",
      },
    },
  ],
};

export default ROW;
