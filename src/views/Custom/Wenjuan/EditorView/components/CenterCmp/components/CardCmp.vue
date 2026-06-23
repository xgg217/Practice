<script setup lang="ts">
import { Close } from "@element-plus/icons-vue";
import type { ComponentStatus } from "@/stores/wenjuan/useEditor";

const props = defineProps<{
  isActive: boolean; // 是否激活
  row: ComponentStatus; // 组件
}>();

const emit = defineEmits<{
  click: []; // 点击事件
  del: [];
}>();
</script>

<template>
  <div
    class="card mb-10 relative"
    :class="{
      active: props.isActive,
    }"
    @click.stop="emit('click')"
  >
    <!-- @vue-expect-error 组件类型未知 -->
    <component :is="row.type" :status="row.status" :serialNum="row.index" />

    <!-- 删除按钮 -->
    <div class="absolute delete-btn" v-show="props.isActive">
      <el-button
        type="danger"
        class="ml-10"
        size="small"
        :icon="Close"
        circle
        @click.stop="emit('del')"
      />
    </div>
  </div>
</template>

<style scoped>
.card {
  cursor: pointer;
  padding: 10px;
  background-color: var(--white);
  border-radius: var(--border-radius-sm);
  cursor: move;
  /* border: 1px solid red; */

  transition: all 0.5s ease-in-out;

  &:hover,
  &.active {
    transform: scale(1.01);
    box-shadow: 0 0 0 1px var(--primary-color) inset;
  }

  .delete-btn {
    top: -13px;
    right: -12px;
  }
}
</style>
