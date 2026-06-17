<template>
  <!-- <div>颜色编辑组件</div> -->
  <div class="position" :key="props.id">
    <p>{{ props.editName }}</p>

    <el-color-picker
      v-model="color1"
      @change="(val: string | null) => changePosition(val as string)"
    />
  </div>
</template>

<script setup lang="ts">
// import type { VueComType } from "@/views/Custom/Wenjuan/types/common";
// import type { UpdateStatus } from "@/views/Custom/Wenjuan/types/editProps";
import EventBus, { type Events } from "@/views/Custom/Wenjuan/MaterialsView/eventBus";
import type { TFontColor } from "@/views/Custom/Wenjuan/types/config";

const props = defineProps<
  TFontColor & {
    // id: string;
    // status: string;
    // isShow: boolean;
    configKey: string;
    // editName: string;
    // editCom: VueComType;
  }
>();

const color1 = ref(props.status);

// const updateStatus = inject<UpdateStatus>("updateStatus");
const changePosition = (color: string) => {
  // if (updateStatus) {
  //   updateStatus(props.configKey, color);
  //   // const index = props.status.findIndex(item => item === pos);
  //   // if (index !== -1) {
  //   //   updateStatus(props.configKey, index);
  //   // }
  // }

  const obj = {
    name: props.configKey,
    value: color,
  } as Events["UPDATE:TITLE_COLOR"];

  if (props.configKey === "titleColor") {
    EventBus.emit("UPDATE:TITLE_COLOR", obj);
  } else if (props.configKey === "descColor") {
    EventBus.emit("UPDATE:DESC_COLOR", obj);
  } else {
    console.error("类型错误，要求类型为 titleColor 或 descColor");
  }
};
</script>

<style scoped src="@/views/Custom/Wenjuan/MaterialsView/style.css"></style>
<style scoped></style>
