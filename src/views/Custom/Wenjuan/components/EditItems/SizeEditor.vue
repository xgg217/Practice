<!-- 字体大小编辑器 -->
<template>
  <div class="position">
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
import type { UpdateStatus } from "@/views/Custom/Wenjuan/types/editProps";
const props = defineProps<{
  currentStatus: number;
  status: string[];
  isShow: boolean;
  configKey: string;
  editName: string; // editName
  editCom: VueComType;
}>();

const radio = ref(props.status[props.currentStatus]);

const updateStatus = inject<UpdateStatus>("updateStatus");
const changeSize = (val: string) => {
  // if (updateStatus) updateStatus(props.configKey, size);
  if (updateStatus) {
    const index = props.status.findIndex((item) => item === val);
    if (index !== -1) {
      updateStatus(props.configKey, index);
    }
  }
};
</script>

<style scoped src="@/views/Custom/Wenjuan/MaterialsView/style.css"></style>
<style scoped></style>
