<!-- 图片多选 -->
<script setup lang="ts">
import MaterialsHeaderCmp from "@/views/Custom/Wenjuan/components/MaterialsHeaderCmp.vue";
import type { OptionsStatus } from "@/views/Custom/Wenjuan/types/editProps";
import {
  getTextStatus,
  getCurrentStatus,
  getValueStatus,
  getStringStatusByCurrentStatus,
} from "@/views/Custom/Wenjuan/utils/index";
import type { PicTitleDescStatusArr } from "@/views/Custom/Wenjuan/types/editProps";
import ImageSelectCmp from "@/views/Custom/Wenjuan/components/ImageSelectCmp/IndexView.vue";

const props = defineProps<{
  serialNum: number;
  status: OptionsStatus;
}>();

const computedState = computed(() => ({
  title: getTextStatus(props.status.title),
  desc: getTextStatus(props.status.desc),
  options: getValueStatus(props.status.options) as PicTitleDescStatusArr,
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
      <el-checkbox-group v-model="radioValue" @click.stop class="flex wrap" @change="emitAnswer">
        <el-checkbox
          v-for="(item, index) in computedState.options"
          class="picOption flex mb-15"
          :value="item.picTitle"
          :key="index"
        >
          <ImageSelectCmp :key="index" v-bind="{ ...item, index }" />
        </el-checkbox>
      </el-checkbox-group>
    </div>
  </div>
</template>

<style scoped src="@/views/Custom/Wenjuan/MaterialsView/style.css"></style>
<style scoped>
.picOption {
  height: auto;
  flex-direction: column-reverse;
}
</style>
