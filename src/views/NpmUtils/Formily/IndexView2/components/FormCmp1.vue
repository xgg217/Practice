<template>
  <el-card header="简单使用">
    <FormProvider :form="form">
      <SchemaField :schema="schema" />
      <Submit @submit="log">提交</Submit>
    </FormProvider>

    <!-- <CodeStringifyCmp :val="form.values.value" /> -->
    {{ form.values.value }}
  </el-card>
</template>

<script lang="ts" setup>
import { createForm } from "@formily/core";
import { FormProvider, createSchemaField } from "@formily/vue";
import { FormItem, Submit, Input } from "@formily/element-plus";
import CodeStringifyCmp from "@/components/CodeStringifyCmp.vue";

const { SchemaField } = createSchemaField({
  components: {
    FormItem,
    Input,
  },
});

const form = createForm();
const schema = {
  type: "object",
  properties: {
    fieldA: {
      type: "string",
      title: "字段A",
      "x-decorator": "FormItem",
      "x-component": "Input",
    },
    fieldB: {
      type: "string",
      title: "字段B",
      "x-decorator": "FormItem",
      "x-component": "Input",
    },
  },
};

const plainValues = computed(() => JSON.parse(JSON.stringify(form.values)));

const log = (values: anyObj) => {
  console.log(values);
};
</script>

<style lang="scss" scoped></style>
