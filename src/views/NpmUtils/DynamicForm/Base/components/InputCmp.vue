<script setup lang="ts">
import type { FieldSchema } from "./../schema";

const props = defineProps<{
  modelValue: string;
  row: FieldSchema;
}>();

// const val = defineModel<string>();
const emit = defineEmits<{
  "update:modelValue": [value: string];
  onChange: [value: string];
}>();

// const val = ref("");
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
  <el-input :key="props.row.id" v-model="val" />
</template>

<style scoped></style>
