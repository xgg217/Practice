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
import type { ComponentMap, NoteComName } from "@/views/Custom/Wenjuan/types/store";
import EventBus from "@/views/Custom/Wenjuan/EditorView/eventBus";

// 获取 COM_MAP 中的 value 值 类型
export type ComponentStatus = ReturnType<ComponentMap[keyof ComponentMap]>;

// 当前是否为非题目类型(《备注说明》)
const isExercise: [NoteComName] = ["text-note"];

export const useEditorStore = defineStore("editorStore", {
  state: () => ({
    currentComponentIndex: -1, // 当前选中的组件索引
    surveyCount: 0, // 问卷调查组件数量
    coms: [] as ComponentStatus[], // 所有的组件实例
  }),

  getters: {
    // 获取所有组件实例
    getAllComsList: (state) => {
      let ind = 0;
      return state.coms.map((item) => {
        const obj = {
          index: 0,
          ...item,
        };

        // @ts-expect-error 类型剔除
        if (!isExercise.includes(item.name)) {
          ind = ind + 1;
          obj.index = ind;
        }
        return obj;
      });
    },

    // 获取当前选中的组件实例
    getCurrentComponent: (state) => {
      return state.coms[state.currentComponentIndex];
    },
  },

  actions: {
    // 添加组件
    addComponent(item: keyof ComponentMap) {
      if (!Object.hasOwn(COM_MAP, item)) {
        ElMessage.error("组件不存在");
        return;
      }

      const com = COM_MAP[item]();

      this.coms.push(com);

      // 当前是否为非题目类型(《备注说明》)
      if (!isExercise.includes(item as NoteComName)) {
        this.surveyCount++;
      }

      EventBus.emit("scrollToBottom");
    },

    // 设置当前选中的组件索引
    setCurrentComponentIndex(index: number) {
      this.currentComponentIndex = index;
    },

    // 删除组件
    removeCom(index: number) {
      // 删除的时候要看删除的是不是问卷题目
      if (!Object.hasOwn(COM_MAP, this.coms[index]!.name)) {
        ElMessage.error("组件不存在");
        return;
      }
      this.surveyCount--;
      this.coms.splice(index, 1);
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

    // 重置数据
    reset() {
      this.currentComponentIndex = -1;
      this.surveyCount = 0;
      this.coms = [];
    },
  },
});
