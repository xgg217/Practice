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
      ],
    },
  ],
};

export default ROW;
