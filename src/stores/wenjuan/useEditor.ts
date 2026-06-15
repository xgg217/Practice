// 用处存储 画布的状态

import { defineStore } from "pinia";
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
import { ElMessage } from "element-plus";
import type { ComponentMap } from "@/views/Custom/Wenjuan/types/store";

// 获取 COM_MAP 中的 value 值 类型
export type ComponentStatus = ReturnType<ComponentMap[keyof ComponentMap]>;

export const useEditorStore = defineStore("editorStore", {
  state: () => ({
    currentComponentIndex: -1, // 当前选中的组件索引
    surveyCount: 0, // 问卷调查组件数量
    coms: [] as ComponentStatus[], // 所有的组件实例
  }),

  actions: {
    // 添加组件
    addComponent(item: keyof ComponentMap) {
      if (!Object.hasOwn(COM_MAP, item)) {
        ElMessage.error("组件不存在");
        return;
      }
      // console.log(COM_MAP[item]());

      const com = COM_MAP[item]();

      this.coms.push(com);
      // this.surveyCount++;
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
