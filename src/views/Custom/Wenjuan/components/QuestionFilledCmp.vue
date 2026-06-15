<script setup lang="ts">
import type { Placement } from "element-plus";
import { QuestionFilled } from "@element-plus/icons-vue";

const props = withDefaults(
  defineProps<{
    title: string;
    placement: Placement;
  }>(),
  {
    title: "",
    placement: "top",
  },
);
</script>

<template>
  <el-tooltip class="box-item" effect="dark" :content="props.title" :placement="props.placement">
    <el-icon class="icon">
      <QuestionFilled />
    </el-icon>
  </el-tooltip>
</template>

<style scoped>
.icon {
  margin-left: 5px;
  font-size: 20px;
  cursor: pointer;
}

.icon:hover {
  color: #0f6bff;
}
</style>
