import type { RouteRecordRaw } from "vue-router";

const ROW: RouteRecordRaw = {
  path: "BrowserPlugin",
  name: "BrowserPlugin",
  // component: () => import("@/views/TestView.vue"),
  meta: {
    title: "浏览器插件",
  },
  redirect: {
    name: "CSSView",
  },
  children: [
    {
      path: "index",
      name: "BrowserPluginIndex",
      component: () => import("@/views/BrowserPlugin/IndexView.vue"),
      meta: {
        title: "浏览器插件 首页",
      },
    },

    {
      path: "ContentScripts",
      name: "BrowserPluginContentScripts",
      component: () => import("@/views/BrowserPlugin/ContentScripts/IndexView.vue"),
      meta: {
        title: "静态声明注入-获取图片真实大小信息",
      },
    },
    {
      path: "index3",
      name: "BrowserPluginIndex3",
      component: () => import("@/views/BrowserPlugin/IndexView3/IndexView.vue"),
      meta: {
        title: "编程方式注入-设置浏览器背景颜色",
      },
    },
    {
      path: "ServiceWorker",
      name: "BrowserPluginServiceWorker",
      component: () => import("@/views/BrowserPlugin/ServiceWorker/IndexView.vue"),
      meta: {
        title: "Service Worker",
      },
    },
    {
      path: "ServiceWorker2",
      name: "BrowserPluginServiceWorker2",
      component: () => import("@/views/BrowserPlugin/ServiceWorker2/IndexView.vue"),
      meta: {
        title: "合并窗口",
      },
    },
    {
      path: "SendMessage",
      name: "BrowserPluginSendMessage",
      component: () => import("@/views/BrowserPlugin/SendMessage/IndexView.vue"),
      meta: {
        title: "发送消息",
      },
    },
    {
      path: "SendMessageSetColor",
      name: "BrowserPluginSendMessageSetColor",
      component: () => import("@/views/BrowserPlugin/SendMessageSetColor/IndexView.vue"),
      meta: {
        title: "发送消息-设置浏览器背景颜色",
      },
    },
  ],
};

export default ROW;
