import { routes } from "./index";
import type { RouteRecordRaw } from "vue-router";

// 获取全部菜单
export const getAllMenuRoutes = (): RouteRecordRaw[] => {
  console.log(routes);

  // 暂时只显示 / 菜单下的路由
  const arr = routes.filter((item) => {
    return item.path === "/";
  })[0]!.children!;

  return arr;
};
