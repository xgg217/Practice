import mitt from "mitt";

export type Events = {
  scrollToBottom: void; // 滚动到最底部
  scrollToCenter: number;
};

const emitter = mitt<Events>();

export default emitter;
