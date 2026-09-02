<script setup lang="ts">
import type { FieldSchema } from "./../schema";

const props = defineProps<{
  modelValue: string;

  row: FieldSchema;
}>();

const emit = defineEmits<{
  "update:modelValue": [value: string];
  onChange: [value: string];
}>();

// const val = ref("");
// const val = defineModel<string>();

const val = computed({
  get() {
    return props.modelValue;
  },
  set(value) {
    // props.row.value = value;
    emit("update:modelValue", value);
    emit("onChange", value);
  },
});
</script>

<template>
  <el-select v-model="val">
    <el-option v-for="item in props.row.options" :key="item" :label="item" :value="item" />
  </el-select>
</template>

<style scoped></style>
