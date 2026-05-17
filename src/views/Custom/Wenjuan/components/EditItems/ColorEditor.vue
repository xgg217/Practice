<template>
  <!-- <div>颜色编辑组件</div> -->
  <div class="position">
    <p>{{ props.editName }}</p>

    <el-color-picker v-model="color1" @change="changePosition" />
  </div>
</template>

<script setup lang="ts">
import type { VueComType } from "@/views/Custom/Wenjuan/types/common";
import type { UpdateStatus } from "@/views/Custom/Wenjuan/types/editProps";

const props = defineProps<{
  status: string;
  isShow: boolean;
  configKey: string;
  editName: string;
  editCom: VueComType;
}>();

const color1 = ref(props.status);

const updateStatus = inject<UpdateStatus>("updateStatus");
const changePosition = (color: string) => {
  if (updateStatus) {
    updateStatus(props.configKey, color);
    // const index = props.status.findIndex(item => item === pos);
    // if (index !== -1) {
    //   updateStatus(props.configKey, index);
    // }
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
