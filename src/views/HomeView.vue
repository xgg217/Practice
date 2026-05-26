<script setup lang="ts"></script>

<template>
  <div>
    <h1>Home</h1>

    <div class="card-row">
      <el-card style="width: 49%">
        <template #header>
          <div class="card-header">
            <h2>待完成的任务</h2>
          </div>
        </template>
        <ul>
          <li>问卷调查-组件市场-右侧选项调整</li>
        </ul>
      </el-card>

      <el-card style="width: 49%">
        <template #header>
          <div class="card-header">
            <h2>bug、优化等</h2>
          </div>
        </template>
        <ul>
          <!-- <li>问卷调查-组件市场-右侧选项调整</li> -->
        </ul>
      </el-card>
    </div>
  </div>
</template>

<style scoped>
.card-row {
  display: flex;
  justify-content: space-between;
}
</style>
