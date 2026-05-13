import type { RouteRecordRaw } from "vue-router";

const ROW: RouteRecordRaw = {
  path: "html",
  name: "HTML",
  // component: () => import("@/views/TestView.vue"),
  meta: {
    title: "HTML",
  },
  redirect: {
    name: "HTMLView",
  },
  children: [
    {
      path: "HTMLView",
      name: "HTMLView",
      component: () => import("@/views/HTML/IndexView.vue"),
      meta: {
        title: "HTML首页",
      },
    },
  ],
};

export default ROW;
