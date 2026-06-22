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
import { dispatchStatus } from "@/stores/wenjuan/dispatchStatus";
import type {
  // PicLink,
  // BaseStatus,
  OptionsStatus,
  TypeStatus,
} from "@/views/Custom/Wenjuan/types/editProps";

// 数据仓库
const store = useMaterialStore() as unknown as MaterialStore;

// 获取当前选中组件的状态数据
const currentCom = computed(() => store.coms[store.currentMaterialCom]);

const status = currentCom.value.status as unknown as TypeStatus | OptionsStatus;

const updateStatus = (name: string, row: anyObj) => {
  dispatchStatus(store, status, name, row);
};

provide("updateStatus", updateStatus);
// provide(GET_LINK, getLink);
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
