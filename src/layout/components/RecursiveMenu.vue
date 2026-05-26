<script setup lang="ts">
import type { TRoute } from "@/router/utils";

defineProps<{
  routerArr: TRoute[];
}>();
</script>

<template>
  <template v-for="item of routerArr" :key="item.path">
    <!-- 无子菜单的项 -->
    <el-tooltip :content="item.title" placement="right" v-if="item.children.length === 0">
      <el-menu-item :index="item.path">
        <el-icon><setting /></el-icon>
        <span>{{ item.title }}</span>
      </el-menu-item>
    </el-tooltip>

    <!-- 菜单 -->
    <el-sub-menu v-else :index="item.path">
      <template #title>
        <el-icon><Menu /></el-icon>
        <span>{{ item.title }}</span>
      </template>

      <RecursiveMenu :router-arr="item.children" />
    </el-sub-menu>
  </template>
</template>

<style scoped>
span {
  /* border: 1px solid #000; */
  width: 100%;
  display: block;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
</style>
