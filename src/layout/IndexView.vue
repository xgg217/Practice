<script setup lang="ts">
import { getAllMenuRoutes, type TRoute } from "@/router/utils";
import RecursiveMenu from "./components/RecursiveMenu.vue";

const route = useRoute();

// const scrollbarRef = useTemplateRef<ScrollbarInstance>("scrollbarRef");
const navRef = useTemplateRef<HTMLElement>("navRef");

const routerArr = shallowRef<TRoute[]>([]);

const activeMenu = computed(() => route.path);

// 尽量让当前激活的选项滚动到中间
const scrollToCenter = async () => {};

onMounted(async () => {
  routerArr.value = getAllMenuRoutes();

  // await nextTick();
  // setTimeout(() => {
  //   const activeItem: HTMLElement | null = document.querySelector(".el-menu-item.is-active");

  //   if (!activeItem || !scrollbarRef.value) return;

  //   scrollbarRef.value.setScrollTop(activeItem.offsetTop);
  // }, 500);
});
</script>

<template>
  <main class="layout">
    <nav ref="navRef">
      <el-menu :default-active="activeMenu" class="el-menu-vertical-demo" router>
        <RecursiveMenu :router-arr="routerArr" />
      </el-menu>
    </nav>

    <aside>
      <RouterView v-slot="{ Component }">
        <!-- <Transition name="el-zoom-in-center" mode="out-in"> -->
        <component :is="Component" :key="$route.path" />
        <!-- </Transition> -->
      </RouterView>
    </aside>
  </main>
</template>

<style scoped>
main.layout {
  display: flex;
  overflow: hidden;
  height: var(--view-height);
}

nav {
  height: 99%;
  min-height: 0;
  width: var(--nav);
  overflow: hidden;
  box-sizing: border-box;
  overflow-y: scroll;
  /* border: 1px solid red; */
}

aside {
  flex: 1;
  min-width: 0;
  height: 100%; /* 撑满，不要 99vh */
  /* border: 1px solid #000; */
  box-sizing: border-box;
}
</style>
