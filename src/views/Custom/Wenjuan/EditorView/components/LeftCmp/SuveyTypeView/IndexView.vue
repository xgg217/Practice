<script setup lang="ts">
import CardCmp from "./components/CardCmp.vue";
import { SureyComsList } from "./config";
</script>

<template>
  <div class="box">
    <template v-for="item in SureyComsList" :key="item.title">
      <CardCmp :row="item" />

      <el-divider />
    </template>
  </div>
</template>

<style scoped>
.box {
  /* border: 1px solid red; */
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
