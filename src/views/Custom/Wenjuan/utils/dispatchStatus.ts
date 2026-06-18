import type { MaterialStore } from "@/views/Custom/Wenjuan/types/store";
import EventBus from "@/views/Custom/Wenjuan/MaterialsView/eventBus";
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

export const useDispatchStatusHook = (
  store: MaterialStore | EditorStore,
  status: TypeStatus | OptionsStatus,
) => {
  // 获取当前选中组件的状态数据
  // const currentCom = computed(() => store.coms[store.currentMaterialCom]);

  // const status = currentCom.value.status;

  // 文本类型
  EventBus.on("UPDATE:TYPE", (row) => {
    const { name, value } = row;
    // store.setTextStatus(status[name] as TextProps, value);
    changeEditorIsShowStatus(status as unknown as TypeStatus, value);
    store.setCurrentStatus(status[name] as OptionsProps, value);
  });

  // 备注说明类型
  EventBus.on("UPDATE:COMMENT_TYPE", (row) => {
    const { name, value } = row;
    changeEditorIsShowStatusCommentType(status as unknown as TypeStatus);
    store.setCurrentStatus(status[name] as OptionsProps, value);
  });

  // 更新标题
  EventBus.on("UPDATE:TITLE", (row) => {
    const { name, value } = row;
    store.setTextStatus(status[name] as TextProps, value);
  });

  // 更新描述
  EventBus.on("UPDATE:DESC", (row) => {
    const { name, value } = row;
    store.setTextStatus(status[name] as TextProps, value);
  });

  // 选项 添加
  EventBus.on("ADD:OPTION", (row) => {
    const { name } = row;
    store.addOption(status[name] as OptionsProps);
  });

  // 选项 删除
  EventBus.on("DELETE:OPTION", (row) => {
    const { name, value } = row;

    const iBool = store.removeOption(status[name] as OptionsProps, value);

    if (!iBool) {
      ElMessage.error("至少保留两个选项");
    } else {
      ElMessage.success("删除成功");
    }
  });

  // 选项-图片-添加选项
  EventBus.on("ADD:OPTION:PIC", (row) => {
    const { name } = row;
    // store.setTextStatus(status[name] as TextProps, value);
    store.addOption(status[name] as OptionsProps);
  });

  // 选项-图片-删除选项
  EventBus.on("DELETE:OPTION:PIC", (row) => {
    const { name, value } = row;
    // store.setTextStatus(status[name] as TextProps, value);
    // store.addOption(status[name] as OptionsProps);
    const iBool = store.removeOption(status[name] as OptionsProps, value);
    if (!iBool) {
      ElMessage.error("至少保留两个选项");
    } else {
      ElMessage.success("删除成功");
    }
  });

  // 选项-图片-删除图片
  EventBus.on("DELETE:PIC:URL", (row) => {
    const { name, value } = row;
    store.setPicLinkByIndex(status[name] as OptionsProps, {
      link: "",
      index: value,
    });
  });

  // 选项-图片-更新图片链接
  EventBus.on("UPDATE:PIC:URL", (row) => {
    const { name, value } = row;
    store.setPicLinkByIndex(status[name] as OptionsProps, {
      link: value.link,
      index: value.index,
    });
  });

  // 选项-辅助文字-切换
  EventBus.on("UPDATE:OPTION:USE", (row) => {
    const { name, value } = row;
    store.setUse(status[name] as OptionsProps, value);
  });

  // 选项-辅助文字-修改
  EventBus.on("UPDATE:OPTION:USE:TEXT", (row) => {
    const { name, value } = row;

    // store.setUse(status[name] as OptionsProps, value);
    store.setPicLinkByIndex(status[name] as OptionsProps, {
      link: value.link,
      index: value.index,
    });
  });

  // 选项-日期类型-切换
  EventBus.on("UPDATE:OPTION:DATE_TIME", (row) => {
    const { name, value } = row;
    store.setCurrentStatus(status[name] as OptionsProps, value);
  });

  // 对齐方式
  EventBus.on("UPDATE:POSITION", (row) => {
    const { name, value } = row;
    // store.setTextStatus(status[name] as TextProps, value);
    // store.setSize(status[name] as OptionsProps, value);
    store.setPosition(status[name] as OptionsProps, value);
  });

  // 标题字体大小
  EventBus.on("UPDATE:TITLE_SIZE", (row) => {
    const { name, value } = row;
    // store.setTextStatus(status[name] as TextProps, value);
    store.setSize(status[name] as OptionsProps, value);
  });

  // 描述字体大小
  EventBus.on("UPDATE:DESC_SIZE", (row) => {
    const { name, value } = row;
    // store.setTextStatus(status[name] as TextProps, value);
    store.setSize(status[name] as OptionsProps, value);
  });

  // 标题字体加粗
  EventBus.on("UPDATE:TITLE_WEIGHT", (row) => {
    const { name, value } = row;
    // store.setTextStatus(status[name] as TextProps, value);
    // store.setSize(status[name] as OptionsProps, value);
    store.setCurrentStatus(status[name] as OptionsProps, value);
  });

  // 描述字体加粗
  EventBus.on("UPDATE:DESC_WEIGHT", (row) => {
    const { name, value } = row;
    // store.setTextStatus(status[name] as TextProps, value);
    // store.setSize(status[name] as OptionsProps, value);
    store.setCurrentStatus(status[name] as OptionsProps, value);
  });

  // 标题字体斜体
  EventBus.on("UPDATE:TITLE_ITALIC", (row) => {
    const { name, value } = row;
    store.setCurrentStatus(status[name] as OptionsProps, value);
  });

  // 描述字体斜体
  EventBus.on("UPDATE:DESC_ITALIC", (row) => {
    const { name, value } = row;
    store.setCurrentStatus(status[name] as OptionsProps, value);
  });

  // 更新 标题字体颜色
  EventBus.on("UPDATE:TITLE_COLOR", (row) => {
    const { name, value } = row;
    store.setTextStatus(status[name] as TextProps, value);
  });

  // 更新 描述字体颜色
  EventBus.on("UPDATE:DESC_COLOR", (row) => {
    const { name, value } = row;
    store.setTextStatus(status[name] as TextProps, value);
  });

  onBeforeUnmount(() => {
    // 移除所有监听
    EventBus.all.clear();
  });
};
