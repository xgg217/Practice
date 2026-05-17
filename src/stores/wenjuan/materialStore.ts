// 组件市场里面所有组件状态的仓库
import { defineStore } from "pinia";
import {
  setTextStatus,
  removeOption,
  addOption,
  setPosition,
  setCurrentStatus,
} from "./actions";
import SingleSelect from "@/views/Custom/Wenjuan/MaterialsView/SelectGroupView/SingleSelect/config";
import MultiSelect from "@/views/Custom/Wenjuan/MaterialsView/SelectGroupView/MultiSelect/config";
import OptionSelect from "@/views/Custom/Wenjuan/MaterialsView/SelectGroupView/OptionSelect/config";
import SinglePicSelect from "@/views/Custom/Wenjuan/MaterialsView/SelectGroupView/SinglePicSelect/config";
import MultiPicSelect from "@/views/Custom/Wenjuan/MaterialsView/SelectGroupView/MultiPicSelect/config";

export const useMaterialStore = defineStore("materialStore", {
  state: () => ({
    currentMaterialCom: "single-select", // 当前选中的组件

    // 记录所有的业务组件
    coms: {
      "single-select": SingleSelect(), // 单选题
      "multi-select": MultiSelect(), // 多选题
      "option-select": OptionSelect(), // 下拉
      "single-pic-select": SinglePicSelect(), // 图片单选题
      "multi-pic-select": MultiPicSelect(), // 图片多选题
    },
  }),
  actions: {
    // 修改文本
    setTextStatus,

    // 删除
    removeOption,

    // 添加选项
    addOption,

    // 设置选项位置
    setPosition,

    setCurrentStatus,

    // 编辑器状态更新
    setCurrentMatrialCom(comName: string) {
      // this.currentMaterialCom = comName;
      // @ts-ignore
      if (this.coms[comName]) {
        this.currentMaterialCom = comName;
      }
    },
  },
});
