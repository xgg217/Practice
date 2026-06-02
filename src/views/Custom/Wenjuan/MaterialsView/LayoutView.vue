<template>
  <div class="layout-container flex">
    <!-- 选择具体的业务组件 -->
    <div class="left">
      <slot />
    </div>

    <!-- 显示对应的业务组件 -->
    <div class="center">
      <Router-View v-slot="{ Component }">
        <component :is="Component" :status="currentCom.status" :serialNum="1" />
      </Router-View>
    </div>

    <!-- 编辑面板 -->
    <div class="right">
      <EditPannel :com="currentCom" />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { MaterialStore } from "@/views/Custom/Wenjuan/types/store";
import { useMaterialStore } from "@/stores/wenjuan/useMaterialStore";
import EditPannel from "@/views/Custom/Wenjuan/components/EditItems/EditPannel.vue";
import { IsOptionsStatus, isPicLink, IsTypeStatus } from "@/views/Custom/Wenjuan/types/editProps";
import { ElMessage } from "element-plus";
import type {
  OptionsProps,
  TextProps,
  PicLink,
  BaseStatus,
  TypeStatus,
} from "@/views/Custom/Wenjuan/types/editProps";
// import { GET_LINK } from "@/views/Custom/Wenjuan/utils/InjectionKeys";
// import { isPlainObject } from "es-toolkit";
import { changeEditorIsShowStatus } from "@/views/Custom/Wenjuan/utils/index";
import { emitter } from "@/views/Custom/Wenjuan/MaterialsView/mitt";

// 数据仓库
const store = useMaterialStore() as unknown as MaterialStore;

// 获取当前选中组件的状态数据
const currentCom = computed(() => store.coms[store.currentMaterialCom]);

const updateStatus = (key: string, value?: number | string | boolean | object) => {
  // console.log(key, value);
  const status = currentCom.value.status;

  const setType = {
    // type: () => {
    //   if (typeof value === "number" && IsTypeStatus(status as unknown as BaseStatus)) {
    //     // 切换其他编辑器的显示状态
    //     changeEditorIsShowStatus(status as unknown as TypeStatus, value);
    //     store.setCurrentStatus(status[key] as OptionsProps, value);
    //   }
    // },

    // 标题
    // title: () => {
    //   if (typeof value !== "string") {
    //     console.error("类型错误，要求类型为 string");
    //   } else {
    //     // @ts-expect-error 测试1
    //     store.setTextStatus(status[key], value);
    //   }
    // },

    // // 描述内容
    // desc: () => setType["title"](),

    // 选项
    // options: () => {
    //   if (IsOptionsStatus(status as unknown as BaseStatus)) {
    //     // 删除
    //     if (typeof value === "number") {
    //       const iBool = store.removeOption(status[key] as OptionsProps, value);
    //       if (!iBool) {
    //         ElMessage.error("至少保留两个选项");
    //       } else {
    //         ElMessage.success("删除成功");
    //       }
    //       return;
    //     }

    //     // 上传图片 - 设置图片链接
    //     if (isPlainObject(value) && isPicLink(value)) {
    //       // 设图片链接
    //       store.setPicLinkByIndex(status[key] as OptionsProps, value);
    //       return;
    //     }

    //     // 新增
    //     store.addOption(status[key] as OptionsProps);
    //   }
    // },

    // 选项位置
    // position: () => {
    //   if (typeof value !== "number") {
    //     console.error("类型错误，要求类型为 number");
    //     return;
    //   }
    //   store.setPosition(status[key] as OptionsProps, value);
    // },

    // // 标题大小
    // titleSize: () => {
    //   if (typeof value !== "number") {
    //     console.error("类型错误，要求类型为 number");
    //     return;
    //   }

    //   store.setSize(status[key] as OptionsProps, value);
    // },

    // // 描述内容大小
    // descSize: () => setType["titleSize"](),

    // titleWeight: () => {
    //   if (typeof value === "number") {
    //     store.setCurrentStatus(status[key] as OptionsProps, value);
    //   }
    // },

    // // 描述内容粗细
    // descWeight: () => setType["titleWeight"](),

    // // 标题斜体
    // titleItalic: () => {
    //   if (typeof value === "number") {
    //     store.setCurrentStatus(status[key] as OptionsProps, value);
    //   }
    // },

    // // 描述内容斜体
    // descItalic: () => setType["titleItalic"](),

    // // 标题颜色
    // titleColor: () => {
    //   if (typeof value === "string") {
    //     store.setTextStatus(status[key] as TextProps, value);
    //   }
    // },

    // // 描述内容颜色
    // descColor: () => setType["titleColor"](),

    // 默认值
    defaultValue: () => {
      console.error("未适配");
    },
  } satisfies Record<string, () => void>;

  if (key in setType) {
    console.log("1");

    setType[key as keyof typeof setType]();
  } else {
    setType["defaultValue"]();
  }
};

// 右侧编辑器 更新监听
{
  const status = currentCom.value.status;

  // 文本类型
  emitter.on("UPDATE:TYPE", (row) => {
    const { name, value } = row;
    // store.setTextStatus(status[name] as TextProps, value);
    changeEditorIsShowStatus(status as unknown as TypeStatus, value);
    store.setCurrentStatus(status[name] as OptionsProps, value);
  });

  // 更新标题
  emitter.on("UPDATE:TITLE", (row) => {
    const { name, value } = row;
    store.setTextStatus(status[name] as TextProps, value);
  });

  // 更新描述
  emitter.on("UPDATE:DESC", (row) => {
    const { name, value } = row;
    store.setTextStatus(status[name] as TextProps, value);
  });

  // 选项-图片-添加选项
  emitter.on("ADD:OPTION:PIC", (row) => {
    const { name } = row;
    // store.setTextStatus(status[name] as TextProps, value);
    store.addOption(status[name] as OptionsProps);
  });

  // 选项-图片-删除选项
  emitter.on("DELETE:OPTION:PIC", (row) => {
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
  emitter.on("DELETE:PIC:URL", (row) => {
    const { name, value } = row;
    store.setPicLinkByIndex(status[name] as OptionsProps, {
      link: "",
      index: value,
    });
  });

  // 选项-图片-更新图片链接
  emitter.on("UPDATE:PIC:URL", (row) => {
    const { name, value } = row;
    store.setPicLinkByIndex(status[name] as OptionsProps, {
      link: value.link,
      index: value.index,
    });
  });

  // 选项-辅助文字-切换
  emitter.on("UPDATE:OPTION:USE", (row) => {
    const { name, value } = row;
    store.setUse(status[name] as OptionsProps, value);
  });

  // 选项-辅助文字-修改
  emitter.on("UPDATE:OPTION:USE:TEXT", (row) => {
    const { name, value } = row;
    console.log(row);

    // store.setUse(status[name] as OptionsProps, value);
    store.setPicLinkByIndex(status[name] as OptionsProps, {
      link: value.link,
      index: value.index,
    });
  });

  // 对齐方式
  emitter.on("UPDATE:POSITION", (row) => {
    const { name, value } = row;
    // store.setTextStatus(status[name] as TextProps, value);
    // store.setSize(status[name] as OptionsProps, value);
    store.setPosition(status[name] as OptionsProps, value);
  });

  // 标题字体大小
  emitter.on("UPDATE:TITLE_SIZE", (row) => {
    const { name, value } = row;
    // store.setTextStatus(status[name] as TextProps, value);
    store.setSize(status[name] as OptionsProps, value);
  });

  // 描述字体大小
  emitter.on("UPDATE:DESC_SIZE", (row) => {
    const { name, value } = row;
    // store.setTextStatus(status[name] as TextProps, value);
    store.setSize(status[name] as OptionsProps, value);
  });

  // 标题字体加粗
  emitter.on("UPDATE:TITLE_WEIGHT", (row) => {
    const { name, value } = row;
    // store.setTextStatus(status[name] as TextProps, value);
    // store.setSize(status[name] as OptionsProps, value);
    store.setCurrentStatus(status[name] as OptionsProps, value);
  });

  // 描述字体加粗
  emitter.on("UPDATE:DESC_WEIGHT", (row) => {
    const { name, value } = row;
    // store.setTextStatus(status[name] as TextProps, value);
    // store.setSize(status[name] as OptionsProps, value);
    store.setCurrentStatus(status[name] as OptionsProps, value);
  });

  // 标题字体斜体
  emitter.on("UPDATE:TITLE_ITALIC", (row) => {
    const { name, value } = row;
    store.setCurrentStatus(status[name] as OptionsProps, value);
  });

  // 描述字体斜体
  emitter.on("UPDATE:DESC_ITALIC", (row) => {
    const { name, value } = row;
    store.setCurrentStatus(status[name] as OptionsProps, value);
  });

  // 更新 标题字体颜色
  emitter.on("UPDATE:TITLE_COLOR", (row) => {
    const { name, value } = row;
    store.setTextStatus(status[name] as TextProps, value);
  });

  // 更新 描述字体颜色
  emitter.on("UPDATE:DESC_COLOR", (row) => {
    const { name, value } = row;
    store.setTextStatus(status[name] as TextProps, value);
  });
}

// 图片选择（获取上传图片的值）
// const getLink = (row: PicLink) => {
//   console.log("getLink", row);

//   updateStatus("options", row);
// };

provide("updateStatus", updateStatus);
// provide(GET_LINK, getLink);

onBeforeUnmount(() => {
  // 移除所有监听
  emitter.all.clear();
});
</script>

<style scoped>
.layout-container {
  width: 99%;
  height: 100%;
  /* // Header组件高度50px，h1高度50px，上下margin 20px，最后20px是额外多减去一部分，避免贴底 */
  /* height: calc(100vh - 100px - 40px - 20px); */
  align-items: flex-start;
  border: 1px solid var(--border-color);
  border-top-right-radius: var(--border-radius-lg);
  border-bottom-left-radius: var(--border-radius-lg);
  border-bottom-right-radius: var(--border-radius-lg);
  /* border: 1px solid #000; */
}
.left {
  /* width: 190px; */
  width: 210px;
  height: calc(100% - 20px);
  border-right: 1px solid #000;
  display: flex;
  flex-wrap: wrap;
  text-align: center;
  align-content: start;
}
.center {
  min-width: 550px;
  height: inherit;
  flex: 1;
  overflow-y: scroll;
  padding: 5px 10px;
  box-sizing: border-box;
}
.right {
  /* width: 350px; */
  width: 350px;
  height: 100%;
  overflow-y: scroll;
  border-left: 1px solid var(--border-color);
}
</style>
