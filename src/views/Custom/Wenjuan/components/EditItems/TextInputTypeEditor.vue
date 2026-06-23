<!-- 文本类型 -->
<template>
  <div class="position" :key="props.id">
    <p>{{ props.editName }}</p>
    <el-radio-group v-model="radio" @change="(val) => changeType(val as number)">
      <el-radio-button :value="index" v-for="(item, index) of props.status" :key="item">
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
  editName: string;
  editCom: VueComType;
  id: string;
}>();

const updateStatus = inject<UpdateStatus>("updateStatus")!;

const radio = ref(props.currentStatus);

function changeType(pos: number) {
  updateStatus("UPDATE:TYPE", { name: props.configKey, value: pos });
}
</script>

<style scoped src="@/views/Custom/Wenjuan/MaterialsView/style.css"></style>
<style scoped></style>
