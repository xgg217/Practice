<template>
  <div :key="id">
    <div class="mb-10">{{ props.editName }}</div>
    <el-input placeholder="请输入题目标题" v-model="text" @update:modelValue="inputHandle" />
  </div>
</template>

<script setup lang="ts">
import type { VueComType } from "@/views/Custom/Wenjuan/types/common";
import EventBus from "@/views/Custom/Wenjuan/MaterialsView/eventBus";

const props = defineProps<{
  id: string;
  status: string;
  isShow: boolean;
  configKey: string; // name
  editName: string; // editName
  editCom: VueComType;
}>();

const text = ref(props.status);

function inputHandle(newVal: string) {
  EventBus.emit("UPDATE:TITLE", { name: props.configKey, value: newVal });
}
</script>
