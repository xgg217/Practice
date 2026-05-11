import router from "./index";

// 获取全部菜单
export const getAllMenuRoutes = () => {
  console.log(router.options.routes);

  // 暂时只显示 / 菜单下的路由
  const arr = router.options.routes.filter((item) => {
    return item.path === "/";
  })[0]!.children!;

  console.log(arr);

  return arr;

  // const arr = routerObj.options.routes.filter(item => {
  //   // 过滤掉白名单的路由
  //   // return !whitePathlist.includes(item.path);
  //   return item.meta?.isCardList;
  // });

  // // 遍历需要处理的路由
  // // return getItem(arr);
  // return arr.map(item => {
  //   const { meta, name, path } = item;
  //   const obj: ICardItem = {
  //     title: meta!.title,
  //     name: meta!.pathName as string,
  //     remark: (meta?.remark || "") as string,
  //     path,
  //   };
  //   return obj;
  // });
};
