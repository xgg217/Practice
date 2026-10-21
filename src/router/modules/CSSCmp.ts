import type { RouteRecordRaw } from "vue-router";

const ROW: RouteRecordRaw = {
  path: "css",
  name: "CSS",
  // component: () => import("@/views/TestView.vue"),
  meta: {
    title: "CSS",
    icon: "BrushFilled",
  },
  redirect: {
    name: "CSSView",
  },
  children: [
    {
      path: "CSSView",
      name: "CSSView",
      component: () => import("@/views/CSS/IndexView.vue"),
      meta: {
        title: "CSS首页",
      },
    },

    {
      path: "BackgroundRepeat1",
      name: "BackgroundRepeat1",
      component: () => import("@/views/CSS/BackgroundView1.vue"),
      meta: {
        title: "background-repeat 重复方式",
      },
    },

    {
      path: "Transform1",
      name: "Transform1",
      component: () => import("@/views/CSS/TransformView1.vue"),
      meta: {
        title: "CSS 变换之 平移",
      },
    },

    {
      path: "Transform2",
      name: "Transform2",
      component: () => import("@/views/CSS/TransformView2.vue"),
      meta: {
        title: "Transform 循环也能动",
      },
    },

    {
      path: "Transition1",
      name: "Transition1",
      component: () => import("@/views/CSS/TransitionView1.vue"),
      meta: {
        title: "CSS 过渡之 过渡函数",
        imgSrc: "",
      },
    },
    {
      path: "Animation1",
      name: "Animation1",
      component: () => import("@/views/CSS/AnimationView1.vue"),
      meta: {
        title: "CSS 动画之 钟摆效果",
        imgSrc: "",
      },
    },
    {
      path: "ThemeSwitchingView1",
      name: "ThemeSwitchingView1",
      component: () => import("@/views/CSS/ThemeSwitchingView1.vue"),
      meta: {
        title: "CSS主题切换",
        imgSrc: "",
      },
    },
  ],
};

export default ROW;
