import { routes } from "./index";
import type { RouteRecordRaw } from "vue-router";

export type TRoute = {
  path: string; // 路由路径
  name: string; // 路由名称
  title: string; // 菜单标题
  icon: string; // 菜单图标
  children: TRoute[]; // 子路由
};

// 递归获取路由菜单
const getItem = (arr: RouteRecordRaw[], path: string) => {
  return arr
    .filter((item) => {
      // 过滤不需要显示的路由
      return item.meta?.isShow !== false;
    })
    .map((item) => {
      const obj: TRoute = {
        path: path + "/" + item.path,
        name: item.name as string,
        title: (item.meta?.title as string) || "",
        icon: (item.meta?.icon as string) || "setting", // 默认图标
        children: [],
      };

      // 二级路由
      if (item.children) {
        obj.icon = obj.icon === "setting" ? "Menu" : obj.icon; // 默认图标
        const arr = getItem(item.children, obj.path);
        obj.children = arr.map((row) => {
          // row.icon = (row.icon as string) || "Menu"; // 默认图标
          return {
            ...row,
            icon: (row.icon as string) || "setting", // 默认图标
          };
        });
      }

      return obj;
    });
};

// 获取全部菜单
export const getAllMenuRoutes = (): TRoute[] => {
  // 暂时只显示 / 菜单下的路由
  const arr = routes.filter((item) => {
    return item.path === "/";
  })[0]!.children!;

  const list = getItem(arr, "");

  return list;
};
