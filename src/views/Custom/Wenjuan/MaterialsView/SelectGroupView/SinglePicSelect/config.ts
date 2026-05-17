// 图片单选的 JSON-Schema 配置

// 业务组件
import SinglePicSelect from "@/views/Custom/Wenjuan/MaterialsView/SelectGroupView/SinglePicSelect/index.vue";

// 编辑组件
import TitleEditor from "@/views/Custom/Wenjuan/components/EditItems/TitleEditor.vue";
import DescEditor from "@/views/Custom/Wenjuan/components/EditItems/DescEditor.vue";
import PicOptionsEditor from "@/views/Custom/Wenjuan/components/EditItems/PicOptionsEditor.vue";
import PositionEditor from "@/views/Custom/Wenjuan/components/EditItems/PositionEditor.vue";
import SizeEditor from "@/views/Custom/Wenjuan/components/EditItems/SizeEditor.vue";
import WeightEditor from "@/views/Custom/Wenjuan/components/EditItems/WeightEditor.vue";
import ItalicEditor from "@/views/Custom/Wenjuan/components/EditItems/ItalicEditor.vue";
import ColorEditor from "@/views/Custom/Wenjuan/components/EditItems/ColorEditor.vue";

export default function () {
  return {
    type: markRaw(SinglePicSelect),
    name: "single-pic-select",
    id: crypto.randomUUID(),
    // 组件的状态：组件的每一个能够修改的状态都应该对应一个编辑组件
    status: {
      title: {
        id: crypto.randomUUID(),
        status: "图片单选标题!!!",
        isShow: true,
        name: "title-editor",
        editName: "标题内容",
        editCom: markRaw(TitleEditor),
      },
      desc: {
        id: crypto.randomUUID(),
        status: "图片单选描述~~~",
        isShow: true,
        name: "desc-editor",
        editName: "描述内容",
        editCom: markRaw(DescEditor),
      },
      options: {
        id: crypto.randomUUID(),
        status: [
          {
            picTitle: "图片标题1",
            picDesc: "图片描述1",
            value: "",
          },
          {
            picTitle: "图片标题2",
            picDesc: "图片描述2",
            value: "",
          },
        ],
        currentStatus: 0,
        isShow: true,
        name: "pic-options-editor",
        editName: "选项",
        editCom: markRaw(PicOptionsEditor),
      },
      position: {
        id: crypto.randomUUID(),
        currentStatus: 0,
        status: ["左对齐", "居中对齐"],
        isShow: true,
        name: "position-editor",
        editName: "对齐方式",
        editCom: markRaw(PositionEditor),
      },
      titleSize: {
        id: crypto.randomUUID(),
        currentStatus: 0,
        status: ["22", "20", "18"],
        isShow: true,
        name: "size-editor",
        editName: "标题字体大小",
        editCom: markRaw(SizeEditor),
      },
      descSize: {
        id: crypto.randomUUID(),
        currentStatus: 0,
        status: ["16", "14", "12"],
        isShow: true,
        name: "size-editor",
        editName: "描述字体大小",
        editCom: markRaw(SizeEditor),
      },
      titleWeight: {
        id: crypto.randomUUID(),
        currentStatus: 1,
        status: ["加粗", "正常"],
        isShow: true,
        name: "weight-editor",
        editName: "标题字体加粗",
        editCom: markRaw(WeightEditor),
      },
      descWeight: {
        id: crypto.randomUUID(),
        currentStatus: 1,
        status: ["加粗", "正常"],
        isShow: true,
        name: "weight-editor",
        editName: "描述字体加粗",
        editCom: markRaw(WeightEditor),
      },
      titleItalic: {
        id: crypto.randomUUID(),
        currentStatus: 1,
        status: ["斜体", "正常"],
        isShow: true,
        name: "italic-editor",
        editName: "标题字体斜体",
        editCom: markRaw(ItalicEditor),
      },
      descItalic: {
        id: crypto.randomUUID(),
        currentStatus: 1,
        status: ["斜体", "正常"],
        isShow: true,
        name: "italic-editor",
        editName: "描述字体斜体",
        editCom: markRaw(ItalicEditor),
      },
      titleColor: {
        id: crypto.randomUUID(),
        status: "#000",
        isShow: true,
        name: "color-editor",
        editName: "标题字体颜色",
        editCom: markRaw(ColorEditor),
      },
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
