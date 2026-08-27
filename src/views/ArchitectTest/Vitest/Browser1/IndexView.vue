<script setup lang="ts">
import { set } from "@/utils/storage";

const keyName = "模拟浏览器存储1";

const inputVal = ref("");

const onClick = () => {
  // sessionStorage.setItem(keyName, inputVal.value);
  set(keyName, inputVal.value);
};
</script>

<template>
  <div>
    浏览器模式

    <el-input v-model="inputVal" style="width: 240px" placeholder="请输入" />
    <el-button type="primary" @click="onClick">存储</el-button>
    <el-button type="primary" @click="onClick">读取</el-button>
  </div>
</template>

<style scoped></style>
