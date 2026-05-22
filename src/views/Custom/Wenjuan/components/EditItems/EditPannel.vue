<template>
  <div class="editPannelContainer">
    <div v-for="(item, key) in props.com.status" :key="item.id" class="mb-20">
      <component v-if="item.isShow" :is="item.editCom" :config-key="key" v-bind="item" />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Status } from "@/views/Custom/Wenjuan/types/common";
const props = defineProps<{
  com: Status;
}>();
</script>

<style scoped lang="scss">
.editPannelContainer {
  padding: 30px;
  background-color: var(--bg-color);
}

.mb-20 {
  margin-bottom: 20px;
}
</style>
