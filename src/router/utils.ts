import { routes } from "./index";
import type { RouteRecordRaw } from "vue-router";

export type TRoute = {
  path: string; // 路由路径
  name: string; // 路由名称
  title: string; // 菜单标题
  children: TRoute[]; // 子路由
};

// 递归获取路由菜单
const getItem = (arr: RouteRecordRaw[], path: string) => {
  return arr.map((item) => {
    const obj: TRoute = {
      path: path + "/" + item.path,
      name: item.name as string,
      title: (item.meta?.title as string) || "",
      children: [],
    };

    // 二级路由
    if (item.children) {
      obj.children = getItem(item.children, obj.path);
    }
    return obj;
  });
};

// 获取全部菜单
export const getAllMenuRoutes = (): TRoute[] => {
  // console.log(routes);

  // 暂时只显示 / 菜单下的路由
  const arr = routes.filter((item) => {
    return item.path === "/";
  })[0]!.children!;

  const list = getItem(arr, "");
  // console.log(list);

  return list;
};
