import {
  CircleCheck,
  Files,
  EditPen,
  ChatLineSquare,
  User,
  Message,
} from "@element-plus/icons-vue";

// 题型配置文件
export const SureyComsList = [
  {
    title: "选择题",
    icon: CircleCheck,
    list: [
      {
        materialName: "single-select",
        title: "单选题",
      },
      {
        materialName: "multi-select",
        title: "多选题",
      },
      {
        materialName: "option-select",
        title: "下拉选择",
      },
      {
        materialName: "single-pic-select",
        title: "图片单选题",
      },
      {
        materialName: "multi-pic-select",
        title: "图片多选题",
      },
    ],
  },
  {
    title: "文本输入",
    icon: EditPen,
    list: [
      {
        materialName: "text-input",
        title: "文本输入",
      },
    ],
  },
  {
    title: "高级题型",
    icon: EditPen,
    list: [
      {
        materialName: "rate-score",
        title: "评分/打分",
      },
      {
        materialName: "date-time",
        title: "日期/时间",
      },
    ],
  },
  {
    title: "备注说明",
    icon: EditPen,
    list: [
      {
        materialName: "text-note",
        title: "备注说明",
      },
    ],
  },
  {
    title: "个人信息",
    icon: EditPen,
    list: [
      {
        materialName: "personal-info-gender",
        title: "性别",
      },
      {
        materialName: "personal-info-education",
        title: "学历",
      },
    ],
  },
];
