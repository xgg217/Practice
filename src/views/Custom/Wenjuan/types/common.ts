import type { TextProps, OptionsProps } from "./editProps";
import type { Material } from "./store";

// 导出 vue 组件类型
export type VueComType = ReturnType<typeof defineComponent>;

// 组件状态，也就是包含了 type、name、id、status 这些属性
export interface Status {
  type: VueComType; // 组件对应的 vue 组件
  name: Material; // 组件名称
  id: string; // UUID
  status: {
    [key: string]: TextProps | OptionsProps;
  };
}
