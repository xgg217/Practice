<script setup lang="ts">
import LeftCmp from "./components/LeftCmp/IndexView.vue";
import CenterCmp from "./components/CenterCmp.vue";
import RightCmp from "./components/RightCmp.vue";
</script>

<template>
  <div class="position">
    <!-- 左 -->
    <LeftCmp />

    <!-- 中 -->
    <CenterCmp />

    <!-- 右 -->
    <RightCmp />
  </div>
</template>

<style scoped>
.position {
  display: grid;
  grid-template-columns: 300px 2fr 1fr;
  grid-gap: 10px;
  height: 100%;
}
</style>
