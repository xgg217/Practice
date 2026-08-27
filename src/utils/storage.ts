// 负责存储到 localstorage 工具库

export const KEY = "Practice-App-";

export const set = (key: string, val: string) => {
  localStorage.setItem(KEY + key, val);
};

export const get = (key: string) => {
  return localStorage.getItem(KEY + key);
};
