// 工具库
// import type {
//   TextProps,
//   OptionsProps,
//   TypeStatus,
//   Status,
//   Material,
//   SurveyDBData,
//   EditComName,
//   BaseStatus,
// } from "@/types";
// import { isStringArray, isPicTitleDescStatusArr, IsOptionsStatus } from "@/types";
// import { genderStatus, educationStatus } from "@/configs/defaultStatus/initStatus";
// import type { TableColumnCtx } from "element-plus";
// import { componentMap } from "@/configs/componentMap";

import type {
  TextProps,
  OptionsProps,
  TypeStatus,
  BaseStatus,
  OptionsStatusArr,
} from "@/views/Custom/Wenjuan/types/editProps";
import {
  isOptionsProps,
  isValueStatusArray,
  isPicTitleDescArray,
  isPicTitleDescStatusArr,
  IsOptionsStatus,
} from "@/views/Custom/Wenjuan/types/editProps";
import { OPTIONS_STATUS_ENUM } from "@/views/Custom/Wenjuan/consts";
import type { Status } from "@/views/Custom/Wenjuan/types/common";
import type { SurveyDBData } from "@/views/Custom/Wenjuan/types/db";
import type { Material, EditComName } from "@/views/Custom/Wenjuan/types/store";

export function getTextStatus(props: TextProps) {
  return props.status;
}

// 确定 status 是字符串数组
export function isStringArray(status: OptionsStatusArr): status is string[] {
  return Array.isArray(status) && typeof status[0] === "string";
}

export function getStringStatus(props: OptionsProps) {
  if (props && isStringArray(props.status)) {
    return props.status;
  }
  return [];
}

export function getPicTitleDescStatusArr(props: OptionsProps) {
  if (props && isPicTitleDescStatusArr(props.status)) {
    return props.status;
  }
  return [];
}

export function getCurrentStatus(props: OptionsProps) {
  // console.log(props);

  return props?.currentStatus || 0;
}

export function getStringStatusByCurrentStatus(props: OptionsProps) {
  if (props && isStringArray(props.status)) {
    return props.status[props.currentStatus];
  }
}

export function getValueStatus(props: OptionsProps) {
  if (
    props &&
    isOptionsProps(props) &&
    (isValueStatusArray(props.status) || isPicTitleDescArray(props.status))
  ) {
    return props.status;
  }
}

// 文本类型切换
export function changeEditorIsShowStatus(status: TypeStatus, type: number) {
  // console.log(type);
  // console.log(status.type.currentStatus);

  if (type !== status.type.currentStatus) {
    status.title.isShow = !status.title.isShow;
    status.desc.isShow = !status.desc.isShow;
    status.position.isShow = !status.position.isShow;
    status.titleSize.isShow = !status.titleSize.isShow;
    status.descSize.isShow = !status.descSize.isShow;
    status.titleWeight.isShow = !status.titleWeight.isShow;
    status.descWeight.isShow = !status.descWeight.isShow;
    status.titleItalic.isShow = !status.titleItalic.isShow;
    status.descItalic.isShow = !status.descItalic.isShow;
    status.titleColor.isShow = !status.titleColor.isShow;
    status.descColor.isShow = !status.descColor.isShow;
  }
}

// 备注说明切换
export function changeEditorIsShowStatusCommentType(status: TypeStatus) {
  // console.log(type);
  // console.log(status.type.currentStatus);

  // if (type !== status.type.currentStatus) {
  status.title.isShow = !status.title.isShow;
  status.desc.isShow = !status.desc.isShow;
  // status.position.isShow = !status.position.isShow;
  status.titleSize.isShow = !status.titleSize.isShow;
  status.descSize.isShow = !status.descSize.isShow;
  status.titleWeight.isShow = !status.titleWeight.isShow;
  status.descWeight.isShow = !status.descWeight.isShow;
  status.titleItalic.isShow = !status.titleItalic.isShow;
  status.descItalic.isShow = !status.descItalic.isShow;
  status.titleColor.isShow = !status.titleColor.isShow;
  status.descColor.isShow = !status.descColor.isShow;
  // }
}

export function getValueStatusByCurrentStatus(props: OptionsProps) {
  if (
    props &&
    isOptionsProps(props) &&
    (isValueStatusArray(props.status) || isPicTitleDescArray(props.status))
  ) {
    return props.status[props.currentStatus];
  }
}

// // 处理日期格式的辅助方法
// export function formatDate(
//   row: SurveyDBData,
//   column: TableColumnCtx<SurveyDBData>,
//   cellValue: number,
// ) {
//   const options: Intl.DateTimeFormatOptions = {
//     year: "numeric",
//     month: "2-digit",
//     day: "2-digit",
//     hour: "2-digit",
//     minute: "2-digit",
//     second: "2-digit",
//   };
//   return new Intl.DateTimeFormat("zh-CN", options).format(new Date(cellValue));
// }

// export const restoreComponentStatus = (coms: Status[]) => {
//   coms.forEach(com => {
//     // 业务组件的还原
//     com.type = componentMap[com.name]; // 这一步就做了组件的还原
//     // 接下来还原编辑组件
//     for (const key in com.status) {
//       const name = com.status[key].name as EditComName;
//       com.status[key].editCom = componentMap[name];
//     }
//   });
// };

export const { ROUTE_NAME_EDITOR, ROUTE_NAME_MATERIALS, setStorage } = (() => {
  const activeView = "activeView";

  const ROUTE_NAME_EDITOR = "route_editor"; // 问卷-编辑器
  const ROUTE_NAME_MATERIALS = "route_materials"; // 问卷-组件市场

  // 存储当前激活的路由
  const setStorage = (name: string) => {
    localStorage.setItem(activeView, name);
  };

  return {
    ROUTE_NAME_EDITOR,
    ROUTE_NAME_MATERIALS,
    setStorage,
  };
})();
