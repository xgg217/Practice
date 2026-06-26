// 备注说明 JSON-Schema 配置

// import {
//   // 业务组件
//   TextNote,
//   // 编辑组件
//   TitleEditor,
//   DescEditor,
//   PositionEditor,
//   SizeEditor,
//   WeightEditor,
//   ItalicEditor,
//   ColorEditor,
//   TextTypeEditor,
// } from "@/views/Custom/Wenjuan/MaterialsView/config";

// 业务组件
import TextNote from "@/views/Custom/Wenjuan/MaterialsView/NoteGroupView/TextNote/IndexView.vue";

// 编辑组件
import TitleEditor from "@/views/Custom/Wenjuan/components/EditItems/TitleEditor.vue";
import DescEditor from "@/views/Custom/Wenjuan/components/EditItems/DescEditor.vue";
import PositionEditor from "@/views/Custom/Wenjuan/components/EditItems/PositionEditor.vue";
import SizeEditor from "@/views/Custom/Wenjuan/components/EditItems/SizeEditor.vue";
import WeightEditor from "@/views/Custom/Wenjuan/components/EditItems/WeightEditor.vue";
import ItalicEditor from "@/views/Custom/Wenjuan/components/EditItems/ItalicEditor.vue";
import ColorEditor from "@/views/Custom/Wenjuan/components/EditItems/ColorEditor.vue";
import TextTypeEditor from "@/views/Custom/Wenjuan/components/EditItems/TextTypeEditor.vue";

import type { TTextNoteStatus } from "@/views/Custom/Wenjuan/types/config";

export default function () {
  return {
    type: markRaw(TextNote),
    name: "text-note",
    id: crypto.randomUUID(),
    title: "备注说明",
    // 组件的状态：组件的每一个能够修改的状态都应该对应一个编辑组件
    status: {
      // 类型
      type: {
        id: crypto.randomUUID(),
        status: ["标题", "描述"],
        currentStatus: 1,
        isShow: true,
        name: "text-type-editor",
        editName: "类型",
        editCom: markRaw(TextTypeEditor),
      },

      // 标题
      title: {
        id: crypto.randomUUID(),
        status: "备注说明标题",
        isShow: false,
        name: "title-editor",
        editName: "标题内容",
        editCom: markRaw(TitleEditor),
      },

      // 描述
      desc: {
        id: crypto.randomUUID(),
        status: "备注说明描述",
        isShow: true,
        name: "desc-editor",
        editName: "描述内容",
        editCom: markRaw(DescEditor),
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
        isShow: false,
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
        isShow: false,
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
        isShow: false,
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
        isShow: false,
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
  } as TTextNoteStatus;
}
