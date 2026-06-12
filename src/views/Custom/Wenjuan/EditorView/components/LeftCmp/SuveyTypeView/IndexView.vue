<script setup lang="ts">
import CardCmp from "./components/CardCmp.vue";
</script>

<template>
  <div class="box">
    <CardCmp />

    <el-divider />

    <CardCmp />
  </div>
</template>

<style scoped>
.box {
  border: 1px solid red;
  height: 100%;
  display: flex;
  flex-direction: column;
  /* justify-content: center;
  align-items: center; */
  box-sizing: border-box;
  overflow-y: auto;
  overflow-x: hidden;
  padding: 10px 16px;
}
</style>
