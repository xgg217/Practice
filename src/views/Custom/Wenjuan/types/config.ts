import type { Raw } from "vue";

export type TComponentStatus = Raw<Component>;

//  类型 备注说明
export type TTextType<T = "text-type-editor"> = {
  id: string; // 组件id
  status: string[]; // ["标题", "描述"]
  currentStatus: number; // 当前状态
  isShow: boolean; // 是否显示
  name: T; // 组件名称
  editName: string; // 编辑组件名称
  editCom: TComponentStatus; // 编辑组件
};

// 类型 日期/时间
export type TDateTimeType = {
  id: string; // 组件id
  currentStatus: number; // 当前状态
  status: {
    value: string;
    status: string;
  }[];
  isShow: boolean; // 是否显示
  name: "date-time-type-editor"; // 组件名称
  editName: string; // 编辑组件名称
  editCom: TComponentStatus; // 编辑组件
};

// 标题
export type TTitle = {
  id: string; // 组件id
  status: string; // 描述
  isShow: boolean; // 是否显示
  name: "title-editor"; // 组件名称
  editName: string; // 编辑组件名称
  editCom: TComponentStatus; // 编辑组件
};

// 描述
export type TDesc = {
  id: string; // 组件id
  status: string; // 描述
  isShow: boolean; // 是否显示
  name: "desc-editor"; // 组件名称
  editName: string; // 编辑组件名称
  editCom: TComponentStatus; // 编辑组件
};

// 选项
export type TOptions = {
  id: string; // 组件id
  currentStatus: number; // 当前状态
  status: string[]; // 选项 ["默认选项1", "默认选项2"]
  isShow: boolean; // 是否显示
  name: "options-editor"; // 组件名称
  editName: string; // 编辑组件名称
  editCom: TComponentStatus; // 编辑组件
};

// 选项 - 高级题型 - 评分/打分
export type TOptionsRateTextEditor = {
  id: string; // 组件id
  currentStatus: number; // 当前状态
  status: string[]; // 选项 ["默认选项1", "默认选项2"]
  isShow: boolean; // 是否显示
  isUse: boolean; // 是否显示 文字
  name: "rate-text-editor"; // 组件名称
  editName: string; // 编辑组件名称
  editCom: TComponentStatus; // 编辑组件
};

// 选项 - 高级题型 - 评分/打分
export type TTypeDateTimeTypeEditor = {
  id: string; // 组件id
  currentStatus: number; // 当前状态
  status: {
    value: string;
    status: string;
  }[]; // 选项 ["默认选项1", "默认选项2"]
  isShow: boolean; // 是否显示
  name: "date-time-type-editor"; // 组件名称
  editName: string; // 编辑组件名称
  editCom: TComponentStatus; // 编辑组件
};

// 图片
export type TPicOptionsEdito = {
  id: string; // 组件id
  currentStatus: number; // 当前状态
  status: {
    picTitle: string;
    picDesc: string;
    value: string;
  }[]; // 选项
  isShow: boolean; // 是否显示
  name: "pic-options-editor"; // 组件名称
  editName: string; // 编辑组件名称
  editCom: TComponentStatus; // 编辑组件
};

// 对齐方式
export type TPosition = {
  id: string; // 组件id
  currentStatus: number; // 当前状态
  status: string[]; // 对齐方式
  isShow: boolean; // 是否显示
  name: "position-editor"; // 组件名称
  editName: string; // 编辑组件名称
  editCom: TComponentStatus; // 编辑组件
};

// 字体大小
export type TFontSizeSize = {
  id: string; // 组件id
  currentStatus: number; // 当前状态
  status: string[]; // 字体大小
  isShow: boolean; // 是否显示
  name: "size-editor"; // 组件名称
  editName: string; // 编辑组件名称
  editCom: TComponentStatus; // 编辑组件
};

// 字体加粗
export type TFontWeight = {
  id: string; // 组件id
  currentStatus: number; // 当前状态
  status: string[]; // 字体加粗
  isShow: boolean; // 是否显示
  name: "weight-editor"; // 组件名称
  editName: string; // 编辑组件名称
  editCom: TComponentStatus; // 编辑组件
};

// 字体斜体
export type TFontItalic = {
  id: string; // 组件id
  currentStatus: number; // 当前状态
  status: string[]; // 字体斜体
  isShow: boolean; // 是否显示
  name: "italic-editor"; // 组件名称
  editName: string; // 编辑组件名称
  editCom: TComponentStatus; // 编辑组件
};

// 字体颜色
export type TFontColor = {
  id: string; // 组件id
  status: string; // 字体颜色
  isShow: boolean; // 是否显示
  name: "color-editor"; // 组件名称
  editName: string; // 编辑组件名称
  editCom: TComponentStatus; // 编辑组件
};
