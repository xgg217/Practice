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
import type { UpdateStatus } from "@/views/Custom/Wenjuan/types/editProps";

const props = defineProps<{
  currentStatus: number;
  status: string[];
  isShow: boolean;
  configKey: string;
  editName: string;
  editCom: VueComType;
}>();

const radio = ref(props.status[props.currentStatus]);

const updateStatus = inject<UpdateStatus>("updateStatus");
const changePosition = (pos: string) => {
  if (updateStatus) {
    const index = props.status.findIndex((item) => item === pos);
    if (index !== -1) {
      updateStatus(props.configKey, index);
    }
  }
};
</script>

<style scoped>
.position {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>
