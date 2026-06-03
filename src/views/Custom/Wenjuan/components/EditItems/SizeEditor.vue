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
import { emitter, type Events } from "@/views/Custom/Wenjuan/MaterialsView/mitt";

const props = defineProps<{
  currentStatus: number;
  status: string[];
  isShow: boolean;
  configKey: string;
  editName: string; // editName
  editCom: VueComType;
  id: string;
}>();

const radio = ref(props.status[props.currentStatus]);

// const updateStatus = inject<UpdateStatus>("updateStatus");
const changeSize = (val: string) => {
  // if (updateStatus) updateStatus(props.configKey, size);
  // if (updateStatus) {
  const index = props.status.findIndex((item) => item === val);
  //   if (index !== -1) {
  //     updateStatus(props.configKey, index);
  //   }
  // }

  const obj = {
    name: props.configKey,
    value: index,
  } as Events["UPDATE:DESC_SIZE"];

  if (props.configKey === "titleSize") {
    emitter.emit("UPDATE:TITLE_SIZE", obj);
  } else if (props.configKey === "descSize") {
    emitter.emit("UPDATE:DESC_SIZE", obj);
  } else {
    console.error("类型错误，要求类型为 titleSize 或 descSize");
  }
};
</script>

<style scoped src="@/views/Custom/Wenjuan/MaterialsView/style.css"></style>
<style scoped></style>
