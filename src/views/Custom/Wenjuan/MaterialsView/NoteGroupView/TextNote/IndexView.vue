<!-- 备注说明 -->
<script setup lang="ts">
import type { TypeStatus } from "@/views/Custom/Wenjuan/types/editProps";
import {
  getTextStatus,
  getCurrentStatus,
  getStringStatusByCurrentStatus,
} from "@/views/Custom/Wenjuan/utils/index";

const props = defineProps<{
  serialNum: number;
  status: TypeStatus;
}>();

const computedState = computed(() => ({
  type: getCurrentStatus(props.status.type),
  title: getTextStatus(props.status.title),
  desc: getTextStatus(props.status.desc),
  position: getCurrentStatus(props.status.position),
  titleSize: getStringStatusByCurrentStatus(props.status.titleSize),
  descSize: getStringStatusByCurrentStatus(props.status.descSize),
  titleWeight: getCurrentStatus(props.status.titleWeight),
  descWeight: getCurrentStatus(props.status.descWeight),
  titleItalic: getCurrentStatus(props.status.titleItalic),
  descItalic: getCurrentStatus(props.status.descItalic),
  titleColor: getTextStatus(props.status.titleColor),
  descColor: getTextStatus(props.status.descColor),
}));
</script>

<template>
  <!-- {{ computedState }} -->
  <h1
    v-if="computedState.type === 0"
    class="pt-10 pb-10 text-center font-weight-200"
    :class="{
      'font-italic': !computedState.titleItalic,
      'font-bold': !computedState.titleWeight,
    }"
    :style="{
      fontSize: computedState.titleSize + 'px',
      color: computedState.titleColor,
    }"
  >
    {{ computedState.title }}
  </h1>
  <p
    v-else
    :class="{
      'text-center': computedState.position,
      'font-italic': !computedState.descItalic,
      'font-bold': !computedState.descWeight,
    }"
    :style="{
      fontSize: computedState.descSize + 'px',
      color: computedState.descColor,
    }"
  >
    {{ computedState.desc }}
  </p>
</template>

<style scoped></style>
