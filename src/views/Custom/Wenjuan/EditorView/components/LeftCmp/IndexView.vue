<script setup lang="ts">
const route = useRoute();

const activeMenu = computed(() => route.path);
</script>

<template>
  <div class="box">
    <!-- 题型 -->
    <!-- 大纲 -->

    <div class="menu-box">
      <el-menu :default-active="activeMenu" class="el-menu-vertical-demo" router>
        <el-menu-item index="/Custom/WenjuanEditorView/suvey-type">
          <span>题型</span>
        </el-menu-item>

        <el-menu-item index="/Custom/WenjuanEditorView/outline">
          <span>大纲</span>
        </el-menu-item>
      </el-menu>
    </div>

    <!-- 内容 -->
    <div class="content-box">
      <router-view></router-view>
    </div>
  </div>
</template>

<style scoped>
.box {
  /* border: 1px solid red; */
  height: 100%;
  display: flex;
}

.menu-box {
  height: 100%;
  width: 70px;
  /* border: 1px solid red; */
}

.content-box {
  border: 1px solid #000;
  flex: 1;
}
</style>
