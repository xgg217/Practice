<script setup lang="ts">
import type { TRoute } from "@/router/utils";

defineProps<{
  routerArr: TRoute[];
}>();
</script>

<template>
  <template v-for="item of routerArr" :key="item.path">
    <el-menu-item :index="item.path" v-if="item.children.length === 0">
      <el-icon><setting /></el-icon>
      <span>{{ item.title }}</span>
    </el-menu-item>

    <el-sub-menu v-else :index="item.path">
      <template #title>
        <el-icon><location /></el-icon>
        <span>{{ item.title }}</span>
      </template>

      <RecursiveMenu :router-arr="item.children" />
    </el-sub-menu>
  </template>
</template>
