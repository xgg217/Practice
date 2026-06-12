import type { TextProps, OptionsProps, PicLink } from "./editProps";
import type { Status, VueComType } from "./common";

// 选择
export type SelectComName =
  | "single-select"
  | "multi-select"
  | "option-select"
  | "single-pic-select"
  | "multi-pic-select";

// 文本输入
export type TextInputComName = "text-input" | "textarea-input";

// 高级题型
export type AdvancedComName = "rate-score" | "date-time";

// 备注说明
export type NoteComName = "text-note";

// 个人信息
export type PersonalInfoComName = "personal-info-gender" | "personal-info-education";

// 练习方式
export type ExerciseComName = "phone";

// 题目类型
export type SurveyComName =
  | "single-select" // 选择-单选题
  | "multi-select" // 选择-多选题
  | "option-select" // 选择-下拉选择
  | "single-pic-select" // 选择-图片单选题
  | "multi-pic-select" // 选择-图片多选题
  | "text-input" // 文本输入-单行文本
  | "textarea-input" // 文本输入-多行文本
  | "rate-score" // 高级题型-评分打分
  | "date-time"; // 高级题型-时间日期
// | "text-note"; // 备注说明-备注说明

// 业务组件类型(题目类型 + 非题目类型)
export type Material = SurveyComName | "text-note";

// 编辑组件类型:集合了所有的编辑组件
export type EditComName =
  | "title-editor"
  | "desc-editor"
  | "position-editor"
  | "size-editor"
  | "weight-editor"
  | "italic-editor"
  | "text-type-editor"
  | "pic-options-editor"
  | "options-editor";

// 所有的组件类型：业务组件类型 + 编辑组件类型
export type ComponentName =
  | SelectComName
  | TextInputComName
  | AdvancedComName
  | NoteComName
  | PersonalInfoComName;

export type ComponentMap = {
  [key in ComponentName]: VueComType;
};

// 仓库操作方法
export interface Actions {
  setTextStatus: (textProps: TextProps, text: string) => void;
  addOption: (optionProps: OptionsProps) => void;
  removeOption: (optionProps: OptionsProps, index: number) => number;
  setPosition: (optionProps: OptionsProps, index: number) => void;
  setCurrentStatus: (optionProps: OptionsProps, index: number) => void;
  setPicLinkByIndex: (optionProps: OptionsProps, payload: PicLink) => void;
  setSize: (optionProps: OptionsProps, size: number) => void;
  setUse: (optionsProps: OptionsProps, isUse: boolean) => void;
}

// 仓库状态
export interface MaterialStore extends Actions {
  currentMaterialCom: Material;
  coms: Record<Material, Status>;
  setCurrentSurveyCom: (com: Material) => void;
}

// 记录题目类型的数组
export const SurveyComNameArr = [
  "single-select",
  "single-pic-select",
  "personal-info-gender",
  "personal-info-education",
];

// 判断传入的值是否为题目类型
export function isSurveyComName(value: string): value is SurveyComName {
  return SurveyComNameArr.includes(value as SurveyComName);
}

// 该数组记录适合生成PDF的题目类型
const PDFComs = [
  "single-select",
  "single-pic-select",
  "personal-info-gender",
  "personal-info-education",
  "text-note",
];

export function canUsedForPDF(value: string): boolean {
  return PDFComs.includes(value);
}

export type QuizData = {
  surveyCount: number;
  coms: Status[];
};
