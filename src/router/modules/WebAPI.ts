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

    // #region Canvas
    {
      path: "Canvas",
      // name: "Canvas",
      // component: () => import("@/views/WebAPI/IndexedDB/IndexView.vue"),
      meta: {
        title: "Canvas 画布",
      },

      children: [
        {
          path: "Canvas1",
          name: "Canvas1",
          component: () => import("@/views/WebAPI/Canvas/IndexView1.vue"),
          meta: {
            title: "画布 画笔",
            imgSrc: "",
          },
        },
        {
          path: "Canvas2",
          name: "Canvas2",
          component: () => import("@/views/WebAPI/Canvas/IndexView2.vue"),
          meta: {
            title: "画布 创建方式",
            imgSrc: "",
          },
        },
        {
          path: "Canvas3",
          name: "Canvas3",
          component: () => import("@/views/WebAPI/Canvas/IndexView3.vue"),
          meta: {
            title: "画布 创建方式",
            imgSrc: "",
          },
        },
        {
          path: "CanvasRect",
          name: "CanvasRect",
          component: () => import("@/views/WebAPI/Canvas/Rect.vue"),
          meta: {
            title: "矩形",
            imgSrc: "",
          },
        },
        {
          path: "CanvasBeginPath",
          name: "CanvasBeginPath",
          component: () => import("@/views/WebAPI/Canvas/BeginPath.vue"),
          meta: {
            title: "路径分组BeginPath",
            imgSrc: "",
          },
        },
        {
          path: "CanvasLine",
          name: "CanvasLine",
          component: () => import("@/views/WebAPI/Canvas/Line.vue"),
          meta: {
            title: "直线 折线",
            imgSrc: "",
          },
        },
        {
          path: "CanvasClearRect",
          name: "CanvasClearRect",
          component: () => import("@/views/WebAPI/Canvas/ClearRect.vue"),
          meta: {
            title: "清除画布clearRect",
            imgSrc: "",
          },
        },
        {
          path: "CanvasGrid",
          name: "CanvasGrid",
          component: () => import("@/views/WebAPI/Canvas/Grid.vue"),
          meta: {
            title: "网格线",
            imgSrc: "",
          },
        },
        {
          path: "CanvasCoordinateSystem",
          name: "CanvasCoordinateSystem",
          component: () => import("@/views/WebAPI/Canvas/CoordinateSystem.vue"),
          meta: {
            title: "坐标系",
            imgSrc: "",
          },
        },
        {
          path: "CanvasClosePath",
          name: "CanvasClosePath",
          component: () => import("@/views/WebAPI/Canvas/ClosePath.vue"),
          meta: {
            title: "ClosePath 线条填充与闭合",
            imgSrc: "",
          },
        },
        {
          path: "CanvasText",
          name: "CanvasText",
          component: () => import("@/views/WebAPI/Canvas/Text.vue"),
          meta: {
            title: "文本",
            imgSrc: "",
          },
        },
        {
          path: "CanvasImage",
          name: "CanvasImage",
          component: () => import("@/views/WebAPI/Canvas/Image.vue"),
          meta: {
            title: "图片",
            imgSrc: "",
          },
        },
        {
          path: "CanvasImagesAndAnimations",
          name: "CanvasImagesAndAnimations",
          component: () => import("@/views/WebAPI/Canvas/ImagesAndAnimations.vue"),
          meta: {
            title: "图像与动画",
            imgSrc: "ImagesAndAnimations.webp",
          },
        },
        {
          path: "CanvasCreatePattern",
          name: "CanvasCreatePattern",
          component: () => import("@/views/WebAPI/Canvas/CreatePattern.vue"),
          meta: {
            title: "图像填充",
            imgSrc: "",
          },
        },
        {
          path: "CanvasClip",
          name: "CanvasClip",
          component: () => import("@/views/WebAPI/Canvas/Clip.vue"),
          meta: {
            title: "裁剪",
            imgSrc: "",
          },
        },

        {
          path: "CanvasTranslate",
          name: "CanvasTranslate",
          component: () => import("@/views/WebAPI/Canvas/Translate.vue"),
          meta: {
            title: "图像变换之移动",
            imgSrc: "",
          },
        },
        {
          path: "CanvasScale",
          name: "CanvasScale",
          component: () => import("@/views/WebAPI/Canvas/Scale.vue"),
          meta: {
            title: "图像变换之缩放",
            imgSrc: "",
          },
        },
        {
          path: "CanvasSaveRestore",
          name: "CanvasSaveRestore",
          component: () => import("@/views/WebAPI/Canvas/SaveRestore.vue"),
          meta: {
            title: "保存、重置",
            imgSrc: "",
          },
        },
        {
          path: "CanvasAvatarCroppingAndUploading",
          name: "CanvasAvatarCroppingAndUploading",
          component: () => import("@/views/WebAPI/Canvas/AvatarCroppingAndUploading.vue"),
          meta: {
            title: "头像裁剪上传",
            imgSrc: "",
          },
        },
        {
          path: "CanvasGlobalCompositeOperation",
          name: "CanvasGlobalCompositeOperation",
          component: () => import("@/views/WebAPI/Canvas/GlobalCompositeOperation.vue"),
          meta: {
            title: "图形合成之路径合成",
            imgSrc: "",
          },
        },

        {
          path: "CanvasGlobalCompositeOperationColor",
          name: "CanvasGlobalCompositeOperationColor",
          component: () => import("@/views/WebAPI/Canvas/GlobalCompositeOperationColor.vue"),
          meta: {
            title: "图形合成之颜色合成",
            imgSrc: "",
          },
        },
        {
          path: "CanvasGuaGuaLe",
          name: "CanvasGuaGuaLe",
          component: () => import("@/views/WebAPI/Canvas/GuaGuaLe.vue"),
          meta: {
            title: "刮刮乐",
            imgSrc: "GuaGuaLe.png",
          },
        },

        {
          path: "CanvasDynamicClock",
          name: "CanvasDynamicClock",
          component: () => import("@/views/WebAPI/Canvas/DynamicClock/index.vue"),
          meta: {
            title: "动态时钟",
            imgSrc: "DynamicClock/DynamicClock.gif",
          },
        },
        {
          path: "CanvasZipImage",
          name: "CanvasZipImage",
          component: () => import("@/views/WebAPI/Canvas/ZipImage.vue"),
          meta: {
            title: "图片压缩、上传",
            imgSrc: "",
          },
        },
        {
          path: "CanvasScreenshot",
          name: "CanvasScreenshot",
          component: () => import("@/views/WebAPI/Canvas/Screenshot.vue"),
          meta: {
            title: "页面截图",
            imgSrc: "",
          },
        },
        {
          path: "CanvasFireworks",
          name: "CanvasFireworks",
          component: () => import("@/views/WebAPI/Canvas/Fireworks/index.vue"),
          meta: {
            title: "粒子烟花",
            imgSrc: "",
          },
        },
        {
          path: "CanvasOnlineSignature",
          name: "CanvasOnlineSignature",
          component: () => import("@/views/WebAPI/Canvas/OnlineSignature/index.vue"),
          meta: {
            title: "在线签名、在线画板",
            imgSrc: "OnlineSignature/OnlineSignature.png",
          },
        },
        {
          path: "CanvasDrawingBoard",
          name: "CanvasDrawingBoard",
          component: () => import("@/views/WebAPI/Canvas/DrawingBoard/IndexView.vue"),
          meta: {
            title: "画板",
            imgSrc: "DrawingBoard/画板.png",
          },
        },
      ],
    },
    // #endregion Canvas

    // #region SVG
    {
      path: "SVG",
      // component: () => import("@/views/WebAPI/IndexedDB/IndexView.vue"),
      meta: {
        title: "SVG",
      },

      children: [
        {
          path: "SVGIndex",
          name: "SVGIndex",
          component: () => import("@/views/WebAPI/SVG/IndexView.vue"),
          meta: {
            title: "占位图",
            imgSrc: "",
          },
        },
        {
          path: "SVGFilter1",
          name: "SVGFilter1",
          component: () => import("@/views/WebAPI/SVG/Filter/Filter1.vue"),
          meta: {
            title: "滤镜1",
            imgSrc: "",
          },
        },
        {
          path: "SVGFilterShadow",
          name: "SVGFilterShadow",
          component: () => import("@/views/WebAPI/SVG/Filter/Shadow.vue"),
          meta: {
            title: "shadow 阴影滤镜",
            imgSrc: "Filter/Shadow.png",
          },
        },
        {
          path: "SVGFilterBlur",
          name: "SVGFilterBlur",
          component: () => import("@/views/WebAPI/SVG/Filter/Blur.vue"),
          meta: {
            title: "blur 模糊滤镜",
            imgSrc: "Filter/Blur.png",
          },
        },
        {
          path: "SVGFilterOffset",
          name: "SVGFilterOffset",
          component: () => import("@/views/WebAPI/SVG/Filter/Offset.vue"),
          meta: {
            title: "offset 位移滤镜",
            imgSrc: "Filter/Offset.png",
          },
        },
        {
          path: "SVGSnapsvg",
          name: "SVGSnapsvg",
          component: () => import("@/views/WebAPI/SVG/snapsvg/IndexView.vue"),
          meta: {
            title: "snapsvg第三方库",
            imgSrc: "",
          },
        },
      ],
    },
    // #endregion SVG
  ],
};

export default ROW;
