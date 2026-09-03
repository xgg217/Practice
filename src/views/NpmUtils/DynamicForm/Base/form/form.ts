import mitt from "mitt";
import { Field } from "./field";

export type Events = {
  change: void; // 表单数据变化事件
  reset: void; // 表单重置事件
};

export class Form {
  fields: Record<string, Field> = {};

  // 订阅者集合
  private emitter = mitt<Events>();

  // 注册字段
  registerField(name: string, initialValue?: any) {
    const field = new Field(name, this, initialValue);
    this.fields[name] = field;

    // 每个字段发变发变时,也同时通知 Form 级别的订阅者
    // field.subscribe(() => {
    //   this.emitter.emit("change");
    // });
    // this.fields.emitter.on(this.fields.name)

    // fields.emitter.all.on((event, value) => {
    //   this.emitter.emit(event, value);
    // }

    return field;
  }

  // ⭐ 订阅表单变化事件
  subscribe(listener: () => void) {
    this.emitter.on("change", listener);
    return () => {
      this.emitter.off("change", listener);
    };
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
