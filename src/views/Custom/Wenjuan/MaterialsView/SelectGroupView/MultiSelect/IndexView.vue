<!-- 多选 -->
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

const radioValue = ref<string[]>([]);

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
    <div class="radio-group">
      <el-checkbox-group v-model="radioValue" @click.stop @change="emitAnswer">
        <el-checkbox
          v-for="(item, index) in computedState.options"
          :value="item"
          :key="index"
          >{{ item }}</el-checkbox
        >
      </el-checkbox-group>
    </div>
  </div>
</template>

<style scoped></style>
