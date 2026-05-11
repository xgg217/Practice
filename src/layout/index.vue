<script setup lang="ts"></script>

<template>
  <main class="layout">
    <!-- 左侧导航栏 -->
    <nav>
      <ul>
        <!-- <li v-for="item of routeList" :key="item.path">
          <NavItemCmp :row="item" @click="onPage" :is-avc="avcRouteName === item.name" />
        </li> -->
      </ul>
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
