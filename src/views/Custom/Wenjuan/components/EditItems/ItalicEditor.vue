<template>
  <!-- 字体倾斜编辑组件 -->
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
import type { Events } from "@/views/Custom/Wenjuan/types/eventBus";
import type { UpdateStatus } from "@/views/Custom/Wenjuan/types/editProps";

const props = defineProps<{
  id: string;
  currentStatus: number;
  status: string[];
  isShow: boolean;
  configKey: string;
  editName: string;
  editCom: VueComType;
}>();

const radio = ref(props.status[props.currentStatus]);

const updateStatus = inject<UpdateStatus>("updateStatus")!;

const changePosition = (pos: string) => {
  const index = props.status.findIndex((item) => item === pos);

  const obj = {
    name: props.configKey,
    value: index,
  } as Events["UPDATE:TITLE_ITALIC"];

  if (props.configKey === "titleItalic") {
    updateStatus("UPDATE:TITLE_ITALIC", obj);
  } else if (props.configKey === "descItalic") {
    updateStatus("UPDATE:DESC_ITALIC", obj);
  } else {
    console.error("类型错误，要求类型为 titleItalic 或 descItalic");
  }
};
</script>

<style scoped src="@/views/Custom/Wenjuan/MaterialsView/style.css"></style>
<style scoped></style>
