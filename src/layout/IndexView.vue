<script setup lang="ts">
import { getAllMenuRoutes } from "@/router/utils";
import { onMounted, shallowRef } from "vue";
import type { RouteRecordRaw } from "vue-router";

const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};

const routerArr = shallowRef<RouteRecordRaw[]>([]);

onMounted(() => {
  // 获取全部菜单
  routerArr.value = getAllMenuRoutes();
  console.log(routerArr.value);
});
</script>

<template>
  <main class="layout">
    <!-- 左侧导航栏 -->
    <nav>
      <el-menu
        default-active="2"
        class="el-menu-vertical-demo"
        router
        @open="handleOpen"
        @close="handleClose"
      >
        <template v-for="item of routerArr" :key="item.path">
          <el-menu-item :index="item.path" v-if="!item.children">
            <el-icon><setting /></el-icon>
            <span>{{ item.meta?.title ?? "待定" }}</span>
          </el-menu-item>

          <!-- 存在子菜单 -->
          <el-sub-menu v-else :index="item.path">
            <template #title>
              <el-icon><location /></el-icon>
              <span>{{ item.meta?.title ?? "子菜单待定" }}</span>
            </template>

            <template v-for="key of item.children" :key="key.path">
              <el-menu-item :index="key.path" v-if="!key.children">
                <el-icon><setting /></el-icon>
                <span>{{ key.meta?.title ?? "待定" }}</span>
              </el-menu-item>
            </template>
          </el-sub-menu>

          <!-- <el-sub-menu index="1">
          <template #title>
            <el-icon><location /></el-icon>
            <span>Navigator One</span>
          </template>
          <el-menu-item-group title="Group One">
            <el-menu-item index="1-1">item one</el-menu-item>
            <el-menu-item index="1-2">item two</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group title="Group Two">
            <el-menu-item index="1-3">item three</el-menu-item>
          </el-menu-item-group>
          <el-sub-menu index="1-4">
            <template #title>item four</template>
            <el-menu-item index="1-4-1">item one</el-menu-item>
          </el-sub-menu>
        </el-sub-menu>
        <el-menu-item index="2">
          <el-icon><icon-menu /></el-icon>
          <span>Navigator Two</span>
        </el-menu-item>
        <el-menu-item index="3" disabled>
          <el-icon><document /></el-icon>
          <span>Navigator Three</span>
        </el-menu-item>
        <el-menu-item index="4">
          <el-icon><setting /></el-icon>
          <span>Navigator Four</span>
        </el-menu-item> -->
        </template>
      </el-menu>
    </nav>

    <!-- 内容区 -->
    <aside>
      <RouterView v-slot="{ Component }">
        <Transition name="el-zoom-in-center" mode="out-in">
          <component :is="Component" :key="$route.path" />
        </Transition>
      </RouterView>
    </aside>
  </main>
</template>

<style scoped>
main.layout {
  display: flex;
  /* align-items: stretch; */
}

nav {
  /* flex: 1; */
  width: var(--nav);
  height: var(--view-height);
  overflow-y: scroll;
  padding: 10px;
  box-sizing: border-box;
  /* border: 1px solid red; */
  border-right: 1px solid #999;
}
</style>
