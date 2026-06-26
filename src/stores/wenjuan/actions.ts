import type { TextProps, OptionsProps } from "@/views/Custom/Wenjuan/types/editProps";
import { EDIT_COM_MAP, BUSINESS_COM_MAP } from "./config";
import {
  isStringArray,
  isPicTitleDescStatusArr,
  type PicLink,
} from "@/views/Custom/Wenjuan/types/editProps";
import type { Status } from "@/views/Custom/Wenjuan/types/common";
import type { Material, EditComName } from "@/views/Custom/Wenjuan/types/store";

// 赋值
export const setTextStatus = (textProps: TextProps, value: string) => {
  textProps.status = value;
};

// 删除
export const removeOption = (optionProps: OptionsProps, index: number) => {
  console.log(optionProps);

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
  } else {
    console.error("存在新类型");
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

// 设置 currentStatus 属性
export function setSize(optionProps: OptionsProps, index: number) {
  optionProps.currentStatus = index;
}

export function setPicLinkByIndex(optionProps: OptionsProps, payload: PicLink) {
  if (isPicTitleDescStatusArr(optionProps.status)) {
    optionProps.status[payload.index]!.value = payload.link;
  }
}

// 设置选项-辅助文字-切换
export function setUse(optionsProps: OptionsProps, isUse: boolean) {
  optionsProps.isUse = isUse;
}

/**
 * 还原组件状态，因为保存的时候丢失了组件的引用
 * @param coms 题目数组
 */
export const restoreComponentStatus = (coms: Status[]) => {
  // console.log(coms);

  coms.forEach((com) => {
    console.log(BUSINESS_COM_MAP[com.name]());

    com.type = BUSINESS_COM_MAP[com.name]().type;
    // console.log(com.status);

    for (const key in com.status) {
      const name = com.status[key].name as EditComName;
      // console.log(name);
      console.log(EDIT_COM_MAP[name]);
      // console.log(com.status[key]);

      com.status[key].editCom = EDIT_COM_MAP[name];
    }
  });
};
