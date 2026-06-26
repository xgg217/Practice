// 组件市场里面所有组件状态的仓库
import { defineStore } from "pinia";
import { ElMessage } from "element-plus";
import {
  setTextStatus,
  removeOption,
  addOption,
  setPosition,
  setCurrentStatus,
  setPicLinkByIndex,
  setSize,
  setUse,
} from "./actions";
import { BUSINESS_COM_MAP } from "./config";
import { cloneDeep } from "es-toolkit";
import type { ComponentMap } from "@/views/Custom/Wenjuan/types/store";

// 获取组件
const getCom = () => {
  const obj = cloneDeep(BUSINESS_COM_MAP);
  console.log(obj);

  Object.keys(obj).forEach((item) => {
    const name = item as keyof ComponentMap;
    console.log(name);

    // @ts-expect-error 初始化组件
    obj[name] = obj[name]();
  });

  return obj;
};

// 需要初始化的组件

export const useMaterialStore = defineStore("materialStore", {
  state: () => ({
    currentMaterialCom: "single-select", // 当前选中的组件

    // 记录所有的业务组件
    coms: getCom(),
  }),
  actions: {
    // 编辑器 显示 状态更新
    setCurrentMatrialCom(comName: string) {
      if (Object.hasOwn(this.coms, comName)) {
        this.currentMaterialCom = comName;
      } else {
        console.error("当前路由不在 业务组件内，无法匹配");
        ElMessage.error("当前路由不在 业务组件内，无法匹配");
      }
    },

    // 修改文本
    setTextStatus,

    // 删除
    removeOption,

    // 添加选项
    addOption,

    // 设置选项位置
    setPosition,

    setCurrentStatus,

    // 设置字体大小
    setSize,

    // 选项-辅助文字-切换
    setUse,

    setPicLinkByIndex,
  },
});

// 路由切换 到问卷调查 组件的后续处理
export const setRouteMaterialCom = (comName: string) => {
  // 问卷调查仓库
  const store = useMaterialStore();

  // 在仓库中处理
  store.setCurrentMatrialCom(comName as string);
};
