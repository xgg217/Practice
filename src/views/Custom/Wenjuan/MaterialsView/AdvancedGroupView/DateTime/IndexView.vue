<!-- 日期/时间 -->
<template>
  <div
    :class="{
      'text-center': computedState.position,
    }"
  >
    <MaterialsHeaderCmp
      :serialNum="serialNum"
      :title="computedState.title"
      :titleSize="computedState.titleSize"
      :titleWeight="computedState.titleWeight"
      :titleItalic="computedState.titleItalic"
      :titleColor="computedState.titleColor"
      :desc="computedState.desc"
      :descSize="computedState.descSize"
      :descWeight="computedState.descWeight"
      :descItalic="computedState.descItalic"
      :descColor="computedState.descColor"
    />

    <!-- @vue-ignore -->
    <el-date-picker
      v-model="datetimeValue"
      :type="typeVal"
      placeholder="请选择日期"
      @click.stop
      @change="emitAnswer"
    />
  </div>
</template>

<script setup lang="ts">
import {
  getTextStatus,
  getCurrentStatus,
  getStringStatusByCurrentStatus,
  getValueStatusByCurrentStatus,
} from "@/views/Custom/Wenjuan/utils/index";
import MaterialsHeaderCmp from "@/views/Custom/Wenjuan/components/MaterialsHeaderCmp.vue";

// 类型
import type { TypeStatus } from "@/views/Custom/Wenjuan/types/editProps";

const props = defineProps<{
  status: TypeStatus;
  serialNum: number;
}>();
const emits = defineEmits(["updateAnswer"]);

const datetimeValue = ref<Date>(new Date());

const computedState = computed(() => ({
  title: getTextStatus(props.status.title),
  desc: getTextStatus(props.status.desc),
  position: getCurrentStatus(props.status.position),
  type: getValueStatusByCurrentStatus(props.status.type),
  titleSize: getStringStatusByCurrentStatus(props.status.titleSize),
  descSize: getStringStatusByCurrentStatus(props.status.descSize),
  titleWeight: getCurrentStatus(props.status.titleWeight),
  descWeight: getCurrentStatus(props.status.descWeight),
  titleItalic: getCurrentStatus(props.status.titleItalic),
  descItalic: getCurrentStatus(props.status.descItalic),
  titleColor: getTextStatus(props.status.titleColor),
  descColor: getTextStatus(props.status.descColor),
}));

const typeVal = computed(() => {
  // console.log(computedState.value.type?.value);

  return (computedState.value.type?.value as string) || "date";
});

const emitAnswer = () => {
  emits("updateAnswer", datetimeValue.value);
};
</script>

<style scoped lang="scss"></style>
