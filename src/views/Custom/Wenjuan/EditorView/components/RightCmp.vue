<script setup lang="ts">
import { useEditorStore } from "@/stores/wenjuan/useEditor";

const editorStore = useEditorStore();
</script>

<template>
  <div class="boxs">
    <div
      v-for="(item, key) in editorStore.getCurrentComponent?.status"
      :key="item.id"
      class="mb-20"
    >
      <component v-if="item.isShow" :is="item.editCom" :config-key="key" v-bind="item" />
    </div>
    <!-- <component :is="editorStore.getCurrentComponent?.type" :status="row.status" :serialNum="row.index" /> -->

    <!-- 当没有添加的时候展示的内容 -->
    <el-empty v-if="!editorStore.getCurrentComponent" description="点击题型进行编辑" />
  </div>
</template>

<style scoped>
.boxs {
  padding: 15px;
}
</style>
