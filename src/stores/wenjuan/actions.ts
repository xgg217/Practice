import type { TextProps, OptionsProps } from "@/views/Custom/Wenjuan/types/editProps";

import {
  isStringArray,
  isPicTitleDescStatusArr,
  type PicLink,
} from "@/views/Custom/Wenjuan/types/editProps";

// 赋值
export const setTextStatus = (textProps: TextProps, value: string) => {
  textProps.status = value;
};

// 删除
export const removeOption = (optionProps: OptionsProps, index: number) => {
  if (optionProps.status.length === 2) {
    return false;
  }

  optionProps.status.splice(index, 1);
  return true;
};

// 新增
export const addOption = (optionProps: OptionsProps) => {
  if (isStringArray(optionProps.status)) {
    optionProps.status.push("新选项");
  } else if (isPicTitleDescStatusArr(optionProps.status)) {
    optionProps.status.push({ picTitle: "图片标题", picDesc: "图片描述", value: "" });
  }
};

// 设置选项
export function setPosition(optionProps: OptionsProps, index: number) {
  optionProps.currentStatus = index;
}

// 设置 currentStatus 属性
export function setCurrentStatus(optionProps: OptionsProps, index: number) {
  optionProps.currentStatus = index;
}

export function setPicLinkByIndex(optionProps: OptionsProps, payload: PicLink) {
  if (isPicTitleDescStatusArr(optionProps.status)) {
    optionProps.status[payload.index]!.value = payload.link;
  }
}
