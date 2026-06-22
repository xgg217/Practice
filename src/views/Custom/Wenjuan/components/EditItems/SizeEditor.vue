<!-- 字体大小编辑器 -->
<template>
  <div class="position" :key="props.id">
    <p>{{ props.editName }}</p>
    <el-radio-group v-model="radio" @change="(val) => changeSize(val as string)">
      <el-radio-button :value="item" v-for="item of props.status" :key="item">
        {{ item }}
      </el-radio-button>
    </el-radio-group>
  </div>
</template>

<script setup lang="ts">
import type { VueComType } from "@/views/Custom/Wenjuan/types/common";
// import type { UpdateStatus } from "@/views/Custom/Wenjuan/types/editProps";
// import EventBus, { type Events } from "@/views/Custom/Wenjuan/MaterialsView/eventBus";
import type { UpdateStatus } from "@/views/Custom/Wenjuan/types/editProps";
import type { Events } from "@/views/Custom/Wenjuan/types/eventBus";

const props = defineProps<{
  currentStatus: number;
  status: string[];
  isShow: boolean;
  configKey: string;
  editName: string; // editName
  editCom: VueComType;
  id: string;
}>();

const updateStatus = inject<UpdateStatus>("updateStatus")!;

const radio = ref(props.status[props.currentStatus]);

const changeSize = (val: string) => {
  const index = props.status.findIndex((item) => item === val);

  const obj = {
    name: props.configKey,
    value: index,
  } as Events["UPDATE:DESC_SIZE"];

  if (props.configKey === "titleSize") {
    // EventBus.emit("UPDATE:TITLE_SIZE", obj);
    updateStatus("UPDATE:TITLE_SIZE", obj);
  } else if (props.configKey === "descSize") {
    // EventBus.emit("UPDATE:DESC_SIZE", obj);
    updateStatus("UPDATE:DESC_SIZE", obj);
  } else {
    console.error("类型错误，要求类型为 titleSize 或 descSize");
  }
};
</script>

<style scoped src="@/views/Custom/Wenjuan/MaterialsView/style.css"></style>
<style scoped></style>
