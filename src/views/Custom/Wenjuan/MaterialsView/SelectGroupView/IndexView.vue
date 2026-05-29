<!-- 选择 -->
<script setup lang="ts" name="SelectGroupView">
import LayoutView from "@/views/Custom/Wenjuan/MaterialsView/LayoutView.vue";
</script>

<template>
  <LayoutView>
    <Router-link
      class="link-item m5"
      exact-active-class="link-item-active"
      :to="{ name: 'single-select' }"
      >单选题</Router-link
    >
    <Router-link
      class="link-item m5"
      exact-active-class="link-item-active"
      to="/Custom/WenjuanMaterials/select-group/multi-select"
      >多选题</Router-link
    >
    <Router-link
      class="link-item m5"
      exact-active-class="link-item-active"
      to="/Custom/WenjuanMaterials/select-group/option-select"
      >下拉选择</Router-link
    >
    <Router-link
      class="link-item m5"
      exact-active-class="link-item-active"
      to="/Custom/WenjuanMaterials/select-group/single-pic-select"
      >图片单选题</Router-link
    >
    <Router-link
      class="link-item m5"
      exact-active-class="link-item-active"
      :to="{ name: 'multi-pic-select' }"
      >图片多选题</Router-link
    >
  </LayoutView>
</template>

<style scoped src="@/views/Custom/Wenjuan/MaterialsView/style.css"></style>
<style scoped></style>
