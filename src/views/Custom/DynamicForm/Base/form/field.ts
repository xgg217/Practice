import { Form } from "./form";

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

  form: Form;

  constructor(name: string, form: Form, initialValue: any = "") {
    this.name = name;
    this.form = form;
    this.value = initialValue;
    this.initialValue = initialValue;
  }

  setValue(value: any) {
    this.value = value;
    this.dirty = this.value !== this.initialValue;
    this.touched = true;
  }

  reset() {
    this.value = this.initialValue;
    this.dirty = false;
    this.touched = false;
    this.error = [];
    this.validating = false;
  }
}
