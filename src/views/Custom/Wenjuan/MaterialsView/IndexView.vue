<script setup lang="ts">
const route = useRoute();

const arr = [
  {
    path: "/Custom/WenjuanMaterials/select-group",
    name: "选择",
  },
  {
    path: "/Custom/WenjuanMaterials/input-group",
    name: "文本输入",
  },
  {
    path: "/Custom/WenjuanMaterials/advanced-group",
    name: "高级题型",
  },
  {
    path: "/Custom/WenjuanMaterials/note-group",
    name: "备注说明",
  },
  {
    path: "/Custom/WenjuanMaterials/personal-info-group",
    name: "个人信息",
  },
  {
    path: "/Custom/WenjuanMaterials/contact-group",
    name: "联系方式",
  },
] as const;

const activeIndex = ref<string>(arr[0].path);

const handleSelect = (key: string, keyPath: string[]) => {
  console.log(key);
  console.log(keyPath);
};

onMounted(() => {
  // console.log(route.path);
  const row = arr.find((item) => {
    return route.path.startsWith(item.path);
  });

  if (row) {
    activeIndex.value = row.path;
  }
});
</script>

<template>
  <div>
    <h2 class="font-weight-100 text-center">组件市场</h2>

    <div class="warpp">
      <el-menu
        class="menu"
        :router="true"
        :default-active="activeIndex"
        active-text-color="#ffd04b"
        @select="handleSelect"
      >
        <el-menu-item v-for="item of arr" :index="item.path" :key="item.path">{{
          item.name
        }}</el-menu-item>
      </el-menu>

      <!-- 路由出口 -->
      <div class="coms">
        <RouterView v-slot="{ Component }">
          <Transition name="el-fade-in-linear" mode="out-in">
            <component :is="Component" :key="$route.path" />
          </Transition>
        </RouterView>
      </div>
    </div>
  </div>
</template>

<style scoped>
.warpp {
  display: flex;
  height: calc(100vh - 100px);
}

.menu {
  width: 120px;
}

.coms {
  width: 100%;
}
</style>
