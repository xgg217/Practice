<script setup lang="ts">
import { VueDraggableNext as Draggable } from "vue-draggable-next";
import { useEditorStore } from "@/stores/wenjuan/useEditor";
import EventBus from "@/views/Custom/Wenjuan/EditorView/eventBus";
import CardCmp from "./components/CardCmp.vue";

const editorStore = useEditorStore();

const dragstart = () => {
  editorStore.setCurrentComponentIndex(-1);
};

const clickHandle = (index: number) => {
  if (editorStore.currentComponentIndex === index) {
    editorStore.setCurrentComponentIndex(-1);
  } else {
    editorStore.setCurrentComponentIndex(index);
    EventBus.emit("scrollToCenter", index);
  }
};
</script>

<template>
  <div class="box">
    <el-empty v-if="editorStore.coms.length === 0" description="请添加" />

    <draggable v-else v-model="editorStore.coms" item-key="id" @start="dragstart">
      <CardCmp
        v-for="(item, index) in editorStore.getAllComsList"
        :key="item.id"
        :isActive="editorStore.currentComponentIndex === index"
        :row="item"
        @click="clickHandle(index)"
      ></CardCmp>
    </draggable>
  </div>
</template>

<style scoped>
.box {
  padding: 15px;
  box-sizing: border-box;
}
</style>
