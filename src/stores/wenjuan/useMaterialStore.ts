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
} from "./actions";
import SingleSelect from "@/views/Custom/Wenjuan/MaterialsView/SelectGroupView/SingleSelect/config";
import MultiSelect from "@/views/Custom/Wenjuan/MaterialsView/SelectGroupView/MultiSelect/config";
import OptionSelect from "@/views/Custom/Wenjuan/MaterialsView/SelectGroupView/OptionSelect/config";
import SinglePicSelect from "@/views/Custom/Wenjuan/MaterialsView/SelectGroupView/SinglePicSelect/config";
import MultiPicSelect from "@/views/Custom/Wenjuan/MaterialsView/SelectGroupView/MultiPicSelect/config";
import TextInputView from "@/views/Custom/Wenjuan/MaterialsView/InputGroupView/TextInputView/config";

export const useMaterialStore = defineStore("materialStore", {
  state: () => ({
    currentMaterialCom: "single-select", // 当前选中的组件

    // 记录所有的业务组件
    coms: {
      "single-select": SingleSelect(), // 选择-单选题
      "multi-select": MultiSelect(), // 选择-多选题
      "option-select": OptionSelect(), // 选择-下拉
      "single-pic-select": SinglePicSelect(), // 选择-图片单选题
      "multi-pic-select": MultiPicSelect(), // 选择-图片多选题
      "text-input": TextInputView(), // 文本输入-文本输入框
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

    setSize,

    setPicLinkByIndex,
  },
});
