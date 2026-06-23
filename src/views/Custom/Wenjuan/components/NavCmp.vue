<script setup lang="ts">
import { ArrowLeft } from "@element-plus/icons-vue";

const router = useRouter();
// <!--  -->

const goBack = () => {
  router.push({ name: "Wenjuan" });
};
</script>
<template>
  <div>
    <!-- 导航栏 -->
    <div class="nav">
      <el-button :icon="ArrowLeft" type="primary" size="small" @click="goBack">返回</el-button>

      <div>
        <slot name="title"></slot>
      </div>

      <div>
        <slot name="right"></slot>
      </div>
    </div>
  </div>
</template>

<style scoped>
.nav {
  height: 50px;
  /* border: 1px solid red; */
  border-bottom: 1px solid var(--border-color);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
}
</style>
