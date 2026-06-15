<script setup lang="ts">
import type { SureyCom, SureyComItem } from "../config";
import { ElMessage } from "element-plus";
import { useEditorStore } from "@/stores/wenjuan/useEditor";

const props = defineProps<{
  row: SureyCom;
}>();

const editorStore = useEditorStore();

// 向仓库添加组件
const onAdd = (materialName: SureyComItem["materialName"]) => {
  // console.log("添加", materialName);

  if (!materialName) {
    ElMessage.error("请选择组件");
    return;
  }

  editorStore.addComponent(materialName);
};
</script>

<template>
  <div class="card">
    <p class="title">
      <el-icon>
        <component :is="props.row.icon" />
      </el-icon>
      {{ props.row.title }}
    </p>
    <ul>
      <li v-for="item of props.row.list" :key="item.materialName" @click="onAdd(item.materialName)">
        {{ item.title }}
      </li>
    </ul>
  </div>
</template>

<style scoped>
.title {
  height: 40px;
  font-size: 14px;
  line-height: 40px;
  font-weight: 500;
  margin: 0;
}

ul {
  margin-bottom: 3px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 10px;

  li {
    /* border: 1px solid #000; */
    cursor: pointer;
    height: 16px;
    line-height: 16px;
    font-size: 14px;
    padding: 8px 4px;
    box-sizing: content-box;
    white-space: nowrap;
    vertical-align: middle;
    background: #f7f7f7;
    border-radius: 4px;

    &:hover {
      transform: none;
      color: #0f6bff;
      background-color: #f5f9ff;
    }
  }
}
</style>
