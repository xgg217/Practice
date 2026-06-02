<script setup lang="ts">
import {
  getTextStatus,
  getCurrentStatus,
  getStringStatusByCurrentStatus,
  getStringStatus,
} from "@/views/Custom/Wenjuan/utils/index";
import MaterialsHeaderCmp from "@/views/Custom/Wenjuan/components/MaterialsHeaderCmp.vue";
// 类型
import type { OptionsStatus } from "@/views/Custom/Wenjuan/types/editProps";

const props = defineProps<{
  status: OptionsStatus;
  serialNum: number;
}>();

const computedState = computed(() => ({
  title: getTextStatus(props.status.title),
  desc: getTextStatus(props.status.desc),
  options: getStringStatus(props.status.options),
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

const radioValue = ref(3);

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
    <el-rate
      v-model="radioValue"
      :texts="computedState.options"
      :show-text="status?.options?.isUse"
      size="large"
      allow-half
      clearable
      @click.stop
      @change="emitAnswer"
    />
  </div>
</template>

<style scoped src="@/views/Custom/Wenjuan/MaterialsView/style.css"></style>
<style scoped></style>
