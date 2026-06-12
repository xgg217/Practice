<!-- 文本输入 -->
<script setup lang="ts">
import LayoutView from "@/views/Custom/Wenjuan/MaterialsView/LayoutView.vue";
</script>

<template>
  <LayoutView>
    <Router-link
      class="link-item m5"
      exact-active-class="link-item-active"
      to="/Custom/WenjuanMaterials/input-group/text-input"
      >单行文本</Router-link
    >

    <Router-link
      class="link-item m5"
      exact-active-class="link-item-active"
      to="/Custom/WenjuanMaterials/input-group/textarea-input"
      >多行文本</Router-link
    >
  </LayoutView>
</template>

<style scoped src="@/views/Custom/Wenjuan/MaterialsView/style.css"></style>
<style scoped></style>
