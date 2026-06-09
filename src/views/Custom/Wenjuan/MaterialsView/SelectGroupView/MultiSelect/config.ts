// 多选 JSON-Schema 配置

// 业务组件
import MultiSelect from "@/views/Custom/Wenjuan/MaterialsView/SelectGroupView/MultiSelect/config";

// 编辑组件
import TitleEditor from "@/views/Custom/Wenjuan/components/EditItems/TitleEditor.vue";
import DescEditor from "@/views/Custom/Wenjuan/components/EditItems/DescEditor.vue";
import OptionsEditor from "@/views/Custom/Wenjuan/components/EditItems/OptionsEditor.vue";
import PositionEditor from "@/views/Custom/Wenjuan/components/EditItems/PositionEditor.vue";
import SizeEditor from "@/views/Custom/Wenjuan/components/EditItems/SizeEditor.vue";
import WeightEditor from "@/views/Custom/Wenjuan/components/EditItems/WeightEditor.vue";
import ItalicEditor from "@/views/Custom/Wenjuan/components/EditItems/ItalicEditor.vue";
import ColorEditor from "@/views/Custom/Wenjuan/components/EditItems/ColorEditor.vue";

import type {
  TTitle,
  TDesc,
  TOptions,
  TPosition,
  TFontSizeSize,
  TFontWeight,
  TFontItalic,
  TFontColor,
} from "@/views/Custom/Wenjuan/types/config";
import type { VueComType } from "@/views/Custom/Wenjuan/types/common";

export type TSingleSelectStatus = {
  type: VueComType;
  name: "multi-select";
  id: string;
  status: {
    title: TTitle;
    desc: TDesc;
    options: TOptions;
    position: TPosition;
    titleSize: TFontSizeSize;
    descSize: TFontSizeSize;
    titleWeight: TFontWeight;
    descWeight: TFontWeight;
    titleItalic: TFontItalic;
    descItalic: TFontItalic;
    titleColor: TFontColor;
    descColor: TFontColor;
  };
};

export default function (): TSingleSelectStatus {
  return {
    type: markRaw(MultiSelect),
    name: "multi-select",
    id: crypto.randomUUID(),
    // 组件的状态：组件的每一个能够修改的状态都应该对应一个编辑组件
    status: {
      // 标题
      title: {
        id: crypto.randomUUID(),
        status: "多选题默认标题!!!",
        isShow: true,
        name: "title-editor",
        editName: "标题内容",
        editCom: markRaw(TitleEditor),
      },

      // 描述
      desc: {
        id: crypto.randomUUID(),
        status: "多选题默认描述~~~",
        isShow: true,
        name: "desc-editor",
        editName: "描述内容",
        editCom: markRaw(DescEditor),
      },

      // 选项
      options: {
        id: crypto.randomUUID(),
        status: ["默认选项1", "默认选项2"],
        currentStatus: 0,
        isShow: true,
        name: "options-editor",
        editName: "选项",
        editCom: markRaw(OptionsEditor),
      },

      // 对齐方式
      position: {
        id: crypto.randomUUID(),
        currentStatus: 0,
        status: ["左对齐", "居中对齐"],
        isShow: true,
        name: "position-editor",
        editName: "对齐方式",
        editCom: markRaw(PositionEditor),
      },

      // 标题字体大小
      titleSize: {
        id: crypto.randomUUID(),
        currentStatus: 0,
        status: ["22", "20", "18"],
        isShow: true,
        name: "size-editor",
        editName: "标题字体大小",
        editCom: markRaw(SizeEditor),
      },

      // 描述字体大小
      descSize: {
        id: crypto.randomUUID(),
        currentStatus: 0,
        status: ["16", "14", "12"],
        isShow: true,
        name: "size-editor",
        editName: "描述字体大小",
        editCom: markRaw(SizeEditor),
      },

      // 标题字体加粗
      titleWeight: {
        id: crypto.randomUUID(),
        currentStatus: 1,
        status: ["加粗", "正常"],
        isShow: true,
        name: "weight-editor",
        editName: "标题字体加粗",
        editCom: markRaw(WeightEditor),
      },

      // 描述字体加粗
      descWeight: {
        id: crypto.randomUUID(),
        currentStatus: 1,
        status: ["加粗", "正常"],
        isShow: true,
        name: "weight-editor",
        editName: "描述字体加粗",
        editCom: markRaw(WeightEditor),
      },

      // 标题字体斜体
      titleItalic: {
        id: crypto.randomUUID(),
        currentStatus: 1,
        status: ["斜体", "正常"],
        isShow: true,
        name: "italic-editor",
        editName: "标题字体斜体",
        editCom: markRaw(ItalicEditor),
      },

      // 描述字体斜体
      descItalic: {
        id: crypto.randomUUID(),
        currentStatus: 1,
        status: ["斜体", "正常"],
        isShow: true,
        name: "italic-editor",
        editName: "描述字体斜体",
        editCom: markRaw(ItalicEditor),
      },

      // 标题字体颜色
      titleColor: {
        id: crypto.randomUUID(),
        status: "#000",
        isShow: true,
        name: "color-editor",
        editName: "标题字体颜色",
        editCom: markRaw(ColorEditor),
      },

      // 描述字体颜色
      descColor: {
        id: crypto.randomUUID(),
        status: "#909399",
        isShow: true,
        name: "color-editor",
        editName: "描述字体颜色",
        editCom: markRaw(ColorEditor),
      },
    },
  };
}
