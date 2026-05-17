<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    serialNum: number; // 序号
    title?: string; // 标题
    desc?: string; // 描述
    titleSize?: string; // 标题大小
    descSize?: string; // 描述大小
    titleWeight?: number; // 标题加粗
    descWeight?: number; // 描述加粗
    titleItalic?: number; // 描述斜体
    descItalic?: number; // 描述斜体
    titleColor?: string; // 标题颜色
    descColor?: string; // 描述颜色
  }>(),
  {
    title: "",
    desc: "",
    titleSize: "22",
    descSize: "16",
    titleWeight: 0,
    descWeight: 0,
    titleItalic: 0,
    descItalic: 0,
    titleColor: "",
    descColor: "",
  },
);
</script>

<template>
  <div class="content">
    <div class="container mb-15">
      <!-- 标题 -->
      <h2
        class="title font-weight-100"
        :style="{
          fontSize: `${props.titleSize}px`,
          color: props.titleColor,
        }"
      >
        <span class="mr-10">{{ props.serialNum }}.</span>
        <span
          :class="{
            'font-bold': !props.titleWeight,
            'font-italic': !props.titleItalic,
          }"
          >{{ props.title }}</span
        >
      </h2>
      <!-- 描述 -->
      <div
        class="desc"
        :class="{
          'font-bold': !props.descWeight,
          'font-italic': !props.descItalic,
        }"
        :style="{
          fontSize: `${props.descSize}px`,
          color: props.descColor,
        }"
      >
        {{ props.desc }}
      </div>
    </div>
  </div>
</template>

<style scoped src="@/views/Custom/Wenjuan/MaterialsView/style.css"></style>
<style scoped>
.container {
  h2 {
    font-size: 20px;
    span {
      margin: 0 5px;
    }
  }
}
.desc {
  font-size: var(--font-size-base);
  color: var(--font-color-light);
  text-indent: 5px;
}
</style>
