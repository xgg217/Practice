<script setup lang="ts">
import { Plus, House } from "@element-plus/icons-vue";

const router = useRouter();

const tableData = shallowRef([]);

// 跳转编辑器
const onEditorView = () => {
  router.push({
    name: "CustomWenjuanEditorView",
  });
};

// 跳转组件市场
const onMaterialsView = () => {
  router.push({
    name: "materials",
  });
};
</script>

<template>
  <div>
    <h2 class="font-weight-100 text-center">问卷调查系统</h2>
    <div class="mb-15">
      <el-button type="primary" :icon="Plus" @click="onEditorView">创建问卷</el-button>
      <el-button type="success" :icon="House" @click="onMaterialsView">组件市场</el-button>
    </div>

    <el-table :data="tableData" style="width: 100%" border>
      <el-table-column type="index" width="50" align="center" />
      <el-table-column prop="title" label="问卷标题" align="center" />
      <el-table-column prop="count" label="题目数" width="120" align="center" />
      <el-table-column prop="createDate" label="创建日期" width="170" align="center" />
      <el-table-column prop="Date" label="更新时间" width="170" align="center" />
      <el-table-column label="操作" fixed="right" width="180" align="center">
        <template #default="scope">
          <el-button size="small">查看</el-button>
          <el-button size="small" type="danger">编辑</el-button>
          <el-button size="small" type="danger">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<style scoped></style>
