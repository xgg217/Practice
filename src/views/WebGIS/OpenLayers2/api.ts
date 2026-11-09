// 获取所有检测点
export const apiGetAllMonitors = () => {
  return fetch("http://localhost:3000/monitors").then((res) => {
    if (!res.ok) {
      throw new Error("请求错误");
    }
    return res.json();
  });
};

// 获取月份数据
export const apiGetMonths = () => {
  return fetch("http://localhost:3000/months").then((res) => {
    if (!res.ok) {
      throw new Error("请求错误");
    }
    return res.json();
  });
};

// 获取所有检测点
export const apiGetWaters = () => {
  return fetch("http://localhost:3000/waters").then((res) => {
    if (!res.ok) {
      throw new Error("请求错误");
    }
    return res.json();
  });
};
