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

onMounted(() => {});
</script>

<template>
  <el-form :model="form" label-width="auto" style="max-width: 600px">
    <!-- @vue-expect-error -->
    <FieldRenderer
      v-for="item in schema"
      :key="item.id"
      :form="form"
      v-model="form.fields[item.name].value"
      :field="form.fields[item.name]"
      :schema="item"
    ></FieldRenderer>

    <el-form-item>
      <el-button type="primary" @click="onSubmit">Create</el-button>
      <el-button>Cancel</el-button>
    </el-form-item>
  </el-form>

  <!-- <code> -->
  <CodeStringifyCmp :val="f" />
</template>

<style scoped></style>
