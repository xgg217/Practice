<script setup lang="ts">
import type { FieldSchema } from "./../schema";
import type { Field } from "./../form/field";
import { componentsMap } from "./../componentsMap";

const props = defineProps<{
  form: Record<string, any>;
  field: Field;
  schema: FieldSchema;
}>();

const model = defineModel();

const comp = computed(() => {
  // 不需要显示
  if (!props.field.visible) {
    return null;
  }

  return markRaw(componentsMap[props.schema.component]);
});

const onChagne = (val: string) => {
  props.field.setValue(val);
};
</script>

<template>
  <el-form-item :key="field.id" :label="props.schema.label">
    <component
      :is="comp"
      :row="schema"
      v-model="model"
      @onChange="(val: string) => onChagne(val)"
    />
  </el-form-item>
</template>

<style scoped></style>
