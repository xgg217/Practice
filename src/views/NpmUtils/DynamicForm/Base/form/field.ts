import mitt from "mitt";
import { Form } from "./form";

export type Events = {
  username: { value: string };
  type: { value: string };
  taxID: { value: string };
  contactType: { value: string };
  contact: { value: string };
  reset: { value: boolean }; // 重置事件
};

type EventKeys = keyof Events; // 获取所有 key

export class Field {
  id: string = crypto.randomUUID(); // 字段唯一标识
  name: string; // 字段名称（字段的唯一标识）
  value: any; // 当前值
  initialValue: any; // 初始值
  visible: boolean = true; // 是否显示该字段

  touched = false; // 用户是都操作过该字段(主要是为了验证的时候避免页面打开就报错)

  // 当前值是都不同于初始值
  // 主要是为了 判断是否需要提交，高亮修改过的字段等
  dirty = false;

  error: string[] = []; // 校验错误列表

  // 是否正在进行异步校验，比如loading状态(显示“校验中...”)
  validating = false;

  // 订阅者集合
  emitter = mitt<Events>();

  form: Form;

  constructor(name: string, form: Form, initialValue: any = "") {
    this.name = name;
    this.form = form;
    this.value = initialValue;
    this.initialValue = initialValue;
  }

  setValue(value: any, name: EventKeys) {
    this.value = value;
    this.dirty = this.value !== this.initialValue;
    this.touched = true;
    this.emitter.emit(name, { value });
  }

  reset() {
    this.value = this.initialValue;
    this.dirty = false;
    this.touched = false;
    this.error = [];
    this.validating = false;

    this.emitter.emit("reset", { value: true });
  }
}
