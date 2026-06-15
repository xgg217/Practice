import type { VueComType } from "@/views/Custom/Wenjuan/types/common";

//  类型 备注说明
export type TTextType<T = "text-type-editor"> = {
  id: string; // 组件id
  status: string[]; // ["标题", "描述"]
  currentStatus: number; // 当前状态
  isShow: boolean; // 是否显示
  name: T; // 组件名称
  editName: string; // 编辑组件名称
  editCom: VueComType; // 编辑组件
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
  editCom: VueComType; // 编辑组件
};

// 标题
export type TTitle = {
  id: string; // 组件id
  status: string; // 描述
  isShow: boolean; // 是否显示
  name: "title-editor"; // 组件名称
  editName: string; // 编辑组件名称
  editCom: VueComType; // 编辑组件
};

// 描述
export type TDesc = {
  id: string; // 组件id
  status: string; // 描述
  isShow: boolean; // 是否显示
  name: "desc-editor"; // 组件名称
  editName: string; // 编辑组件名称
  editCom: VueComType; // 编辑组件
};

// 选项
export type TOptions = {
  id: string; // 组件id
  currentStatus: number; // 当前状态
  status: string[]; // 选项 ["默认选项1", "默认选项2"]
  isShow: boolean; // 是否显示
  name: "options-editor"; // 组件名称
  editName: string; // 编辑组件名称
  editCom: VueComType; // 编辑组件
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
  editCom: VueComType; // 编辑组件
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
  editCom: VueComType; // 编辑组件
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
  editCom: VueComType; // 编辑组件
};

// 对齐方式
export type TPosition = {
  id: string; // 组件id
  currentStatus: number; // 当前状态
  status: string[]; // 对齐方式
  isShow: boolean; // 是否显示
  name: "position-editor"; // 组件名称
  editName: string; // 编辑组件名称
  editCom: VueComType; // 编辑组件
};

// 字体大小
export type TFontSizeSize = {
  id: string; // 组件id
  currentStatus: number; // 当前状态
  status: string[]; // 字体大小
  isShow: boolean; // 是否显示
  name: "size-editor"; // 组件名称
  editName: string; // 编辑组件名称
  editCom: VueComType; // 编辑组件
};

// 字体加粗
export type TFontWeight = {
  id: string; // 组件id
  currentStatus: number; // 当前状态
  status: string[]; // 字体加粗
  isShow: boolean; // 是否显示
  name: "weight-editor"; // 组件名称
  editName: string; // 编辑组件名称
  editCom: VueComType; // 编辑组件
};

// 字体斜体
export type TFontItalic = {
  id: string; // 组件id
  currentStatus: number; // 当前状态
  status: string[]; // 字体斜体
  isShow: boolean; // 是否显示
  name: "italic-editor"; // 组件名称
  editName: string; // 编辑组件名称
  editCom: VueComType; // 编辑组件
};

// 字体颜色
export type TFontColor = {
  id: string; // 组件id
  status: string; // 字体颜色
  isShow: boolean; // 是否显示
  name: "color-editor"; // 组件名称
  editName: string; // 编辑组件名称
  editCom: VueComType; // 编辑组件
};

// 选择之 单选题
export type TSingleSelectStatus = {
  type: VueComType;
  name: string;
  id: string;
  title: "单选题";
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

// 选择之 多选
export type TMultiSelectStatus = {
  type: VueComType;
  name: "multi-select";
  id: string;
  title: "多选";
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

// 选择之 下拉选择题
export type TOptionSelectStatus = {
  type: VueComType;
  name: "option-select";
  id: string;
  title: "下拉选择题";
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

// 选择之 图片单选
export type TSinglePicSelectStatus = {
  type: VueComType;
  name: "single-pic-select";
  id: string;
  title: "图片单选";
  status: {
    title: TTitle;
    desc: TDesc;
    options: TPicOptionsEdito;
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

// 选择之 图片多选
export type TMultiPicSelectStatus = {
  type: VueComType;
  name: "multi-pic-select";
  id: string;
  title: "图片多选";
  status: {
    title: TTitle;
    desc: TDesc;
    options: TPicOptionsEdito;
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

// 文本输入之 单行文本输入框
export type TTextInputStatus = {
  type: VueComType;
  name: string;
  id: string;
  title: "单行文本输入框";
  status: {
    // type: TTextType<"text-input-type-editor">;
    title: TTitle;
    desc: TDesc;
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

//  文本输入之 多行文本输入框
export type TTextareaInputStatus = {
  type: VueComType;
  name: "textarea-input";
  title: "多行文本输入框";
  id: string;
  status: {
    // type: TTextType<"text-input-type-editor">;
    title: TTitle;
    desc: TDesc;
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

// 高级题型之 评价/打分
export type TRateScoreStatus = {
  type: VueComType;
  name: "rate-score";
  id: string;
  title: "评价/打分";
  status: {
    title: TTitle;
    desc: TDesc;
    options: TOptionsRateTextEditor;
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

//高级题型之 日期 / 时间
export type DateTimeStatus = {
  type: VueComType;
  name: "date-time";
  id: string;
  title: "日期 / 时间";
  status: {
    title: TTitle;
    desc: TDesc;
    type: TDateTimeType;
    // options: TOptionsDateTimeTypeEditor;
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

// 备注说明之 备注说明
export type TTextNoteStatus = {
  type: VueComType;
  name: "text-note";
  id: string;
  title: "备注说明";
  status: {
    type: TTextType;
    title: TTitle;
    desc: TDesc;
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
