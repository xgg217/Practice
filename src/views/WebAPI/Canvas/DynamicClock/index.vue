<script setup lang="ts">
import ViewCmp1 from "./components/ViewCmp1.vue";
import ViewCmp2 from "./components/ViewCmp2.vue";
</script>

<template>
  <el-card style="max-width: 500px">
    <template #header>
      <div class="card-header">
        <span>优化前，每次都是全部重新绘制</span>
      </div>
    </template>
    <ViewCmp1 />
  </el-card>

  <el-card style="max-width: 500px">
    <template #header>
      <div class="card-header">
        <span
          >优化后，分为两个画布，
          1.静态部分（表盘、表盘上的数字）固定不动；2.动态部分（时针、分针、秒针）每次重新渲染</span
        >
      </div>
    </template>
    <ViewCmp2 />
  </el-card>
</template>

<style scoped></style>
