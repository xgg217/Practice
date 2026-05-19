import type { VueComType } from "./common";

export interface BaseProps {
  id: string; // UUID
  isShow: boolean; // 是否显示
  name: string; // 组件名称
  editName: string; // 编辑组件名称
  editCom: VueComType; // 组件
}

// status 几种类型
export type StringStatusArr = string[]; // 例如 ['默认选项1', '默认选项2']
export type ValueStatusArr = { value: string; status: string }[]; // [ { value: 'week', status: "周", { value: "year", status: '年' } } ]
export type PicTitleDescStatusArr = {
  picTitle: string;
  picDesc: string;
  value: string;
}[]; // [ {picTitle: "图片标题1", picDesc: "说明（选填，限24字）", value: ""} ]

export interface TextProps extends BaseProps {
  status: string;
}

export type OptionsStatusArr = StringStatusArr | ValueStatusArr | PicTitleDescStatusArr;

export interface OptionsProps extends BaseProps {
  status: OptionsStatusArr;
  currentStatus: number; // 当前选中的选项索引
}

// 公共的设置项，每个组件都有的设置项
export interface BaseStatus {
  title: TextProps; // 标题
  desc: TextProps; // 描述
  position: OptionsProps; // 对齐方式
  titleSize: OptionsProps; // 标题大小
  descSize: OptionsProps; // 描述大小
  titleWeight: OptionsProps; // 标题加粗
  descWeight: OptionsProps; // 描述加粗
  titleItalic: OptionsProps; // 描述斜体
  descItalic: OptionsProps; // 描述斜体
  titleColor: TextProps; // 标题颜色
  descColor: TextProps; // 描述颜色
}

// 因为不是所有业务组件都有 options 这个设置项，所以需要分开定义
export interface OptionsStatus extends BaseStatus {
  options: OptionsProps;
}

export interface TypeStatus extends BaseStatus {
  type: OptionsProps;
}

export function IsOptionsStatus(status: BaseStatus): status is OptionsStatus {
  console.log(status);

  return "options" in status;
}

export function IsTypeStatus(status: BaseStatus): status is TypeStatus {
  return "type" in status;
}

// 确定 status 是字符串数组
export function isStringArray(status: OptionsStatusArr): status is string[] {
  return Array.isArray(status) && typeof status[0] === "string";
}

// 确定 status 是 { value: string; status: string } 这种类型的数组
export function isValueStatusArr(status: OptionsStatusArr): status is ValueStatusArr {
  return (
    Array.isArray(status) &&
    typeof status[0] === "object" &&
    "value" in status[0] &&
    "status" in status[0]
  );
}

// 确定 status 是 { picTitle: string; picDesc: string; value: string } 这种类型的数组
export function isPicTitleDescStatusArr(status: OptionsStatusArr): status is PicTitleDescStatusArr {
  return (
    Array.isArray(status) &&
    typeof status[0] === "object" &&
    "picTitle" in status[0] &&
    "picDesc" in status[0] &&
    "value" in status[0]
  );
}

export type PicLink = { link: string; index: number };
export function isPicLink(obj: object): obj is PicLink {
  return "link" in obj && "index" in obj;
}
export type GetLink = (obj: PicLink) => void;

export type UpdateStatus = (
  configKey: string,
  payload?: number | string | boolean | PicLink,
) => void;

export type StatusArray = StringStatusArr | ValueStatusArr | PicTitleDescStatusArr;

export function isOptionsProps(props: TextProps | OptionsProps): props is OptionsProps {
  return props && Array.isArray(props.status);
}

// 类型谓词函数，用于检查 status 是否为 Array<{ value: string; status: string }>
export function isValueStatusArray(status: StatusArray): status is ValueStatusArr {
  return (
    Array.isArray(status) &&
    status.length > 0 &&
    typeof status[0] === "object" &&
    "value" in status[0] &&
    "status" in status[0]
  );
}

// 类型谓词函数，用于检查 status 是否为 Array<{ picTitle: string; picDesc: string }>
export function isPicTitleDescArray(status: StatusArray): status is PicTitleDescStatusArr {
  return (
    Array.isArray(status) &&
    status.length > 0 &&
    typeof status[0] === "object" &&
    "picTitle" in status[0] &&
    "picDesc" in status[0]
  );
}
