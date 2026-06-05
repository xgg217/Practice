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
import { COM_MAP } from "./config";

// 需要初始化的组件

export const useMaterialStore = defineStore("materialStore", {
  state: () => ({
    currentMaterialCom: "single-select", // 当前选中的组件

    // 记录所有的业务组件
    coms: {
      "single-select": COM_MAP["single-select"](), // 选择-单选题
      "multi-select": COM_MAP["multi-select"](), // 选择-多选题
      "option-select": COM_MAP["option-select"](), // 选择-下拉选择
      "single-pic-select": COM_MAP["single-pic-select"](), // 选择-图片单选题
      "multi-pic-select": COM_MAP["multi-pic-select"](), // 选择-图片多选题
      "text-input": COM_MAP["text-input"](), // 文本输入-文本输入框
      "rate-score": COM_MAP["rate-score"](), // 高级题型-评分打分
      "date-time": COM_MAP["date-time"](), // 高级题型-时间日期
      "text-note": COM_MAP["text-note"](), // 备注说明-备注说明
      "personal-info-gender": COM_MAP["personal-info-gender"](), // 个人信息-性别(单选题)
      "personal-info-education": COM_MAP["personal-info-education"](), // 个人信息-学历(单选题)
    },
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
