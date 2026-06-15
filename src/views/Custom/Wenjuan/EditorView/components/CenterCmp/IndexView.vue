<script setup lang="ts">
import { useEditorStore } from "@/stores/wenjuan/useEditor";

const editorStore = useEditorStore();
</script>

<template>
  <div class="boxs">
    <div v-for="item in editorStore.coms" :key="item.id">
      <component :is="item.type" :status="item.status" :serialNum="1" />
    </div>
  </div>
</template>

<style scoped src="@/views/Custom/Wenjuan/EditorView/styles.css"></style>
<style scoped>
.boxs {
  /* border: 1px solid red; */
  padding: 30px 15px 60px 15px;
}
</style>
