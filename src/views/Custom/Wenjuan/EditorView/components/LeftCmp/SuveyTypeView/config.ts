import {
  CircleCheck,
  Files,
  EditPen,
  ChatLineSquare,
  User,
  Message,
} from "@element-plus/icons-vue";
import type { VueComType } from "@/views/Custom/Wenjuan/types/common";
import customRouter from "@/router/modules/custom";

type SureyComItem = {
  materialName: string;
  title: string;
};

export type SureyCom = {
  title: string;
  icon: VueComType;
  list: SureyComItem[];
};

const getItem = (comName: string) => {
  // 找到调查问卷
  //  customRouter['Custom'].find(item => {
  //   return item.name === "WenjuanMaterials"
  //  })

  // 找到 问卷调查 组件
  const WenjuanMaterials = customRouter.children!.find((item) => {
    return item.name === "WenjuanMaterials";
  });

  if (!WenjuanMaterials) {
    console.error("问卷调查 组件不存在");
    // ElMessage.error("问卷调查 组件不存在");
    return [];
  }

  const com = WenjuanMaterials.children!.find((item) => {
    return item.name === comName;
  });

  if (!com) {
    console.error(`组件 ${comName} 不存在`);
    // ElMessage.error(`组件 ${comName} 不存在`);
    return [];
  }

  return com.children!.map((item) => {
    const obj: SureyComItem = {
      materialName: item.name as string,
      title: item.meta!.title as string,
    };
    return obj;
  });
};

// 题型配置文件
export const SureyComsList: SureyCom[] = [
  {
    title: "选择",
    icon: CircleCheck,
    list: getItem("select-group"),
    // list: [
    //   {
    //     materialName: "single-select",
    //     title: "单选题",
    //   },
    //   {
    //     materialName: "multi-select",
    //     title: "多选题",
    //   },
    //   {
    //     materialName: "option-select",
    //     title: "下拉选择",
    //   },
    //   {
    //     materialName: "single-pic-select",
    //     title: "图片单选题",
    //   },
    //   {
    //     materialName: "multi-pic-select",
    //     title: "图片多选题",
    //   },
    // ],
  },
  {
    title: "文本输入",
    icon: Files,
    list: getItem("input-group"),
    // list: [
    //   {
    //     materialName: "text-input",
    //     title: "文本输入",
    //   },
    // ],
  },
  {
    title: "高级题型",
    icon: EditPen,
    list: getItem("advanced-group"),
    // list: [
    //   {
    //     materialName: "rate-score",
    //     title: "评分/打分",
    //   },
    //   {
    //     materialName: "date-time",
    //     title: "日期/时间",
    //   },
    // ],
  },
  {
    title: "备注说明",
    icon: ChatLineSquare,
    list: getItem("note-group"),
    // list: [
    //   {
    //     materialName: "text-note",
    //     title: "备注说明",
    //   },
    // ],
  },
  {
    title: "个人信息",
    icon: User,
    list: getItem("personal-info-group"),
    // list: [
    //   {
    //     materialName: "personal-info-gender",
    //     title: "性别",
    //   },
    //   {
    //     materialName: "personal-info-education",
    //     title: "学历",
    //   },
    // ],
  },
];

console.log(SureyComsList);
