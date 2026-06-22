// 声明全局接口
declare global {
  type anyObj = {
    [key: string]: unknown;
  };
}

// 确保这是一个模块，避免类型冲突
export {};
