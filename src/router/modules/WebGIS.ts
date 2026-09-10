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
      ],
    },
  ],
};

export default ROW;
