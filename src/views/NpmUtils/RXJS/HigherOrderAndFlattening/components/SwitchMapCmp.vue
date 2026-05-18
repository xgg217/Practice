<script setup lang="ts">
const input = ref("");
</script>

<template>
  <el-card style="width: 480px">
    <template #header>
      <div class="card-header">
        <span>switchMap 切换</span>
      </div>
    </template>

    <el-input v-model="input" placeholder="Please input" />
    <el-button type="primary">搜索</el-button>
  </el-card>
</template>

<style scoped></style>
