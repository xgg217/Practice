import mitt, { type Emitter } from "mitt";

export type EventBus = {
  scrollToBottom: void;
  scrollToCenter: number;
};

const emitter = mitt<EventBus>();

export default emitter;
