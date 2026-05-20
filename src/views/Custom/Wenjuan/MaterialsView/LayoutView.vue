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
import { IsOptionsStatus } from "@/views/Custom/Wenjuan/types/editProps";
import { ElMessage } from "element-plus";
import type { OptionsProps, TextProps } from "@/views/Custom/Wenjuan/types/editProps";

// 数据仓库
const store = useMaterialStore() as unknown as MaterialStore;

// 获取当前选中组件的状态数据
const currentCom = computed(() => store.coms[store.currentMaterialCom]);

const updateStatus = (key: string, value?: number | string | boolean | object) => {
  // console.log(key, value);
  const status = currentCom.value.status;

  // store.setTextStatus
  switch (key) {
    case "title":
    case "desc":
      if (typeof value !== "string") {
        console.error("类型错误，要求类型为 string");
      } else {
        // @ts-expect-error 测试1
        store.setTextStatus(status[key], value);
      }
      break;
    case "options":
      // @ts-expect-error 测试1
      if (IsOptionsStatus(status)) {
        console.log(1);

        // 删除
        if (typeof value === "number") {
          const iBool = store.removeOption(status[key], value);
          if (!iBool) {
            ElMessage.error("至少保留两个选项");
          } else {
            ElMessage.success("删除成功");
          }
          break;
        }

        // 新增
        store.addOption(status[key]);
      }
      break;
    case "position":
      if (typeof value !== "number") {
        console.error("类型错误，要求类型为 number");
        return;
      }
      store.setPosition(status[key] as OptionsProps, value);
      break;
    case "titleSize":
    case "descSize":
      if (typeof value !== "number") {
        console.error("类型错误，要求类型为 number");
        return;
      }
      store.setCurrentStatus(status[key] as OptionsProps, value);
      break;
    case "titleWeight":
    case "descWeight":
      if (typeof value === "number") {
        store.setCurrentStatus(status[key] as OptionsProps, value);
        break;
      }
      break;

    case "titleItalic":
    case "descItalic":
      if (typeof value === "number") {
        store.setCurrentStatus(status[key] as OptionsProps, value);
        break;
      }
      break;
    case "titleColor":
    case "descColor":
      if (typeof value === "string") {
        store.setTextStatus(status[key] as TextProps, value);
        break;
      }
      break;
  }
};

provide("updateStatus", updateStatus);
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
  min-width: 350px;
  height: 100%;
  overflow-y: scroll;
  border-left: 1px solid var(--border-color);
}
</style>
