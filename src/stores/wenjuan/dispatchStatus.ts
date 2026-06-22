import type { MaterialStore } from "@/views/Custom/Wenjuan/types/store";
import {
  changeEditorIsShowStatus,
  changeEditorIsShowStatusCommentType,
} from "@/views/Custom/Wenjuan/utils/index";
import { ElMessage } from "element-plus";
import type {
  OptionsProps,
  TextProps,
  // PicLink,
  // BaseStatus,
  OptionsStatus,
  TypeStatus,
} from "@/views/Custom/Wenjuan/types/editProps";
import type { EditorStore } from "@/views/Custom/Wenjuan/types/store";
import type { Events } from "@/views/Custom/Wenjuan/types/eventBus";

export const dispatchStatus = (
  store: MaterialStore | EditorStore,
  status: TypeStatus | OptionsStatus,
  name: string,
  row: anyObj,
) => {
  // 获取当前选中组件的状态数据
  // const currentCom = computed(() => store.coms[store.currentMaterialCom]);

  console.log(status);

  // const status = currentCom.value.status;
  if (!status) return;

  const EVENT_OBJ = {
    // 文本类型
    "UPDATE:TYPE": (row: Events["UPDATE:TYPE"]) => {
      const { name, value } = row;
      // store.setTextStatus(status[name] as TextProps, value);
      changeEditorIsShowStatus(status as unknown as TypeStatus, value);
      store.setCurrentStatus(status[name] as OptionsProps, value);
    },

    // 备注说明类型
    "UPDATE:COMMENT_TYPE": (row: Events["UPDATE:COMMENT_TYPE"]) => {
      const { name, value } = row;
      changeEditorIsShowStatusCommentType(status as unknown as TypeStatus, value);
      store.setCurrentStatus(status[name] as OptionsProps, value);
    },

    // 更新标题
    "UPDATE:TITLE": (row: Events["UPDATE:TITLE"]) => {
      const { name, value } = row;
      store.setTextStatus(status[name] as TextProps, value);
    },

    // 更新描述
    "UPDATE:DESC": (row: Events["UPDATE:DESC"]) => {
      const { name, value } = row;
      store.setTextStatus(status[name] as TextProps, value);
    },

    // 选项 添加
    "ADD:OPTION": (row: Events["ADD:OPTION"]) => {
      const { name } = row;
      store.addOption(status[name] as OptionsProps);
    },

    // 选项 删除
    "DELETE:OPTION": (row: Events["DELETE:OPTION"]) => {
      const { name, value } = row;

      const iBool = store.removeOption(status[name] as OptionsProps, value);

      if (!iBool) {
        ElMessage.error("至少保留两个选项");
      } else {
        ElMessage.success("删除成功");
      }
    },

    // 选项-图片-添加选项
    "ADD:OPTION:PIC": (row: Events["ADD:OPTION:PIC"]) => {
      const { name } = row;
      // store.setTextStatus(status[name] as TextProps, value);
      store.addOption(status[name] as OptionsProps);
    },

    // 选项-图片-删除选项
    "DELETE:OPTION:PIC": (row: Events["DELETE:OPTION:PIC"]) => {
      const { name, value } = row;
      // store.setTextStatus(status[name] as TextProps, value);
      // store.addOption(status[name] as OptionsProps);
      const iBool = store.removeOption(status[name] as OptionsProps, value);
      if (!iBool) {
        ElMessage.error("至少保留两个选项");
      } else {
        ElMessage.success("删除成功");
      }
    },

    // 选项-图片-删除图片
    "DELETE:PIC:URL": (row: Events["DELETE:PIC:URL"]) => {
      const { name, value } = row;
      store.setPicLinkByIndex(status[name] as OptionsProps, {
        link: "",
        index: value,
      });
    },

    // 选项-图片-更新图片链接
    "UPDATE:PIC:URL": (row: Events["UPDATE:PIC:URL"]) => {
      const { name, value } = row;
      store.setPicLinkByIndex(status[name] as OptionsProps, {
        link: value.link,
        index: value.index,
      });
    },

    // 选项-辅助文字-切换
    "UPDATE:OPTION:USE": (row: Events["UPDATE:OPTION:USE"]) => {
      const { name, value } = row;
      store.setUse(status[name] as OptionsProps, value);
    },

    // 选项-辅助文字-修改
    "UPDATE:OPTION:USE:TEXT": (row: Events["UPDATE:OPTION:USE:TEXT"]) => {
      const { name, value } = row;

      // store.setUse(status[name] as OptionsProps, value);
      store.setPicLinkByIndex(status[name] as OptionsProps, {
        link: value.link,
        index: value.index,
      });
    },

    // 选项-日期类型-切换
    "UPDATE:OPTION:DATE_TIME": (row: Events["UPDATE:OPTION:DATE_TIME"]) => {
      const { name, value } = row;
      store.setCurrentStatus(status[name] as OptionsProps, value);
    },

    // 对齐方式
    "UPDATE:POSITION": (row: Events["UPDATE:POSITION"]) => {
      const { name, value } = row;
      // store.setTextStatus(status[name] as TextProps, value);
      // store.setSize(status[name] as OptionsProps, value);
      store.setPosition(status[name] as OptionsProps, value);
    },

    // 标题字体大小
    "UPDATE:TITLE_SIZE": (row: Events["UPDATE:TITLE_SIZE"]) => {
      const { name, value } = row;
      // store.setTextStatus(status[name] as TextProps, value);
      store.setSize(status[name] as OptionsProps, value);
    },

    // 描述字体大小
    "UPDATE:DESC_SIZE": (row: Events["UPDATE:DESC_SIZE"]) => {
      const { name, value } = row;
      // store.setTextStatus(status[name] as TextProps, value);
      store.setSize(status[name] as OptionsProps, value);
    },

    // 标题字体加粗
    "UPDATE:TITLE_WEIGHT": (row: Events["UPDATE:TITLE_WEIGHT"]) => {
      const { name, value } = row;
      // store.setTextStatus(status[name] as TextProps, value);
      // store.setSize(status[name] as OptionsProps, value);
      store.setCurrentStatus(status[name] as OptionsProps, value);
    },

    // 描述字体加粗
    "UPDATE:DESC_WEIGHT": (row: Events["UPDATE:DESC_WEIGHT"]) => {
      const { name, value } = row;
      // store.setTextStatus(status[name] as TextProps, value);
      // store.setSize(status[name] as OptionsProps, value);
      store.setCurrentStatus(status[name] as OptionsProps, value);
    },

    // 标题字体斜体
    "UPDATE:TITLE_ITALIC": (row: Events["UPDATE:TITLE_ITALIC"]) => {
      const { name, value } = row;
      store.setCurrentStatus(status[name] as OptionsProps, value);
    },

    // 描述字体斜体
    "UPDATE:DESC_ITALIC": (row: Events["UPDATE:DESC_ITALIC"]) => {
      const { name, value } = row;
      store.setCurrentStatus(status[name] as OptionsProps, value);
    },

    // 更新 标题字体颜色
    "UPDATE:TITLE_COLOR": (row: Events["UPDATE:TITLE_COLOR"]) => {
      const { name, value } = row;
      store.setTextStatus(status[name] as TextProps, value);
    },

    // 更新 描述字体颜色
    "UPDATE:DESC_COLOR": (row: Events["UPDATE:DESC_COLOR"]) => {
      const { name, value } = row;
      store.setTextStatus(status[name] as TextProps, value);
    },
  };

  if (Object.hasOwn(EVENT_OBJ, name)) {
    EVENT_OBJ[name](row);
  } else {
    ElMessage.error("事件不存在");
  }
};
