<!-- 个人信息 -->
<script setup lang="ts">
import Layout from "@/views/Custom/Wenjuan/MaterialsView/Layout.vue";
</script>

<template>
  <Layout>
    <Router-link
      class="link-item mb-15"
      exact-active-class="link-item-active"
      to="/Custom/materials/personal-info-group/personal-info-gender"
      >性别</Router-link
    >
    <Router-link
      class="link-item mb-15"
      exact-active-class="link-item-active"
      to="/Custom/materials/personal-info-group/personal-info-education"
      >学历</Router-link
    >
  </Layout>
</template>

<style scoped src="@/views/Custom/Wenjuan/MaterialsView/style.css"></style>
