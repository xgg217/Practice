<template>
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

const updateStatus = inject<UpdateStatus>("updateStatus")!;

const radio = ref(props.status[props.currentStatus]);

const changePosition = (pos: string) => {
  const index = props.status.findIndex((item) => item === pos);
  updateStatus("UPDATE:POSITION", { name: props.configKey, value: index });
};
</script>

<style scoped src="@/views/Custom/Wenjuan/MaterialsView/style.css"></style>
<style scoped></style>
