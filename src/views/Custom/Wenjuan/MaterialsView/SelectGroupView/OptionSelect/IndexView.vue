<!-- 下拉 -->
<script setup lang="ts">
import MaterialsHeaderCmp from "@/views/Custom/Wenjuan/components/MaterialsHeaderCmp.vue";
import type { OptionsStatus } from "@/views/Custom/Wenjuan/types/editProps";
import {
  getTextStatus,
  getStringStatus,
  getCurrentStatus,
  getStringStatusByCurrentStatus,
} from "@/views/Custom/Wenjuan/utils/index";

const props = defineProps<{
  serialNum: number;
  status: OptionsStatus;
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

const optionValue = ref<string>("");

// 回头父组件需要传递一个updateAnswer过来
// 通过触发父组件的这个自定义事件将答案传递给父组件
const emits = defineEmits(["updateAnswer"]);

const emitAnswer = () => {
  emits("updateAnswer", optionValue.value);
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
    <div class="radio-group">
      <el-select
        placeholder="请选择"
        v-model="optionValue"
        size="large"
        style="width: 240px"
        @click.stop
        @change="emitAnswer"
      >
        <el-option
          v-for="(item, index) in computedState.options"
          :key="index"
          :label="item"
          :value="item"
        />
      </el-select>
    </div>
  </div>
</template>

<style scoped></style>
