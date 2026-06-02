<template>
  <!-- <div>字体粗细编辑组件</div> -->
  <div class="position">
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
// import type { UpdateStatus } from "@/views/Custom/Wenjuan/types/editProps";
import { emitter, type Events } from "@/views/Custom/Wenjuan/MaterialsView/mitt";

const props = defineProps<{
  currentStatus: number;
  status: string[];
  isShow: boolean;
  configKey: string;
  editName: string;
  editCom: VueComType;
}>();

const radio = ref(props.status[props.currentStatus]);

// const updateStatus = inject<UpdateStatus>("updateStatus");
const changePosition = (pos: string) => {
  // if (updateStatus) {
  const index = props.status.findIndex((item) => item === pos);
  //   if (index !== -1) {
  //     updateStatus(props.configKey, index);
  //   }
  // }

  const obj = {
    name: props.configKey,
    value: index,
  } as Events["UPDATE:TITLE_WEIGHT"];

  if (props.configKey === "titleWeight") {
    emitter.emit("UPDATE:TITLE_WEIGHT", obj);
  } else if (props.configKey === "descWeight") {
    emitter.emit("UPDATE:DESC_WEIGHT", obj);
  } else {
    console.error("类型错误，要求类型为 titleItalic 或 descItalic");
  }
};
</script>

<style scoped src="@/views/Custom/Wenjuan/MaterialsView/style.css"></style>
<style scoped></style>
