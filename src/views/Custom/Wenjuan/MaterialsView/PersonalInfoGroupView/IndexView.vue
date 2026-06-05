<!-- 个人信息 -->
<script setup lang="ts">
import LayoutView from "@/views/Custom/Wenjuan/MaterialsView/LayoutView.vue";
</script>

<template>
  <LayoutView>
    <!-- 姓名 -->
    <!-- 身份证 -->
    <!-- 出生日期 -->
    <!-- 性别 -->
    <Router-link
      class="link-item m5"
      exact-active-class="link-item-active"
      to="/Custom/WenjuanMaterials/personal-info-group/personal-info-gender"
      >性别</Router-link
    >

    <!-- 年龄 -->
    <!-- 学历 -->
    <Router-link
      class="link-item m5"
      exact-active-class="link-item-active"
      to="/Custom/WenjuanMaterials/personal-info-group/personal-info-education"
      >学历</Router-link
    >

    <!-- 大学 -->
    <!-- 专业 -->
    <!-- 行业 -->
    <!-- 职业 -->
    <!-- 公司 -->
    <!-- 职位 -->

    <!-- <Router-link
      class="link-item mb-15"
      exact-active-class="link-item-active"
      to="/Custom/WenjuanMaterials/personal-info-group/personal-info-gender"
      >性别</Router-link
    >
    -->
  </LayoutView>
</template>

<style scoped src="@/views/Custom/Wenjuan/MaterialsView/style.css"></style>
