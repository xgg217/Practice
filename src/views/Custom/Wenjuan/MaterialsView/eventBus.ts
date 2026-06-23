import mitt from "mitt";
import type { Events } from "@/views/Custom/Wenjuan/types/eventBus";

// 事件名称 使用语义化命名（如 USER:LOGIN），避免冲突

const emitter = mitt<Events>();

export default emitter;
