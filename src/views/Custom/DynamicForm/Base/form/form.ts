import { Field } from "./field";

export class Form {
  fields: Record<string, Field> = {};

  // 注册字段
  registerField(name: string, initialValue?: any) {
    const field = new Field(name, this, initialValue);
    this.fields[name] = field;
    return field;
  }

  get values() {
    const result: Record<string, any> = {};
    Object.keys(this.fields).forEach((name) => {
      // @ts-expect-error 获取值
      result[name] = this.fields[name].value;
    });
    return result;
  }

  // 重置表单
  reset() {
    Object.values(this.fields).forEach((field) => field.reset());
  }
}
