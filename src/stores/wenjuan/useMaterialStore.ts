// 组件市场里面所有组件状态的仓库
import { defineStore } from "pinia";
import {
  setTextStatus,
  removeOption,
  addOption,
  setPosition,
  setCurrentStatus,
  setPicLinkByIndex,
} from "./actions";
import SingleSelect from "@/views/Custom/Wenjuan/MaterialsView/SelectGroupView/SingleSelect/config";
import MultiSelect from "@/views/Custom/Wenjuan/MaterialsView/SelectGroupView/MultiSelect/config";
import OptionSelect from "@/views/Custom/Wenjuan/MaterialsView/SelectGroupView/OptionSelect/config";
import SinglePicSelect from "@/views/Custom/Wenjuan/MaterialsView/SelectGroupView/SinglePicSelect/config";
import MultiPicSelect from "@/views/Custom/Wenjuan/MaterialsView/SelectGroupView/MultiPicSelect/config";
import emitter from "@/mitt";
import { ElMessage } from "element-plus";

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
      console.log(comName);

      // @ts-expect-error 测试中
      if (this.coms[comName]) {
        this.currentMaterialCom = comName;
      }
    },

    setPicLinkByIndex,
  },
});

const store = useMaterialStore();

// 接受事件总线派发的事件
emitter.on("VIEW:custom_WenjuanMaterials", (name: string) => {
  if (!Object.hasOwn(store.coms, name)) {
    console.error("当前路由不在 业务组件内，无法匹配");
    ElMessage.error("当前路由不在 业务组件内，无法匹配");
    return;
  }

  store.setCurrentMatrialCom(name);
});
