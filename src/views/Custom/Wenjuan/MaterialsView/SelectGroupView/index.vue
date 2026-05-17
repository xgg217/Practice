<!-- 选择 -->
<script setup lang="ts" name="SelectGroupView">
import Layout from "@/views/Custom/Wenjuan/MaterialsView/Layout.vue";
</script>

<template>
  <Layout>
    <Router-link
      class="link-item m5"
      exact-active-class="link-item-active"
      to="/Custom/materials/select-group/single-select"
      >单选题</Router-link
    >
    <Router-link
      class="link-item m5"
      exact-active-class="link-item-active"
      to="/Custom/materials/select-group/multi-select"
      >多选题</Router-link
    >
    <Router-link
      class="link-item m5"
      exact-active-class="link-item-active"
      to="/Custom/materials/select-group/option-select"
      >下拉选择</Router-link
    >
    <Router-link
      class="link-item m5"
      exact-active-class="link-item-active"
      to="/Custom/materials/select-group/single-pic-select"
      >图片单选题</Router-link
    >
    <Router-link
      class="link-item m5"
      exact-active-class="link-item-active"
      to="/Custom/materials/select-group/multi-pic-select"
      >图片多选题</Router-link
    >
  </Layout>
</template>

<style scoped src="@/views/Custom/Wenjuan/MaterialsView/style.css"></style>
<style scoped></style>
