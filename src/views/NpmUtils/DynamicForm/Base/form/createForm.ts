import { Form } from "./form";
import type { FieldSchema } from "../schema";

// 工厂函数，创建表单实例
export function createForm(schema: FieldSchema[]) {
  const form = new Form();

  schema.forEach((item) => {
    form.registerField(item.name, item.initialValue);
  });

  return form;
}
