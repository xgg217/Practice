<script setup lang="ts">
import LeftCmp from "./components/LeftCmp/IndexView.vue";
import CenterCmp from "./components/CenterCmp/IndexView.vue";
import RightCmp from "./components/RightCmp.vue";
</script>

<template>
  <div class="position">
    <!-- 左 -->
    <div class="box">
      <LeftCmp />
    </div>

    <!-- 中 -->
    <div class="box">
      <CenterCmp />
    </div>

    <!-- 右 -->
    <div class="box">
      <RightCmp />
    </div>
  </div>
</template>

<style scoped>
.position {
  display: grid;
  grid-template-columns: 300px 2fr 1fr;
  grid-gap: 15px;
  height: 100%;
  background-color: #f5f7fa;
}

.box {
  /* border: 1px solid red; */
  height: 99vh;
  /* border-left: 1px solid var(--el-border-color); */
  background-color: #fff;
  overflow-y: auto;
  box-sizing: border-box;
}
</style>
