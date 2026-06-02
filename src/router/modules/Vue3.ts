import type { RouteRecordRaw } from "vue-router";

const ROW: RouteRecordRaw = {
  path: "Vue3",
  name: "Vue3",
  meta: {
    title: "Vue3 学习",
  },
  redirect: {
    name: "NpmUtilsIndexView",
  },
  children: [
    {
      path: "Vue3IndexView",
      name: "Vue3IndexView",
      component: () => import("@/views/Vue3/IndexView.vue"),
      meta: {
        title: "首页",
      },
    },
    {
      path: "Vue3MarkRaw",
      name: "Vue3MarkRaw",
      component: () => import("@/views/Vue3/MarkRaw.vue"),
      meta: {
        title: "markRaw 学习",
      },
    },
  ],
};

export default ROW;
