<template>
  <div :key="props.id">
    <div class="mb-10">描述内容</div>
    <el-input
      :rows="5"
      type="textarea"
      placeholder="请输入题目标题"
      v-model="text"
      @update:modelValue="inputHandle"
    />
  </div>
</template>

<script setup lang="ts">
import type { VueComType } from "@/views/Custom/Wenjuan/types/common";
// import type { UpdateStatus } from "@/views/Custom/Wenjuan/types/editProps";
import EventBus from "@/views/Custom/Wenjuan/MaterialsView/eventBus";

const props = defineProps<{
  status: string;
  isShow: boolean;
  configKey: string;
  editCom: VueComType;
  id: string;
}>();

const text = ref(props.status);

function inputHandle(newVal: string) {
  EventBus.emit("UPDATE:DESC", { name: props.configKey, value: newVal });
}
</script>
