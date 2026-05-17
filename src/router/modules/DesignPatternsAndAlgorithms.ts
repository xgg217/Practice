import type { RouteRecordRaw } from "vue-router";

const ROW: RouteRecordRaw = {
  path: "DesignPatternsAndAlgorithms",
  name: "DesignPatternsAndAlgorithms",
  // component: () => import("@/views/TestView.vue"),
  meta: {
    title: "设计模式、算法、数据结构",
  },
  redirect: {
    name: "DesignPatternsAndAlgorithmsIndexView",
  },
  children: [
    {
      path: "DesignPatternsAndAlgorithmsIndexView",
      name: "DesignPatternsAndAlgorithmsIndexView",
      component: () => import("@/views/DesignPatternsAndAlgorithms/IndexView.vue"),
      meta: {
        title: "首页",
      },
    },

    // #region 设计模式
    {
      path: "DesignPattern",
      name: "DesignPattern",
      meta: {
        title: "设计模式",
      },

      children: [
        {
          path: "index",
          name: "DesignPatternIndex",
          component: () =>
            import("@/views/DesignPatternsAndAlgorithms/DesignPattern/IndexView.vue"),
          meta: {
            title: "首页",
          },
        },
        {
          path: "PublishSubscribe",
          name: "PublishSubscribe",
          component: () =>
            import("@/views/DesignPatternsAndAlgorithms/DesignPattern/PublishSubscribe/IndexView.vue"),
          meta: {
            title: "发布订阅模式",
            imgSrc: "",
          },
        },
      ],
    },
    // #endregion

    // #region 算法
    {
      path: "Algorithm",
      name: "Algorithm",
      meta: {
        title: "算法",
      },

      children: [
        {
          path: "index",
          name: "AlgorithmIndex",
          component: () => import("@/views/DesignPatternsAndAlgorithms/Algorithm/IndexView.vue"),
          meta: {
            title: "概述",
            imgSrc: "",
          },
        },
        {
          path: "AlgorithmArrayBinarySearch",
          name: "AlgorithmArrayBinarySearch",
          component: () =>
            import("@/views/DesignPatternsAndAlgorithms/Algorithm/Array/BinarySearch.vue"),
          meta: {
            title: "数组之二分查找",
            imgSrc: "",
          },
        },
        {
          path: "AlgorithmArrayInterpolationSearch",
          name: "AlgorithmArrayInterpolationSearch",
          component: () =>
            import("@/views/DesignPatternsAndAlgorithms/Algorithm/Array/InterpolationSearch.vue"),
          meta: {
            title: "数组之插值查找",
            imgSrc: "",
          },
        },
        {
          path: "AlgorithmArrayBubbleSort",
          name: "AlgorithmArrayBubbleSort",
          component: () =>
            import("@/views/DesignPatternsAndAlgorithms/Algorithm/Array/BubbleSort.vue"),
          meta: {
            title: "数组之冒泡排序",
            imgSrc: "",
          },
        },
        {
          path: "AlgorithmArraySelectionSort",
          name: "AlgorithmArraySelectionSort",
          component: () =>
            import("@/views/DesignPatternsAndAlgorithms/Algorithm/Array/SelectionSort.vue"),
          meta: {
            title: "数组之选择排序",
            imgSrc: "",
          },
        },
        {
          path: "AlgorithmArrayInsertionSort",
          name: "AlgorithmArrayInsertionSort",
          component: () =>
            import("@/views/DesignPatternsAndAlgorithms/Algorithm/Array/InsertionSort.vue"),
          meta: {
            title: "数组之插入排序",
            imgSrc: "",
          },
        },
      ],
    },
    // #endregion
  ],
};

export default ROW;
