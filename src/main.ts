import { createApp } from "vue";
import { createPinia } from "pinia";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import "./assets/CSS/index.css";
import * as ElementPlusIconsVue from "@element-plus/icons-vue"; // icon图标

import App from "./App.vue";
import router from "./router";

const app = createApp(App);

app.use(ElementPlus);
app.use(createPinia());
app.use(router);

// icon 图标
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}

app.mount("#app");

const fun = () => {
  const obj = {
    a: () => {
      //  类型系统中自动确定 key 为 a
    },
  };
};
