<template>
  <!-- <div>字体粗细编辑组件</div> -->
  <div class="position" :key="props.id">
    <p>{{ props.editName }}</p>
    <el-radio-group v-model="radio" @change="(val) => changePosition(val as string)">
      <el-radio-button :value="item" v-for="item of props.status" :key="item">
        {{ item }}
      </el-radio-button>
    </el-radio-group>
  </div>
</template>

<script setup lang="ts">
import type { VueComType } from "@/views/Custom/Wenjuan/types/common";
// import EventBus, { type Events } from "@/views/Custom/Wenjuan/MaterialsView/eventBus";
import type { Events } from "@/views/Custom/Wenjuan/types/eventBus";
import type { UpdateStatus } from "@/views/Custom/Wenjuan/types/editProps";

const props = defineProps<{
  currentStatus: number;
  status: string[];
  isShow: boolean;
  configKey: string;
  editName: string;
  editCom: VueComType;
  id: string;
}>();

const updateStatus = inject<UpdateStatus>("updateStatus")!;

const radio = ref(props.status[props.currentStatus]);

const changePosition = (pos: string) => {
  const index = props.status.findIndex((item) => item === pos);

  const obj = {
    name: props.configKey,
    value: index,
  } as Events["UPDATE:TITLE_WEIGHT"];

  if (props.configKey === "titleWeight") {
    // EventBus.emit("UPDATE:TITLE_WEIGHT", obj);
    updateStatus("UPDATE:TITLE_WEIGHT", obj);
  } else if (props.configKey === "descWeight") {
    // EventBus.emit("UPDATE:DESC_WEIGHT", obj);
    updateStatus("UPDATE:DESC_WEIGHT", obj);
  } else {
    console.error("类型错误，要求类型为 titleItalic 或 descItalic");
  }
};
</script>

<style scoped src="@/views/Custom/Wenjuan/MaterialsView/style.css"></style>
<style scoped></style>
