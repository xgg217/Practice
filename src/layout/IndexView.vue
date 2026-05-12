<script setup lang="ts">
import { useRoute } from "vue-router";
import { computed, shallowRef, onMounted } from "vue";
import { getAllMenuRoutes } from "@/router/utils";
import type { RouteRecordRaw } from "vue-router";

const route = useRoute();

const routerArr = shallowRef<RouteRecordRaw[]>([]);

// 当前激活的菜单（自动匹配路由高亮）
const activeMenu = computed(() => route.path);

onMounted(() => {
  routerArr.value = getAllMenuRoutes();
});
</script>

<template>
  <main class="layout">
    <!-- 左侧导航栏 -->
    <nav>
      <el-menu :default-active="activeMenu" class="el-menu-vertical-demo" router>
        <template v-for="item of routerArr" :key="item.path">
          <el-menu-item :index="'/' + item.path" v-if="!item.children">
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
              <el-menu-item :index="'/' + item.path + '/' + key.path" v-if="!key.children">
                <el-icon><setting /></el-icon>
                <span>{{ key.meta?.title ?? "待定" }}</span>
              </el-menu-item>
            </template>
          </el-sub-menu>
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
