import type { RouteRecordRaw } from "vue-router";

const ROW: RouteRecordRaw = {
  path: "WebGIS",
  name: "WebGIS",
  meta: {
    title: "WebGIS",
    icon: "LocationFilled",
  },
  redirect: {
    name: "WebGISIndex",
  },
  children: [
    {
      path: "index",
      name: "WebGISIndex",
      component: () => import("@/views/WebGIS/IndexView.vue"),
      meta: {
        title: "首页",
      },
    },
    {
      path: "OpenLayers",
      // name: "openlayers",
      // component: () => import("@/views/WebGIS/OpenLayers/IndexView.vue"),
      meta: {
        title: "OpenLayers 框架",
      },

      children: [
        {
          path: "index",
          name: "OpenLayersIndex",
          component: () => import("@/views/WebGIS/OpenLayers/IndexView.vue"),
          meta: {
            title: "首页",
          },
        },
        {
          path: "index2",
          name: "OpenLayersIndex2",
          component: () => import("@/views/WebGIS/OpenLayers/IndexView2.vue"),
          meta: {
            title: "基本使用",
          },
        },
        {
          path: "index3",
          name: "OpenLayersIndex3",
          component: () => import("@/views/WebGIS/OpenLayers/IndexView3.vue"),
          meta: {
            title: "加载天地图",
          },
        },
        {
          path: "index4",
          name: "OpenLayersIndex4",
          component: () => import("@/views/WebGIS/OpenLayers/IndexView4.vue"),
          meta: {
            title: "GeoTIFF数据-本地数据",
          },
        },
        {
          path: "index5",
          name: "OpenLayersIndex5",
          component: () => import("@/views/WebGIS/OpenLayers/IndexView5.vue"),
          meta: {
            title: "GeoTIFF数据-在线加载",
          },
        },
        {
          path: "index6",
          name: "OpenLayersIndex6",
          component: () => import("@/views/WebGIS/OpenLayers/IndexView6.vue"),
          meta: {
            title: "ImageStatic数据",
          },
        },
        {
          path: "index7",
          name: "OpenLayersIndex7",
          component: () => import("@/views/WebGIS/OpenLayers/IndexView7.vue"),
          meta: {
            title: "GeoJSON数据",
          },
        },
        {
          path: "index8",
          name: "OpenLayersIndex8",
          component: () => import("@/views/WebGIS/OpenLayers/IndexView8.vue"),
          meta: {
            title: "异步加载 GeoJSON数据",
          },
        },
        {
          path: "index9",
          name: "OpenLayersIndex9",
          component: () => import("@/views/WebGIS/OpenLayers/IndexView9.vue"),
          meta: {
            title: "组件方法事件",
          },
        },
        {
          path: "index10",
          name: "OpenLayersIndex10",
          component: () => import("@/views/WebGIS/OpenLayers/IndexView10.vue"),
          meta: {
            title: "设置样式",
          },
        },
        {
          path: "index11",
          name: "OpenLayersIndex11",
          component: () => import("@/views/WebGIS/OpenLayers/IndexView11.vue"),
          meta: {
            title: "设置样式-动态",
          },
        },
        {
          path: "index12",
          name: "OpenLayersIndex12",
          component: () => import("@/views/WebGIS/OpenLayers/IndexView12.vue"),
          meta: {
            title: "设置样式-动态背景颜色",
          },
        },
        {
          path: "index13",
          name: "OpenLayersIndex13",
          component: () => import("@/views/WebGIS/OpenLayers/IndexView13.vue"),
          meta: {
            title: "WKT 数据",
          },
        },
        {
          path: "index14",
          name: "OpenLayersIndex14",
          component: () => import("@/views/WebGIS/OpenLayers/IndexView14.vue"),
          meta: {
            title: "自定义矢量数据",
          },
        },
        {
          path: "index15",
          name: "OpenLayersIndex15",
          component: () => import("@/views/WebGIS/OpenLayers/IndexView15.vue"),
          meta: {
            title: "添加icon图标-自定义矢量数据",
          },
        },
        {
          path: "index16",
          name: "OpenLayersIndex16",
          component: () => import("@/views/WebGIS/OpenLayers/IndexView16.vue"),
          meta: {
            title: "添加icon图标-GeoJSON数据",
          },
        },
        {
          path: "index17",
          name: "OpenLayersIndex16",
          component: () => import("@/views/WebGIS/OpenLayers/IndexView17.vue"),
          meta: {
            title: "Overlay 叠加层",
          },
        },
      ],
    },
  ],
};

export default ROW;
