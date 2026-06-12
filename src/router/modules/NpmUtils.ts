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

    // #region PQueue 队列
    {
      path: "PQueue",
      // name: "PQueue",
      // component: () => import("@/views/NpmUtils/PQueue/IndexView.vue"),
      meta: {
        title: "请求队列 PQueue",
      },

      children: [
        {
          path: "PQueue1",
          name: "PQueue1",
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
      ],
    },

    // {
    //   path: "PQueue",
    //   name: "PQueue",
    //   component: () => import("@/views/NpmUtils/PQueue/IndexView.vue"),
    //   meta: {
    //     title: "请求队列 PQueue",
    //   },
    // },

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
    // #endregion PQueue 队列

    // #region ECharts
    {
      path: "ECharts",
      // name: "PQueue",
      // component: () => import("@/views/NpmUtils/PQueue/IndexView.vue"),
      meta: {
        title: "ECharts",
      },

      children: [
        {
          path: "EChartsIndex",
          name: "EChartsIndex",
          component: () => import("@/views/NpmUtils/ECharts/IndexView.vue"),
          meta: {
            title: "ECharts 首页",
            imgSrc: "",
          },
        },
        {
          path: "EChartsSetOption",
          name: "EChartsSetOption",
          component: () => import("@/views/NpmUtils/ECharts/SetOption/IndexView.vue"),
          meta: {
            title: "setOption 示例",
            imgSrc: "",
          },
        },
        {
          path: "EChartsSetOptionAxis",
          name: "EChartsSetOptionAxis",
          component: () => import("@/views/NpmUtils/ECharts/SetOptionAxis/IndexView.vue"),
          meta: {
            title: "setOption 轴体",
            imgSrc: "",
          },
        },
        {
          path: "EChartsSetOptionDataZoom",
          name: "EChartsSetOptionDataZoom",
          component: () => import("@/views/NpmUtils/ECharts/SetOptionDataZoom/IndexView.vue"),
          meta: {
            title: "DataZoom 区域缩放",
            imgSrc: "",
          },
        },
        {
          path: "EChartsSetOptionTooltiop",
          name: "EChartsSetOptionTooltiop",
          component: () => import("@/views/NpmUtils/ECharts/SetOptionTooltiop/IndexView.vue"),
          meta: {
            title: "tooltiop 提示框",
            imgSrc: "",
          },
        },
        {
          path: "EChartsDataset",
          name: "EChartsDataset",
          component: () => import("@/views/NpmUtils/ECharts/Dataset/IndexView.vue"),
          meta: {
            title: "dataset 数据集",
            imgSrc: "",
          },
        },
        {
          path: "EChartsVisualMap",
          name: "EChartsVisualMap",
          component: () => import("@/views/NpmUtils/ECharts/visualMap/IndexView.vue"),
          meta: {
            title: "视觉映射组件",
            imgSrc: "",
          },
        },
        {
          path: "EChartsLine",
          name: "EChartsLine",
          component: () => import("@/views/NpmUtils/ECharts/line/IndexView.vue"),
          meta: {
            title: "折线图",
            imgSrc: "",
          },
        },
      ],
    },
    // #endregion ECharts

    // #region RXJS
    {
      path: "RxJS",
      // name: "RXJS",
      // component: () => import("@/views/NpmUtils/RXJS/IndexView.vue"),
      meta: {
        title: "RxJS",
      },
      children: [
        {
          path: "RxJS1",
          name: "RxJS1",
          component: () => import("@/views/NpmUtils/RXJS/IndexView.vue"),
          meta: {
            title: "RxJS 首页",
          },
        },

        {
          path: "RxJSCreation",
          name: "RxJSCreation",
          component: () => import("@/views/NpmUtils/RXJS/CreationView.vue"),
          meta: {
            title: "RxJS 创建 Creation",
          },
        },

        {
          path: "RxJSTransformation",
          name: "RxJSTransformation",
          component: () => import("@/views/NpmUtils/RXJS/TransformationView.vue"),
          meta: {
            title: "RxJS 转换 Transformation.md",
          },
        },

        {
          path: "RxJSFiltering",
          name: "RxJSFiltering",
          component: () => import("@/views/NpmUtils/RXJS/FilteringView.vue"),
          meta: {
            title: "RxJS 过滤 Filtering",
          },
        },
        {
          path: "HigherOrderAndFlattening",
          name: "HigherOrderAndFlattening",
          component: () => import("@/views/NpmUtils/RXJS/HigherOrderAndFlattening/IndexView.vue"),
          meta: {
            title: "高阶操作符",
          },
        },
      ],
    },
    // #endregion RXJS

    {
      path: "PDF",
      name: "PDF",
      component: () => import("@/views/NpmUtils/PDF/IndexView.vue"),
      meta: {
        title: "PDF",
      },
    },
  ],
};

export default ROW;
