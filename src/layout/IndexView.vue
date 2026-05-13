<script setup lang="ts">
import { getAllMenuRoutes, type TRoute } from "@/router/utils";
import RecursiveMenu from "./components/RecursiveMenu.vue";

const route = useRoute();

const routerArr = shallowRef<TRoute[]>([]);

const activeMenu = computed(() => route.path);

onMounted(() => {
  routerArr.value = getAllMenuRoutes();
});
</script>

<template>
  <main class="layout">
    <nav>
      <el-menu :default-active="activeMenu" class="el-menu-vertical-demo" router>
        <RecursiveMenu :router-arr="routerArr" />
      </el-menu>
    </nav>

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
