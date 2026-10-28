import { createApp } from "vue";
import pinia from "./stores/index";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import "./assets/CSS/index.css";
import * as ElementPlusIconsVue from "@element-plus/icons-vue"; // icon图标
import "element-plus/theme-chalk/dark/css-vars.css"; // 暗黑模式

import App from "./App.vue";
import router from "./router";

const app = createApp(App);

app.use(ElementPlus);
app.use(pinia);
app.use(router);

// icon 图标
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}

app.mount("#app");
