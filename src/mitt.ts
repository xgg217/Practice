// 事件总线
import mitt from "mitt";

// 事件名称 使用语义化命名（如 USER:LOGIN），避免冲突
type Events = {
  "VIEW:custom_WenjuanMaterials": string; // 在问卷调查的组件市场中，点击组件
};

const emitter = mitt<Events>();

export default emitter;
