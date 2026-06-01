<script setup lang="ts">
import {
  getTextStatus,
  getCurrentStatus,
  getStringStatusByCurrentStatus,
} from "@/views/Custom/Wenjuan/utils/index";
import MaterialsHeaderCmp from "@/views/Custom/Wenjuan/components/MaterialsHeaderCmp.vue";
// 类型
import type { TypeStatus } from "@/views/Custom/Wenjuan/types/editProps";

const props = defineProps<{
  status: TypeStatus;
  serialNum: number;
}>();

const computedState = computed(() => ({
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

const radioValue = ref(0);

// 回头父组件需要传递一个updateAnswer过来
// 通过触发父组件的这个自定义事件将答案传递给父组件
const emits = defineEmits(["updateAnswer"]);

const emitAnswer = () => {
  emits("updateAnswer", radioValue.value);
};
</script>

<template>
  <div
    class="content"
    :class="{
      'text-center': computedState.position,
    }"
  >
    <MaterialsHeaderCmp
      :serialNum="serialNum"
      :title="computedState.title"
      :desc="computedState.desc"
      :titleSize="computedState.titleSize"
      :descSize="computedState.descSize"
      :titleWeight="computedState.titleWeight"
      :descWeight="computedState.descWeight"
      :titleItalic="computedState.titleItalic"
      :descItalic="computedState.descItalic"
      :titleColor="computedState.titleColor"
      :descColor="computedState.descColor"
    />
    <el-rate v-model="radioValue" />
  </div>
</template>

<style scoped src="@/views/Custom/Wenjuan/MaterialsView/style.css"></style>
<style scoped></style>
