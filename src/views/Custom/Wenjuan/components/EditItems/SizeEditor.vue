<template>
  <div class="position">
    <p>{{ props.editName }}</p>
    <el-radio-group v-model="radio" @change="(val) => changeSize(val as string)">
      <el-radio-button :value="item" v-for="item of props.status" :key="item">
        {{ item }}
      </el-radio-button>
    </el-radio-group>
  </div>
  <!-- <ButtonGroup
    :title="`${configKey === 'titleSize' ? '标题' : '描述'}尺寸`"
    :status="`${status[currentStatus]}px`"
  >
    <el-button-group>
      <el-button
        :class="{
          select: currentStatus === 0,
        }"
        @click="changeSize(0)"
      >
        <font-awesome-icon icon="font" size="lg" />
      </el-button>
      <el-button
        :class="{
          select: currentStatus === 1,
        }"
        @click="changeSize(1)"
      >
        <font-awesome-icon icon="font" size="sm" />
      </el-button>
      <el-button
        :class="{
          select: currentStatus === 2,
        }"
        @click="changeSize(2)"
      >
        <font-awesome-icon icon="font" size="xs" />
      </el-button>
    </el-button-group>
  </ButtonGroup> -->
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

<style scoped>
.position {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>
