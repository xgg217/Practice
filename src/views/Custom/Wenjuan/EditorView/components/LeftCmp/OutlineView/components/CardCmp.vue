<script setup lang="ts">
import type { ComponentStatus } from "@/stores/wenjuan/useEditor";

const props = defineProps<{
  isActive: boolean; // 是否激活
  row: ComponentStatus; // 组件
}>();

const emit = defineEmits<{
  click: []; // 点击事件
}>();
</script>

<template>
  <div
    class="mb-10 cursor"
    @click.stop="emit('click')"
    :class="{
      active: props.isActive,
    }"
  >
    <div class="item">
      <!-- @vue-ignore 组件类型未知 -->
      <p class="index">{{ props.row.index || "" }}</p>
      <p class="title">{{ props.row.status.title.status }}</p>
    </div>
  </div>
</template>

<style scoped>
.cursor {
  /* border: 1px solid red; */
  width: 85%;
  box-sizing: border-box;
  cursor: move;

  &.active {
    transform: scale(1.04);
    transition: 0.5s;
    background-color: var(--border-color);
    border-radius: var(--border-radius-lg);

    /* border: 1px solid red; */
  }
}

.item {
  /* outline: 1px solid black; */
  color: var(--font-color-light);
  font-size: var(--font-size-base);
  padding: 10px;
  display: flex;
  align-items: center;
  box-sizing: border-box;

  p {
    margin: 0px;
  }

  .index {
    /* font-weight: bold; */
    margin: 0px;
    margin-right: 5px;
  }

  .title {
    /* 超出部分省略号显示 */
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    width: 90%;
  }
}
</style>
