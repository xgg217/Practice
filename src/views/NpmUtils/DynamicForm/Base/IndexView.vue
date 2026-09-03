<script setup lang="ts">
import { createForm } from "./form/createForm";
import { schema } from "./schema";
import type { Form } from "./form/form";
import FieldRenderer from "./components/FieldRenderer.vue";
import CodeStringifyCmp from "@/components/CodeStringifyCmp.vue";

// const form = reactive({
//   username: "",
//   type: "",
//   taxID: "",
//   contactType: "",
//   contact: "",
// });

const form = ref<Form>(createForm(schema));

const onSubmit = () => {
  console.log(form);
};

const f = computed(() => {
  const obj: Record<string, string> = {};

  if (!form.value || !form.value.fields) {
    return JSON.stringify(obj);
  }

  Object.entries(form.value.fields).forEach(([key, field]) => {
    obj[key] = field.value;
  });

  return JSON.stringify(obj, null, 2);
});

// 重置
const onReset = () => {
  form.value.reset();
};

onMounted(() => {});
</script>

<template>
  <el-form :model="form" label-width="auto" style="max-width: 600px">
    <template v-for="item in schema" :key="item.id">
      <el-form-item :label="item.label">
        <!-- @vue-expect-error -->
        <FieldRenderer
          :form="form"
          v-model="form.fields[item.name].value"
          :field="form.fields[item.name]"
          :schema="item"
        ></FieldRenderer>
      </el-form-item>
    </template>

    <el-form-item>
      <el-button type="primary" @click="onSubmit">确定</el-button>
      <el-button @click="onReset">重置</el-button>
    </el-form-item>
  </el-form>

  <!-- <code> -->
  <CodeStringifyCmp :val="f" />
</template>

<style scoped></style>
