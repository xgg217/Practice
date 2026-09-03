export type FieldSchema = {
  id: string; // UUID
  name: string; // 唯一标识
  label: string; // 名称
  component: "Input" | "Select"; // 组件类型
  options?: string[]; // 下拉选项 type为 Select 才有
  initialValue?: any; // 默认值
};

export const schema: FieldSchema[] = [
  {
    id: crypto.randomUUID(),
    name: "username",
    label: "用户名",
    component: "Input",
    initialValue: "123",
  },
  {
    id: crypto.randomUUID(),
    name: "type",
    label: "用户类型",
    component: "Select",
    options: ["个人", "企业"],
  },
  {
    id: crypto.randomUUID(),
    name: "taxID",
    label: "企业税号",
    component: "Input",
  },
  {
    id: crypto.randomUUID(),
    name: "contactType",
    label: "联系方式",
    component: "Select",
    options: ["手机号", "邮箱"],
  },
  {
    id: crypto.randomUUID(),
    name: "contact",
    label: "联系",
    component: "Input",
  },
];
