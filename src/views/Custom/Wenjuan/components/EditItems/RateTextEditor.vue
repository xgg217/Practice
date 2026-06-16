<template>
  <div :key="id">
    <div class="flex align-items-center mb-10">
      <div class="mr-10">辅助文字</div>
      <el-switch :model-value="isUse" @change="(val) => switchChangeHandle(val as boolean)" />
    </div>
    <div v-if="isUse" class="list">
      <el-input
        v-for="(_, index) in status"
        :key="index"
        class="mt-5 mb-5"
        placeholder="辅助文字"
        v-model="textArr[index]"
        @input="(val: string) => inputHandle(val, index)"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { VueComType } from "@/views/Custom/Wenjuan/types/common";
import type { StringStatusArr } from "@/views/Custom/Wenjuan/types/editProps";
// import { inject, ref } from "vue";
import { emitter } from "@/views/Custom/Wenjuan/MaterialsView/eventBus";

const props = defineProps<{
  currentStatus: number;
  status: StringStatusArr;
  isShow: boolean;
  isUse: boolean;
  configKey: string;
  editCom: VueComType;
  id: string;
}>();

// 注入 updateStatus
// const updateStatus = inject<UpdateStatus>("updateStatus");

const textArr = ref(props.status);

function switchChangeHandle(val: boolean) {
  // if (updateStatus) {
  //   updateStatus(props.configKey, val);
  // }
  emitter.emit("UPDATE:OPTION:USE", { name: props.configKey, value: val });
}
function inputHandle(val: string, index: number) {
  // if (updateStatus) {
  //   updateStatus(props.configKey, { link: val, index });

  // }
  emitter.emit("UPDATE:OPTION:USE:TEXT", { name: props.configKey, value: { link: val, index } });
}
</script>

<style scoped></style>
