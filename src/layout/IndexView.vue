<script setup lang="ts">
import { getAllMenuRoutes, type TRoute } from "@/router/utils";
import RecursiveMenu from "./components/RecursiveMenu.vue";
import HeaderCmp from "./components/HeaderCmp/index.vue";

const route = useRoute();

// const scrollbarRef = useTemplateRef<ScrollbarInstance>("scrollbarRef");
const navRef = useTemplateRef<HTMLElement>("navRef");

const routerArr = shallowRef<TRoute[]>([]);

const activeMenu = computed(() => route.path);

// 尽量让当前激活的选项滚动到中间
const scrollToCenter = async () => {
  await nextTick();

  setTimeout(() => {
    const nav = navRef.value;
    const activeItem = nav?.querySelector<HTMLElement>(".el-menu-item.is-active");

    if (!nav || !activeItem) return;

    const navRect = nav.getBoundingClientRect();
    const itemRect = activeItem.getBoundingClientRect();

    // 目标位置：激活项中心与可视区中心对齐
    const targetTop =
      nav.scrollTop + (itemRect.top - navRect.top) - (nav.clientHeight - itemRect.height) / 2;

    nav.scrollTo({ top: Math.max(0, targetTop), behavior: "smooth" });
  }, 300);
};

onMounted(() => {
  routerArr.value = getAllMenuRoutes();

  scrollToCenter();
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
      <!-- 页眉 -->
      <HeaderCmp />

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
  /* overflow: hidden; */
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
  height: 100%;
  /* border: 1px solid #000; */
  box-sizing: border-box;
}
</style>
